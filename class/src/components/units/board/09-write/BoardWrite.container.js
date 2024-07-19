import { useMutation } from "@apollo/client"
import { useState } from 'react' 
import BoardWriteUI from "./BoardWrite.presenter";
import { 나의그래프큐엘셋팅 } from "./BoardWrite.queries";
import { useRouter } from "next/router";

export default function BoardWrite(props){
    const router = useRouter();
    const [writer, setWriter] = useState();
    const [title, setTitle] = useState();
    const [contents, setContents] = useState();

    const [나의함수] = useMutation(나의그래프큐엘셋팅);

    const onClickRegister = async () => {
        const result = await 나의함수({
            variables: {
                writer: writer, // 우측 변수는 state임
                title: title,
                contents: contents 
            }
        });
        console.log("onClickRegister");
        console.log(result);
        console.log(result.data.createBoard.number);
        router.push(`/section09/09-03-boards/${result.data.createBoard.number}`);
    }

    const onClickUpdate = async () => {
        const result = await 나의함수({
            variables: {
                writer: writer, // 우측 변수는 state임
                title: title,
                contents: contents 
            }
        });
        console.log("onClickUpdate");
        console.log(result);
    }

    const onChangeWriter = (event) => {
        setWriter(event.target.value);
    }

    const onChangeTitle = (event) => {
        setTitle(event.target.value);
    }

    const onChangeContents = (event) => {
        setContents(event.target.value);
    }

    return (
        <div>
            <BoardWriteUI 
            onClickRegister={onClickRegister}
            onClickUpdate={onClickUpdate}
            onChangeWriter={onChangeWriter}
            onChangeTitle={onChangeTitle}
            onChangeContents={onChangeContents}
            isEdit={props.isEdit}
            />
        </div>
    )

}