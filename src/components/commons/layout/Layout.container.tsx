import LayoutUI from './Layout.presenter';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <LayoutUI>{children}</LayoutUI>;
}
