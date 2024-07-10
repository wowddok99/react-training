import { useMutation } from "@apollo/client"
import { useState } from 'react' 
import BoardWriteUI from "./BoardWrite.presenter";
import { 나의그래프큐엘셋팅 } from "./BoardWrite.queries";

export default function BoardWrite(){
    const [isActive, setIsActive] = useState(false);
    const [writer, setWriter] = useState();
    const [title, setTitle] = useState();
    const [contents, setContents] = useState();

    const [나의함수] = useMutation(나의그래프큐엘셋팅);

    const onClickSubmit = async () => {
        const result = await 나의함수({
            variables: {
                writer: writer, // 우측 변수는 state임
                title: title,
                contents: contents 
            }
        });
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
            <div>&&&&&&&&&&& 여기는 컨테이너 입니다 &&&&&&&&&&&</div>
            <BoardWriteUI 
            onClickSubmit={onClickSubmit}
            onChangeWriter={onChangeWriter}
            onChangeTitle={onChangeTitle}
            onChangeContents={onChangeContents}
            isActive={isActive}
            />
            <div>&&&&&&&&&&& 여기는 컨테이너 입니다 &&&&&&&&&&&</div>
        </div>
    )

}