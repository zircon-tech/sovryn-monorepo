import { ChainCodeResponse, ProviderType } from '@sovryn/wallet';
interface Props {
    chainId?: number;
    provider: ProviderType;
    onComplete: (response: ChainCodeResponse, chainId: number, dPath: string) => void;
    hideInstructionLink?: boolean;
}
export declare function HardwarePathChooser(props: Props): JSX.Element;
export {};
