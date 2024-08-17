import { AppProps } from 'next/app';
import '../styles/global.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

export default function App({ Component, pageProps }: AppProps) {

  const client = new ApolloClient({
      uri: "http://backend-example.codebootcamp.co.kr/graphql",
      cache: new InMemoryCache() // 컴퓨터의 메모리에다가 백엔드에서 받아온 데이터 임시로 저장함.
  });

  return (
    <div>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </div>
  )
}
