import { useQuery, gql } from '@apollo/client'
import { useState } from 'react';
import type { MouseEvent } from 'react';

const FETCH_BOARDS = gql`

    query fetchBoards($page: Int){
        fetchBoards(page: $page){
            _id
            writer
            title
            contents
        }
    }
`

interface FetchBoard{
    _id: string;
    title: string;
    writer: string;
    createdAt: string;
} 

// section15부터는 portfolioUrl(_app.tsx 참고)로 백엔드가 연결되었습니다.
export interface FetchBoardsData{
    fetchBoards: Array<FetchBoard>;
}

export default function MapBoardsPage(){
    const [myIndex, setMyIndex] = useState<boolean[]>([
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
    ]);

    const { data } = useQuery<FetchBoardsData>(FETCH_BOARDS);

    const onClickEdit = (event: MouseEvent<HTMLButtonElement>): void => {
        // myIndex 배열 내부에 객체가 없으므로, 원본이 아닌 복사 데이터가 생성 된다.
        // 객체가 있으면, 객체 자체는 복사되지 않고 원본 값을 참조함.
        const qqq = [...myIndex];
        qqq[Number(event.currentTarget.id)] = true;
        console.log(qqq);
        setMyIndex(qqq);
    }

    return (
        <div style={{display:"flex", flexDirection:"column"}}>
            {data?.fetchBoards.map((el:FetchBoard, index) => (
            !myIndex[index] ? (
                <div key={el._id} style={{display: "flex", gap: "10px"}}>
                    <span>{el.title}</span>
                    <span>{el.writer}</span>
                    <button id={String(index)} onClick={onClickEdit}>수정하기</button>
                </div>
            ) : (
                <input type="text" key={el._id} />
            )
            ))}
        </div>
    )
    }