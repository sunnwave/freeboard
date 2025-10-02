import Banner from './Banner';
import Header from './Header';
import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import * as S from './Layout.styles';

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
