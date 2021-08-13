interface Props {
    image: string;
    title: string;
    onClick?: () => void;
    active?: boolean;
    faded?: boolean;
    disabled?: boolean;
    linkTitle?: string;
    linkHref?: string;
    small?: boolean;
    href?: string;
}
export declare function Item(props: Props): JSX.Element;
export declare function ItemLink(props: Props): JSX.Element;
interface WalletItemProps extends Props {
    ios?: string;
    android?: string;
    universal?: string;
}
export declare function WalletItem(props: WalletItemProps): JSX.Element;
export {};
