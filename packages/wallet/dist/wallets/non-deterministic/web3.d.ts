import { TransactionConfig, provider } from 'web3-core';
import { FullWallet } from '../../interfaces';
import { RawTransactionData } from '../../interfaces/wallet.interface';
export declare class Web3Wallet implements FullWallet {
    chainId: number;
    readonly address: string;
    readonly provider: provider;
    constructor(address: string, chainId: number, provider: provider);
    getAddressString(): string;
    signRawTransaction(tx: RawTransactionData): Promise<string>;
    sendTransaction(tx: RawTransactionData): Promise<unknown>;
    signMessage(msg: string): Promise<string>;
    getWalletType(): string;
    disconnect(): Promise<boolean>;
    protected prepareRawTransactionData(tx: RawTransactionData): TransactionConfig;
}
