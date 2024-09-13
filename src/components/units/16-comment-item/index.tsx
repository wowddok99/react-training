import { useState } from "react";

export default function CommentItem(props: any){
    const [isEdit, setIsEdit] = useState<boolean>(false);

    const onClickEdit = (): void => {
        setIsEdit(true);
    }

    return (
        <div>
            {!isEdit ? (
                <div style={{display: "flex", gap: "10px"}}>
                    <span>{props.el.title}</span>
                    <span>{props.el.writer}</span>
                    <button onClick={onClickEdit}>수정하기</button>
                </div>
            ) : (
                <input type="text"/>
            )}
        </div>
    )
}