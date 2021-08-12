import React, { useState } from 'react';
// import { useMemo } from 'react';
import { WalletConnectionStep } from '../WalletConnectionView/types';
import { WalletConnectionView } from '../WalletConnectionView';
import { WalletPopup } from '../WalletPopup';

type WalletConnectionDialogProps = {
  portalTargetId?: string;
  isOpen: boolean;
  onClose: () => void;
};

export function WalletConnectionDialog({
  // portalTargetId,
  // isOpen,
  onClose,
}: WalletConnectionDialogProps) {
  const [step, setStep] = useState<WalletConnectionStep>(
    WalletConnectionStep.NONE,
  );

  return (
    <WalletPopup>
      <WalletConnectionView
        onStep={setStep}
        onCompleted={onClose}
        hideInstructionLink={true}
      />
    </WalletPopup>
  );
}
