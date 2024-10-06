import { ApolloClient, ApolloLink, ApolloProvider, InMemoryCache } from "@apollo/client";
import { createUploadLink } from 'apollo-upload-client'

// 함수 밖으로 분리하였으므로 페이지 이동시 리렌더링 x 
const GLOBAL_STATE = new InMemoryCache

interface ApolloSettingProps {
    children: JSX.Element
}

export default function ApolloSetting(props: ApolloSettingProps){
    const exampleUrl = "http://backend-example.codebootcamp.co.kr/graphql";
    const portfolioUrl = "http://backend-practice.codebootcamp.co.kr/graphql";

    const uploadLink = createUploadLink({
        uri: portfolioUrl
    })

    const client = new ApolloClient({
        link: ApolloLink.from([uploadLink]),
        // 페이지 이동시에는 new로 새로 생성함.
        cache: GLOBAL_STATE // apollo cache state -> useQuery의 결과를 여기 저장함
    });

    return (
        <ApolloProvider client={client}>
            {props.children}
        </ApolloProvider>
    )
}