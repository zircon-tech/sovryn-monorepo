import WCProvider from '@walletconnect/web3-provider';
import { FullWallet, WalletProviderInterface } from '../interfaces';
import type { WalletService } from '../wallet.service';
export declare class WalletConnectProvider implements WalletProviderInterface {
    private readonly service;
    provider: WCProvider;
    constructor(service: WalletService);
    unlock(chainId: number, uriCallback: (uri: string) => void): Promise<FullWallet>;
}
