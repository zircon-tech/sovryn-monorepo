import * as React from 'react';
interface Option {
    value: string;
    label: string;
}
interface Props {
    id: string;
    label: React.ReactNode;
    value: string;
    options: Option[];
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
export declare function Select(props: Props): JSX.Element;
export {};
