import React from 'react';
declare type DialogSize = 'normal' | 'large' | 'small';
interface Props {
    isOpen: boolean;
    onClose: () => void;
    onClosed?: () => void;
    onClosing?: () => void;
    className?: string;
    children?: React.ReactNode;
    size?: DialogSize;
    portalTargetId?: string;
}
export declare function Dialog(props: Props): JSX.Element;
export declare namespace Dialog {
    var defaultProps: {
        size: string;
    };
}
export {};
