import { WalletConnectionStep } from '../../WalletConnectionView/types';
interface Props {
    onStep: (value: WalletConnectionStep) => void;
    hideInstructionLink?: boolean;
}
export declare function ProviderTypeSelector(props: Props): JSX.Element;
export {};
