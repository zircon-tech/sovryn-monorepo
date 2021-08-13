import React from 'react';
import { WalletConnectionStep } from './types';
export declare type WalletConnectionViewHwOptions = {
    chainId: number;
    dPath: string;
    seed?: string;
    chainCode?: string;
    publicKey?: string;
};
declare type WalletConnectionViewProps = {
    onStep?: (value: WalletConnectionStep) => void;
    onCompleted: (result: boolean) => void;
    hideInstructionLink?: boolean;
};
export declare const WalletConnectionView: React.FC<WalletConnectionViewProps>;
export default WalletConnectionView;
