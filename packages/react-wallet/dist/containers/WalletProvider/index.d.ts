import * as React from 'react';
interface Options {
    chainId?: number;
    remember?: boolean;
    showWrongNetworkRibbon?: boolean;
    locale?: string;
}
interface Props {
    options?: Options;
    portalTargetId?: string;
    children: React.ReactNode;
}
export declare function WalletProvider(props: Props): JSX.Element;
export {};
