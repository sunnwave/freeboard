import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';
import { JSX } from 'react';

interface IApolloSettingsProps {
  children: JSX.Element;
}

export default function ApolloSettings(props: IApolloSettingsProps): JSX.Element {
  const client = new ApolloClient({
    link: new HttpLink({
      uri: 'https://backendonline.codebootcamp.co.kr/graphql',
    }),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            fetchBoards: {
              keyArgs: false, // page 같은 argument를 무시하고 캐시를 병합
              merge(existing = [], incoming: any[]) {
                return [...existing, ...incoming];
              },
            },
          },
        },
      },
    }),
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
