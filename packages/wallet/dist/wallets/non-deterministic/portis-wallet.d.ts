import type Portis from '@portis/web3';
import type { provider } from 'web3-core';
import { Web3Wallet } from './web3';
export declare class PortisWallet extends Web3Wallet {
    readonly provider: provider;
    readonly portis: Portis;
    constructor(address: string, chainId: number, portis: Portis);
    getWalletType(): string;
    disconnect(): Promise<boolean>;
}
