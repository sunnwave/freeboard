import styled from '@emotion/styled';
import Link from 'next/link';

export const HeaderContainer = styled.div`
  width: 100vw;
  height: 160px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  padding: 54px 360px;
`;

export const Logo = styled.img``;
export const LoginContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

export const LoginButton = styled(Link)<{ variant: 'login' | 'signup' }>`
  width: 92px;
  height: 44px;
  padding: 10px 16px;
  margin: 0;
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
  font-family: Noto Sans CJK KR;
  font-weight: 700;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  color: #000000;

  background: ${({ variant }) => (variant === 'signup' ? '#ffd600' : 'transparent')};
`;
