import { provider } from 'web3-core';
import type WCProvider from '@walletconnect/web3-provider';
import { RawTransactionData } from '../../interfaces/wallet.interface';
import { Web3Wallet } from './web3';
export declare class WalletConnectWallet extends Web3Wallet {
    readonly provider: WCProvider;
    constructor(address: string, chainId: number, provider: provider);
    getWalletType(): string;
    disconnect(): Promise<boolean>;
    sendTransaction(tx: RawTransactionData): Promise<any>;
    signMessage(msg: string): Promise<string>;
}
