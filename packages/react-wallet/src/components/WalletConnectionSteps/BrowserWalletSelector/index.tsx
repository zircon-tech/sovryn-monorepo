import { ProviderType } from '@sovryn/wallet';
import * as React from 'react';
import { WalletContainer, WalletIcon } from './styles';
import { images } from '../../../assets/images';

interface Props {
  onWalletSelected: (value: ProviderType) => void;
  hideInstructionLink?: boolean;
}

const wallet = detectInjectableWallet();

export function BrowserWalletSelector(props: Props) {
  const handleConnectInjected = (
    connectTo: 'liquality' | 'metamask' | 'nifty',
  ) => {
    if (wallet === 'unknown') {
      return alert('Unknown Wallet');
    } else if (wallet === connectTo) {
      return props.onWalletSelected(ProviderType.WEB3);
    } else {
      return alert(
        'This wallet could not be installed or maybe its not the default one for web3.',
      );
    }
  };
  return (
    <div>
      <WalletContainer onClick={() => handleConnectInjected('liquality')}>
        Liquality
        <WalletIcon src={images.liqualityWallet} />
      </WalletContainer>
      <WalletContainer onClick={() => handleConnectInjected('nifty')}>
        Nifty
        <WalletIcon src={images.niftyWallet} />
      </WalletContainer>
      <WalletContainer onClick={() => handleConnectInjected('metamask')}>
        Metamask
        <WalletIcon src={images.metamaskWallet} />
      </WalletContainer>
      <WalletContainer
        onClick={() => props.onWalletSelected(ProviderType.PORTIS)}
      >
        Portis
        <WalletIcon src={images.portisWallet} />
      </WalletContainer>
    </div>
  );
}

function detectInjectableWallet() {
  const { ethereum } = window as any;
  if (ethereum) {
    ethereum.autoRefreshOnNetworkChange = false;
    if (ethereum.isLiquality) return 'liquality';
    if (ethereum.isNiftyWallet) return 'nifty';
    if (ethereum.isMetaMask) return 'metamask';
    return 'unknown';
  }
  return 'none';
}
