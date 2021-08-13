import type { TxData } from 'ethereumjs-tx';
import type { FullWallet } from '../../interfaces';
import { DeterministicWallet } from './deterministic-wallet';
export interface ChainCodeResponse {
    chainCode: string;
    publicKey: string;
    address?: string;
}
export declare abstract class HardwareWallet extends DeterministicWallet implements FullWallet {
    static getChainCode(dPath: string): Promise<ChainCodeResponse>;
    abstract signRawTransaction(t: TxData): Promise<string>;
    abstract signMessage(msg: string): Promise<string>;
    abstract displayAddress(): Promise<boolean>;
    abstract getWalletType(): string;
    disconnect(): Promise<boolean>;
}
