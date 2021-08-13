import { ProviderType } from '@sovryn/wallet';
interface Props {
    onWalletSelected: (value: ProviderType) => void;
    hideInstructionLink?: boolean;
}
export declare function HardwareWalletSelector(props: Props): JSX.Element;
export {};
