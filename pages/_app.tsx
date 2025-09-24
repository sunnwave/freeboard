import 'antd/dist/reset.css';
import { AppProps } from 'next/app';
import Layout from '../src/components/commons/layout/Layout.container';
import ApolloSettings from '../src/components/commons/apollo/ApolloSettings';
import { Global } from '@emotion/react';
import { globalStyles } from '../src/components/commons/styles/globalStyles';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloSettings>
      <>
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    </ApolloSettings>
  );
}
