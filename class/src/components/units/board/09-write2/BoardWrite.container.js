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
        router.push(`/section09/09-04-boards/${result.data.createBoard.number}`);
    }

    const onClickUpdate = async () => {
        console.log(writer)

        const boardUpdateInput = {
            number: Number(router.query.number)
        }
        
        if (writer === undefined){
            boardUpdateInput.writer = props.data?.fetchBoard.writer;
        } else if (writer === "") {
            boardUpdateInput.writer = "";
        } else if (writer) {
            boardUpdateInput.writer = writer;
        }

        if (title === undefined){
            boardUpdateInput.title = props.data?.fetchBoard.title;
        } else if (title === "") {
            boardUpdateInput.title = "";
        } else if (title) {
            boardUpdateInput.title = title;
        }
        

        if (contents === undefined){
            boardUpdateInput.contents = props.data?.fetchBoard.contents;
        } else if (contents === "") {
            boardUpdateInput.contents = "";
        } else if (contents) {
            boardUpdateInput.contents = contents;
        }

        const result = await updateBoard({
            variables: boardUpdateInput
        });

        // const result = await updateBoard({
        //     variables: {
        //         number: Number(router.query.number),
        //         writer: writer, // 우측 변수는 state임
        //         title: title,
        //         contents: contents 
        //     }
        // });
        
        console.log(router.query.number);
        console.log("onClickUpdate");
        console.log(result);
        router.push(`/section09/09-04-boards/${result.data.updateBoard.number}`);
    }

    const onInputWriter = (event) => {
        setWriter(event.target.value);
    }

    const onInputTitle = (event) => {
        setTitle(event.target.value);
    }

    const onInputContents = (event) => {
        setContents(event.target.value);
    }

    return (
        <div>
            <BoardWriteUI 
            onClickRegister={onClickRegister}
            onClickUpdate={onClickUpdate}
            onInputWriter={onInputWriter}
            onInputTitle={onInputTitle}
            onInputContents={onInputContents}
            isEdit={props.isEdit}
            data={props.data}
            />
        </div>
    )

}