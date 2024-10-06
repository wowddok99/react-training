import { useEffect } from "react";
import { isEditState } from "../../../src/commons/stores";
import { useRecoilState } from 'recoil'
import BoardWrite from "../../../src/components/units/22-global-state/BoardWrite.container";

export default function GlobalStateWithRecoilPage(props: any){
    const [isEdit, SetIsEdit] = useRecoilState(isEditState);

    useEffect(() => {
        SetIsEdit(false);
    }, []);

    return (
        <BoardWrite/>
    )
}