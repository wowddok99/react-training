import { useQuery, gql } from '@apollo/client'
import { MouseEvent, useState } from 'react';

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
    const [myIndex, setMyIndex] = useState<number|undefined>(undefined);

    const { data } = useQuery<FetchBoardsData>(FETCH_BOARDS);

    const onClickEdit = (event: MouseEvent<HTMLButtonElement>): void => {
        setMyIndex(Number(event.currentTarget.id));
    }

    return (
        <div>
            {data?.fetchBoards.map((el:FetchBoard, index) => (
            index !== myIndex ? (
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