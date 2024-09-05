import { AppProps } from 'next/app';
import '../styles/global.css';
import LayOut from '../src/components/commons/layout';
import ApolloSetting from '../src/components/commons/apollo';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <div>
      <ApolloSetting>
        <LayOut>
            <Component {...pageProps} />
          </LayOut>
      </ApolloSetting>
    </div>
  )
}
