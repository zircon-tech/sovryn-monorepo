import { ProviderType } from '@sovryn/wallet';
interface Props {
    onWalletSelected: (value: ProviderType) => void;
    hideInstructionLink?: boolean;
}
export declare function BrowserWalletSelector(props: Props): JSX.Element;
export {};
