import { AppProps } from 'next/app';
import LayOut from '../src/components/commons/layout';
import ApolloSetting from '../src/components/commons/apollo';
import { Global } from '@emotion/react';
import { globalStyles } from "../src/components/commons/styles/globalStyles";
import { RecoilRoot } from 'recoil';
// import '../styles/global.css';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <div>
      <RecoilRoot>
        <ApolloSetting>
          <div>
            <Global styles={globalStyles}/>
            {/* <LayOut> */}
                <Component {...pageProps} />
            {/* </LayOut> */}
          </div>
        </ApolloSetting>
      </RecoilRoot>
    </div>
  )
}
