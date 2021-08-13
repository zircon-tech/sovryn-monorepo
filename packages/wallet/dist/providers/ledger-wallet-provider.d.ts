import LedgerEth from '@ledgerhq/hw-app-eth';
import { ChainCodeResponse, LedgerWallet } from '../wallets';
import { WalletProviderInterface } from '../interfaces';
declare type LedgerError = U2FError | ErrorWithId | Error | string;
export declare function makeApp(): Promise<LedgerEth>;
export declare class LedgerWalletProvider implements WalletProviderInterface {
    static getChainCode(dPath: string): Promise<ChainCodeResponse>;
    unlock(dPath: string, address: string, index: number): Promise<LedgerWallet>;
}
export declare function ledgerErrToMessage(err: LedgerError): string;
export {};
