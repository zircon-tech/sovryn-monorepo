import { HardwareWallet } from './deterministic';
import { RawTransactionData } from '../interfaces/wallet.interface';
export declare class TrezorWallet extends HardwareWallet {
    constructor(address: string, dPath: string, index: number, chainId?: number);
    signRawTransaction(raw: RawTransactionData): Promise<string>;
    signMessage(msg: string): Promise<string>;
    displayAddress(): Promise<boolean>;
    getWalletType(): string;
}
