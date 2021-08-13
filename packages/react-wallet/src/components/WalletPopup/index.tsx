import React from 'react';
import { PopUp } from './styles';

interface IProps {
  children: React.ReactNode;
}

export const WalletPopup = React.forwardRef(({ children }: IProps) => {
  return <PopUp >{children}</PopUp>;
});
