import Banner from './banner';
import Header from './header';
import * as S from './Layout.styles';
import { ReactNode } from 'react';
import Navbar from './navbar';
import Footer from './footer';

interface LayoutProps {
  children: ReactNode;
}
export default function Layout({ children }: LayoutProps) {
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
