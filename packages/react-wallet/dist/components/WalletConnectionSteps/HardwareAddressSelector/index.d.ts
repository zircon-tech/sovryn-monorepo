interface Props {
    chainId: number;
    seed?: string;
    dPath: string;
    chainCode?: string;
    publicKey?: string;
    limit?: number;
    onUnlock: (address: string, index: number) => void;
}
export declare function HardwareAddressSelector(props: Props): JSX.Element;
export declare namespace HardwareAddressSelector {
    var defaultProps: {
        limits: number;
    };
}
export {};
