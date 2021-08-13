import { HardwareWallet } from '../deterministic';
import { RawTransactionData } from '../../interfaces/wallet.interface';
export declare class LedgerWallet extends HardwareWallet {
    signRawTransaction(raw: RawTransactionData): Promise<string>;
    signMessage(msg: string): Promise<string>;
    displayAddress(): Promise<boolean>;
    getWalletType(): string;
}
