// components/common/Layout/Layout.presenter.tsx
import Carousel from '../carousel/Carousel.container';
import Footer from '../footer/Footer.container';
import Header from '../header/Header.container';
import Navbar from '../navbar/Navbar.container';
import * as S from './Layout.styles';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function LayoutUI({ children }: LayoutProps) {
  return (
    <S.Container>
      <Header />
      <Carousel />
      <Navbar />
      <S.Main>{children}</S.Main>
      <Footer />
    </S.Container>
  );
}
