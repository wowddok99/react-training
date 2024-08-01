import { useMutation } from "@apollo/client"
import { useState } from 'react' 
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { useRouter } from "next/router";

export default function BoardWrite(props){
    const router = useRouter();
    const [writer, setWriter] = useState();
    const [title, setTitle] = useState();
    const [contents, setContents] = useState();

    const [createBoard] = useMutation(CREATE_BOARD);
    const [updateBoard] = useMutation(UPDATE_BOARD);

    const onClickRegister = async () => {
        const result = await createBoard({
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
        const result = await updateBoard({
            variables: {
                number: Number(router.query.number),
                writer: writer, // 우측 변수는 state임
                title: title,
                contents: contents 
            }
        });

        console.log(router.query.number);
        console.log("onClickUpdate");
        console.log(result);
        router.push(`/section09/09-03-boards/${result.data.updateBoard.number}`);
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