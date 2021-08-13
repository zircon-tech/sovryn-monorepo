import * as React from 'react';
// import { useTranslation } from 'react-i18next';
// import { ItemList } from '../../ItemList';
// import { Item } from '../../Item';
// import { images } from '../../../assets/images';
import { WalletConnectionStep } from '../../WalletConnectionView/types';
// import { BottomLinkContainer } from '../../BottomLinkContainer';
// import { translations } from '../../../locales/i18n';
import { useEffect } from 'react';

interface Props {
  onStep: (value: WalletConnectionStep) => void;
  hideInstructionLink?: boolean;
}

export function ProviderTypeSelector(props: Props) {
  // const { t } = useTranslation();

  useEffect(() => {
    props.onStep(WalletConnectionStep.BROWSER_PROVIDERS);
  }, []);

  return (
    <div>
      {/* <h1>{t(translations.dialogs.providerTypes.title)}</h1>
      <ItemList>
        <Item
          image={images.hardwareWallets}
          title={t(translations.dialogs.providerTypes.items.hardware)}
          onClick={() => props.onStep(WalletConnectionStep.HARDWARE_PROVIDERS)}
        />
        <Item
          image={images.mobileWallets}
          title={t(translations.dialogs.providerTypes.items.mobile)}
          onClick={() =>
            props.onStep(WalletConnectionStep.WALLET_CONNECT_PROVIDERS)
          }
        />
        <Item
          image={images.browserWallets}
          title={t(translations.dialogs.providerTypes.items.browser)}
          onClick={() => props.onStep(WalletConnectionStep.BROWSER_PROVIDERS)}
        />
      </ItemList>
      {!props.hideInstructionLink && (
        <BottomLinkContainer>
          <a
            href='https://wiki.sovryn.app'
            target='_blank'
            rel='noreferrer noopener'
          >
            {t(translations.dialogs.providerTypes.instructions)}
          </a>
        </BottomLinkContainer>
      )} */}
    </div>
  );
}
