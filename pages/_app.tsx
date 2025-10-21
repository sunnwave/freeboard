import 'antd/dist/reset.css';
import { AppProps } from 'next/app';
import ApolloSettings from '../src/components/commons/Apollo/ApolloSettings';
import { Global } from '@emotion/react';
import { globalStyles } from '../src/components/commons/styles/globalStyles';
import Layout from '../src/components/commons/Layout';
import GlobalStyles from 'styles/GlobalStyles';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloSettings>
      <>
        <Global styles={globalStyles} />
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    </ApolloSettings>
  );
}
