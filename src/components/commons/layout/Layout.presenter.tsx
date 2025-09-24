// components/common/Layout/Layout.presenter.tsx
import Footer from './footer/Footer.container';
import Header from './header/Header.container';
import Navbar from './navbar/Navbar.container';
import * as S from './Layout.styles';
import { ReactNode } from 'react';
import Banner from './banner';

interface LayoutProps {
  children: ReactNode;
}

export default function LayoutUI({ children }: LayoutProps) {
  return (
    <S.Container>
      <Header />
      <Banner />
      <Navbar />
      <S.Main>{children}</S.Main>
      <Footer />
    </S.Container>
  );
}
