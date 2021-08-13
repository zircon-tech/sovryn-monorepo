import React, { useContext } from 'react';
import { WalletContext } from '../../contexts/WalletContext';
import { WalletConnectionView } from '../WalletConnectionView';
import { WalletPopup } from '../WalletPopup';
// @ts-ignore
import useOnClickOutside from 'use-onclickoutside';

type WalletConnectionDialogProps = {
  portalTargetId?: string;
  isOpen: boolean;
  onClose: () => void;
};

export function WalletConnectionDialog({
  onClose,
}: WalletConnectionDialogProps) {
  const context = useContext(WalletContext);

  const ref = React.useRef(null);
  useOnClickOutside(ref, () => context.connecting && context.close());

  return (
    // @ts-ignore: Unreachable code error
    <WalletPopup ref={ref}>
      <WalletConnectionView onCompleted={onClose} hideInstructionLink={true} />
    </WalletPopup>
  );
}
