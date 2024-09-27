import { ApolloClient, ApolloLink, ApolloProvider, InMemoryCache } from "@apollo/client";
import { createUploadLink } from 'apollo-upload-client'

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
        cache: new InMemoryCache() // 컴퓨터의 메모리에다가 백엔드에서 받아온 데이터 임시로 저장함.
    });

    return (
        <ApolloProvider client={client}>
            {props.children}
        </ApolloProvider>
    )
}