import * as React from 'react';
import { WalletContext } from '../contexts';
import styled from 'styled-components';

const Button = styled.button`
  min-width: 100px;
  padding: 13px 20px;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  border: solid 2px rgb(50, 240, 95);
  background-color: rgb(50, 240, 95);
  cursor: pointer;
  :focus {
    outline: none;
  }
`;

export function WalletButton() {
  const context = React.useContext(WalletContext);
  console.log(context.close);
  return (
    <Button
      onClick={() => (context.connecting ? context.close() : context.connect())}
    >
      {context.connecting ? 'CONNECTING' : 'CONNECT WALLET'}
    </Button>
  );
}
