import { useMutation, gql } from "@apollo/client"
import { useRouter } from "next/router";

const CREATE_BOARD = gql`
    mutation createBoard($writer: String, $title: String, $contents: String){
        createBoard(writer: $writer, title: $title, contents: $contents){
            _id
            number
            message
        }
    }
`

export default function DynamicRoutingBoardMutationPage(){
    const router = useRouter()

    const [createBoard] = useMutation(CREATE_BOARD);

    const onClickSubmit = async () => {
        try {

            const result = await createBoard({
                variables: {
                    writer: "훈이",
                    title: "안녕하세요!!",
                    contents: "반갑습니다"
                }
            });
            console.log(result.data.createBoard.number);
            // router.push("/section05/05-05-dynamic-routing-board-mutation-moved/" + result.data.createBoard.number)
            // result안에 등록된 게시글의 number가 들어있으므로 해당 number를 기준으로 주소 이동
            router.push(`/section05/05-05-dynamic-routing-board-mutation-moved/${result.data.createBoard.number}`)
        
        } catch(error) {
            alert(error.message);
        }
    }
    
    // 한 줄일때는 괄호 불필요
    return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
}