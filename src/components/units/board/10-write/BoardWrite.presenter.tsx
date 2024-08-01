import { RedInput, BlueButton } from "./BoardWrite.styles"
import { BoardWriteUIProps } from "./BoardWrite.types"

export default function BoardWriteUI(props: BoardWriteUIProps){
    return (
        <div>
            <div>
                작성자: <input type="text" onInput={props.onInputWriter} defaultValue={props.data?.fetchBoard.writer}/>
                제목: <input type="title" onInput={props.onInputTitle} defaultValue={props.data?.fetchBoard.title}/>
                내용: <input type="text" onInput={props.onInputContents} defaultValue={props.data?.fetchBoard.contents}/>
                <button onClick={props.isEdit ? props.onClickUpdate : props.onClickRegister}>
                    {props.isEdit ? "수정" : "등록"}하기
                </button>
            </div>
        </div>
    )
}