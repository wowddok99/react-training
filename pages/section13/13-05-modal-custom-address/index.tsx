import {Modal} from 'antd'
import { useState } from 'react';
import DaumPostcodeEmbed from 'react-daum-postcode';
import type { Address } from 'react-daum-postcode';

export default function ModalCustomPage(){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [address, setAddress] = useState("");

    const showModal = (): void => {
        setIsModalOpen(true);
    };
    
    const handleOk = (): void => {
        setIsModalOpen(false);
    };
    
    const handleCancel = (): void => {
        setIsModalOpen(false);
    };
    
    const handleComplete = (data: Address): void => {
        setAddress(data.address);
        setIsModalOpen(false);
    }
    
    return (
        <div>
            <button onClick={showModal}>모달창 열기</button>
            <br/>
            <input readOnly={true} value={address} style={{width: '30rem'}}></input>
            
            {/* 모달 종료 방식 - 1. 모달 숨기는 방법(ex: 이력서)  */}
            {/* <Modal title="주소 검색" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <DaumPostcodeEmbed onComplete={handleComplete} autoClose={false}/>
            </Modal> */}

            {/* 모달 종료 방식 - 2. 모달 삭제하는 방법(ex: 신용카드, 비밀번호 등) -> 조건부 렌더링 이용  */}
            {isModalOpen && (
                <Modal title="주소 검색" open={true} onOk={handleOk} onCancel={handleCancel}>
                    <DaumPostcodeEmbed onComplete={handleComplete}/>
                </Modal>
            )}
            
        </div>
    )
}