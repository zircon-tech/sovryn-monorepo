import styled from "styled-components";

export const WalletContainer = styled.div<{ connected?: boolean }>`
  cursor: pointer;
  height: 55px;
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
  background-color: rgba(255, 255, 255, 0.08);
  border: ${props =>
    props?.connected
      ? '2px solid #32f05f91'
      : '2px solid rgba(255, 255, 255, 0.08)'};
  border-radius: 6px;
  transition: 0.3s;
  :hover {
    border: 2px solid #32f05f91;
  }
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0px;
  }
`;

export const WalletIcon = styled.img`
  border-radius: 50%;
  padding: 2px;
  height: 35px;
  width: 35px;
  background: white;
  object-fit: contain;
`;