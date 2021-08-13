import React from 'react';
import { FullWallet, ProviderType, WalletService } from '@sovryn/wallet';
export declare const DEFAULT_CHAIN_ID = 30;
export declare type WalletContextStateType = {
    wallet: WalletService;
    expectedChainId?: number;
    chainId?: number;
    address?: string;
    hwIndex?: number;
    provider?: ProviderType;
    dPath?: string;
    seed?: string;
    chainCode?: string;
    publicKey?: string;
    uri?: string;
    connected: boolean;
    connecting: boolean;
};
export declare type WalletContextFunctionsType = {
    /**
     * Updates the context values
     */
    set: (newState: WalletContextStateType) => void;
    /**
     * Opens the WalletConnectionDialog
     */
    connect: () => void;
    /**
     * Close wallet popup
     */
    close: () => void;
    /**
     * Disconnect from wallet, and reset context values
     */
    disconnect: () => void;
    /**
     * Registers the passed wallet with the WalletService
     */
    setConnectedWallet: (wallet: FullWallet) => Promise<boolean>;
    /**
     * Tries to reconnect to the current active wallet.
     */
    reconnect: () => Promise<boolean>;
    /**
     * Creates a new wallet instance, tries to unlock it and registers it with the WalletService.
     */
    unlockDeterministicWallet: (address: string, index: number, provider: ProviderType, path?: string, chainId?: number) => Promise<boolean>;
    /**
     * Creates a new wallet instance, tries to unlock it and registers it with the WalletService.
     */
    unlockWeb3Wallet: (provider: ProviderType, chainId?: number) => Promise<boolean>;
};
export declare type WalletContextType = WalletContextStateType & WalletContextFunctionsType;
export declare const WalletContext: React.Context<WalletContextType>;
