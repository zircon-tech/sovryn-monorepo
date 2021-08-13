import { bufferToHex } from 'ethereumjs-util';
import { provider } from 'web3-core';
import type WCProvider from '@walletconnect/web3-provider';
import { RawTransactionData } from '../../interfaces/wallet.interface';
import { ProviderType } from '../../constants';
import { Web3Wallet } from './web3';

export class WalletConnectWallet extends Web3Wallet {
  // @ts-ignore
  readonly provider: WCProvider;

  constructor(address: string, chainId: number, provider: provider) {
    super(address, chainId, provider);
  }

  // disconnect if the user is is out
  public getWalletType(): string {
    return ProviderType.WALLET_CONNECT;
  }

  public disconnect(): Promise<boolean> {
    if (!this.provider) {
      return Promise.resolve(true);
    }
    return this.provider.wc.killSession().then(() => true);
  }

  public async sendTransaction(tx: RawTransactionData) {
    if (!this.provider) {
      return Promise.reject(Error('provider is not availble'));
    }
    return await this.provider.wc.sendTransaction(
      // @ts-ignore
      this.prepareRawTransactionData(tx),
    );
  }

  public async signMessage(msg: string): Promise<string> {
    if (!this.provider) {
      return Promise.reject(Error('provider is not availble'));
    }
    const msgHex = bufferToHex(Buffer.from(msg));
    // @ts-ignore
    return await this.provider.wc.signPersonalMessage([
      msgHex,
      this.address.toLowerCase(),
    ]);
  }
}
