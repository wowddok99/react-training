import { useMutation, gql } from "@apollo/client"

const 나의그래프큐엘셋팅 = gql`
    mutation createBoard($seller: String, $createProductInput: createProductInput!){ # 변수의 타입 적는 곳
        createBoard(seller: $seller, createProductInput: $createProductInput){ # 실제가 우리가 전달할 변수 적는 곳
            _id
            number
            message
        }
    }
`

export default function GraphqlMutationPage(){
    const [나의함수] = useMutation(나의그래프큐엘셋팅);

    const onClickSubmit = async () => {
        const result = await 나의함수({
            variables: {
                seller: "훈이",
                createProductInput:{
                    name: "마우스",
                    detail: "정말 좋은 마우스",
                    price: 3000
                }
            }
        });
        console.log(result);
    }
    
    // 한 줄일때는 괄호 불필요
    return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
}