var _a, _b;
import { ProviderType } from '../constants';
import { InjectedWalletProvider, LedgerWalletProvider, PortisWalletProvider, TrezorWalletProvider, WalletConnectProvider, } from '../providers';
import { LedgerWallet, TrezorWallet, PortisWallet, WalletConnectWallet, Web3Wallet, } from '../wallets';
export var walletProviderMap = (_a = {},
    _a[ProviderType.WEB3] = InjectedWalletProvider,
    _a[ProviderType.LEDGER] = LedgerWalletProvider,
    _a[ProviderType.TREZOR] = TrezorWalletProvider,
    _a[ProviderType.PORTIS] = PortisWalletProvider,
    _a[ProviderType.WALLET_CONNECT] = WalletConnectProvider,
    _a);
export var hardwareWallets = [ProviderType.LEDGER, ProviderType.TREZOR];
export var web3Wallets = [
    ProviderType.WEB3,
    ProviderType.PORTIS,
    ProviderType.WALLET_CONNECT,
];
export function isHardwareWallet(x) {
    return hardwareWallets.includes(x);
}
export function isWeb3Wallet(x) {
    return web3Wallets.includes(x);
}
export var providerToWalletMap = (_b = {},
    _b[ProviderType.WEB3] = Web3Wallet,
    _b[ProviderType.LEDGER] = LedgerWallet,
    _b[ProviderType.TREZOR] = TrezorWallet,
    _b[ProviderType.PORTIS] = PortisWallet,
    _b[ProviderType.WALLET_CONNECT] = WalletConnectWallet,
    _b);
//# sourceMappingURL=wallet-provider-map.js.map