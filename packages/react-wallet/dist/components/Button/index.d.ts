import * as React from 'react';
interface Props {
    text: React.ReactNode;
    onClick: () => void;
    disabled?: boolean;
}
export declare function Button(props: Props): JSX.Element;
export {};
