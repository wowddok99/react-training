import { useMutation, gql } from "@apollo/client"
import { Mutation, MutationCreateBoardArgs } from "../../../src/commons/types/generated/types";
import { useState } from "react";

const CREATE_BOARD = gql`
    mutation createBoard($writer: String, $title: String, $contents: String){
        createBoard(writer: $writer, title: $title, contents: $contents){
            _id
            number
            message
        }
    }
`

export default function GraphqlMutationPage(){
    // const [counter, setCounter] = useState<number>(0)

    // const [createBoard] = useMutation<결과타입, 변수타입>(CREATE_BOARD);
    const [ createBoard ] = useMutation<Pick<Mutation, "createBoard">, MutationCreateBoardArgs>(CREATE_BOARD);

    const onClickSubmit = async () => {
        const result = await createBoard({
            variables: {
                writer: "훈이",
                title: "안녕하세요!!",
                contents: "반갑습니다"
            }
        });
        console.log(result);
    }
    
    // 한 줄일때는 괄호 불필요
    return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
}