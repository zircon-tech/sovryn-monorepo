import React from 'react';
import { PopUp } from './styles';

interface IProps {
  children: React.ReactNode;
}

export const WalletPopup = ({ children }: IProps) => {
  return <PopUp>{children}</PopUp>;
};
