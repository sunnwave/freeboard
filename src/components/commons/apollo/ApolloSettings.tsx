import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { JSX } from 'react';

interface IApolloSettingsProps {
  children: JSX.Element;
}

export default function ApolloSettings(props: IApolloSettingsProps): JSX.Element {
  const client = new ApolloClient({
    uri: 'https://backendonline.codebootcamp.co.kr/graphql',
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
