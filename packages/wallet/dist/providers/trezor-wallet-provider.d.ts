import { ChainCodeResponse, TrezorWallet } from '../wallets';
import { WalletProviderInterface } from '../interfaces';
export declare function makeTrezorManifest(): void;
export declare class TrezorWalletProvider implements WalletProviderInterface {
    constructor();
    static getChainCode(dPath: string): Promise<ChainCodeResponse>;
    unlock(dPath: string, address: string, index: number): Promise<TrezorWallet>;
}
