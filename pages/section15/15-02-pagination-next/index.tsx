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
    const [startPage, setStartPage] = useState(1);

    const { data, refetch } = useQuery<FetchBoardsData>(FETCH_BOARDS);

    const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
        void refetch({ page: Number(event.currentTarget.id) });
    }

    const onClickPrevPage = () => {
        setStartPage(startPage - 10)
        void refetch({ page: startPage - 10 })
    }

    const onClickNextPage = () => {
        setStartPage(startPage + 10)
        void refetch({ page: startPage + 10 })
    } 

    return (
        <div>
            <div>
                {data?.fetchBoards.map((el:FetchBoard) => (
                <div key={el._id} style={{display: "flex", gap: "10px"}}>
                    <span>{el.title}</span>
                    <span>{el.writer}</span>
                </div>
                ))}
                <div style={{display:'flex', gap:'10px'}}>
                    <span onClick={onClickPrevPage} style={{cursor:'pointer'}}>이전페이지</span>
                    {new Array(10).fill(1).map((_, index) => (
                        <span key={index + startPage} id={String(index + startPage)} style={{cursor:'pointer'}} onClick={onClickPage}>
                            {index + startPage}
                        </span>
                    ))}
                    <span onClick={onClickNextPage} style={{cursor:'pointer'}}>다음페이지</span>
                </div>
            </div>
        </div>
    )
    }