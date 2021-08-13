import { WalletProviderInterface, FullWallet } from '../interfaces';
export declare class InjectedWalletProvider implements WalletProviderInterface {
    provider: any;
    constructor();
    unlock(): Promise<FullWallet>;
}
