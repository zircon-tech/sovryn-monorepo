import { FullWallet, WalletProviderInterface } from '../interfaces';
export declare class PortisWalletProvider implements WalletProviderInterface {
    provider: any;
    unlock(chainId: number): Promise<FullWallet>;
    protected getNetwork(chainId: number): any;
}
