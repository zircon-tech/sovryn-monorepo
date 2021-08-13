import { ProviderType } from '@sovryn/wallet';
interface Props {
    onWalletSelected: (value: ProviderType) => void;
    uri?: string;
    hideInstructionLink?: boolean;
}
export declare function WalletConnectProviders(props: Props): JSX.Element;
export {};
