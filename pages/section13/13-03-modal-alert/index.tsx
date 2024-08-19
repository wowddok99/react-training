import {Modal} from 'antd'

export default function ModalAlertPage(){

    const onClickSuccess = (): void => {
        Modal.success({
            content: '게시물 등록에 성공했습니다.',
        });
    }

    const onClickError = (): void => {
        Modal.error({
            content: '게시물 등록에 실패했습니다.',
        });
    }

    return (
        <div>
            <button onClick={onClickSuccess}>Success</button>
            <button onClick={onClickError}>Error</button>
        </div>
    )
}