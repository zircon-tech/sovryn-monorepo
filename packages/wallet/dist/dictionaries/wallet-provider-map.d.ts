import { ProviderType } from '../constants';
import { InjectedWalletProvider, LedgerWalletProvider, PortisWalletProvider, TrezorWalletProvider, WalletConnectProvider } from '../providers';
import { LedgerWallet, TrezorWallet, PortisWallet, WalletConnectWallet, Web3Wallet } from '../wallets';
export declare const walletProviderMap: {
    injected: typeof InjectedWalletProvider;
    ledger: typeof LedgerWalletProvider;
    trezor: typeof TrezorWalletProvider;
    portis: typeof PortisWalletProvider;
    wallet_connect: typeof WalletConnectProvider;
};
export declare const hardwareWallets: ProviderType[];
export declare const web3Wallets: ProviderType[];
export declare function isHardwareWallet(x: ProviderType): x is ProviderType.LEDGER | ProviderType.TREZOR;
export declare function isWeb3Wallet(x: ProviderType): x is ProviderType.WEB3 | ProviderType.PORTIS | ProviderType.WALLET_CONNECT;
export declare const providerToWalletMap: {
    injected: typeof Web3Wallet;
    ledger: typeof LedgerWallet;
    trezor: typeof TrezorWallet;
    portis: typeof PortisWallet;
    wallet_connect: typeof WalletConnectWallet;
};
