import { RedInput, BlueButton } from "./BoardWrite.styles"

export default function BoardWriteUI(props){

    return (
        <div>
            <div>
                작성자: <input type="text" onChange={props.onChangeWriter} />
                제목: <input type="title" onChange={props.onChangeTitle} />
                내용: <input type="text" onChange={props.onChangeContents} />
                <button onClick={props.isEdit ? props.onClickUpdate : props.onClickRegister}>
                    {props.isEdit ? "수정" : "등록"}하기
                </button>
            </div>
        </div>
    )

}