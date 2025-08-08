// import "@/styles/globals.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { AppProps } from 'next/app';
import GlobalStyles from '../styles/GlobalStyles';

export default function App({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: 'https://backendonline.codebootcamp.co.kr/graphql',
    cache: new InMemoryCache(),
  });

  return (
    // <>
    <ApolloProvider client={client}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ApolloProvider>
    // </>
  );
}
