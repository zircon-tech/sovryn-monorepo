import { FullWallet } from './interfaces';
import { NetworkDictionary } from './dictionaries';
import { ProviderType } from './constants';
import { EventBag } from './utils';
import type { RawTransactionData } from './interfaces/wallet.interface';
declare type WalletServiceEvents = 'connected' | 'error' | 'disconnected' | 'connect' | 'disconnect';
export declare class WalletService {
    readonly events: EventBag<WalletServiceEvents>;
    readonly networkDictionary: NetworkDictionary;
    private _wallet?;
    private _providerType?;
    constructor();
    start(provider: ProviderType): Promise<import("./providers").InjectedWalletProvider | import("./providers").LedgerWalletProvider | import("./providers").TrezorWalletProvider | import("./providers").PortisWalletProvider | import("./providers").WalletConnectProvider | undefined>;
    connect(wallet: FullWallet): Promise<void>;
    disconnect(): Promise<boolean>;
    /**
     * @deprecated use connected prop instead.
     */
    isConnected(): boolean;
    get connected(): boolean;
    /**
     * @deprecated use address prop instead.
     */
    getAddress(): string;
    /**
     * @deprecated use wallet prop instead.
     */
    getWallet(): FullWallet | undefined;
    get address(): string;
    get wallet(): FullWallet | undefined;
    get providerType(): ProviderType | undefined;
    get chainId(): number;
    signTransaction(tx: RawTransactionData): any;
    signMessage(message: string): Promise<string>;
}
export {};
