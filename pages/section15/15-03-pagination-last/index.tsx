import { useQuery, gql } from '@apollo/client'
import { useState } from 'react';
import { MouseEvent } from 'react';

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

const FETCH_BOARDS_COUNT = gql`
    query {
        fetchBoardsCount
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

export interface FetchBoardsCountData{
    fetchBoardsCount: number;
}

export default function MapBoardsPage(){
    const [startPage, setStartPage] = useState(1);

    const { data: fetchBoardsData, refetch } = useQuery<FetchBoardsData>(FETCH_BOARDS);
    const { data: fetchBoardsCountData } = useQuery<FetchBoardsCountData>(FETCH_BOARDS_COUNT);

    // fetchBoardsCount가 undefined이면 -> 10
    const lastPage = Math.ceil((fetchBoardsCountData?.fetchBoardsCount ?? 10) / 10);

    const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
        void refetch({ page: Number(event.currentTarget.id) });
    }

    const onClickPrevPage = () => {
        if (startPage === 1) {
            return;
        }

        setStartPage(startPage - 10)
        void refetch({ page: startPage - 10 })
    }

    const onClickNextPage = () => {
        // if (startPage + 10 <= lastPage) {
            setStartPage(startPage + 10)
            void refetch({ page: startPage + 10 })
        // } 
    } 

    return (
        <div>
            <div>
                {fetchBoardsData?.fetchBoards.map((el:FetchBoard) => (
                <div key={el._id} style={{display: "flex", gap: "10px"}}>
                        <span>{el.title}</span>
                        <span>{el.writer}</span>
                </div>
                ))}
                <div style={{display:'flex', gap:'10px'}}>
                    <span onClick={onClickPrevPage} style={{cursor:'pointer'}}>이전페이지</span>
                    {new Array(10).fill(1).map((_, index) => (
                        // 현재페이지(index + startPage)가 lastPage 이하까지만 페이징 넘버를 출력 
                        index + startPage <= lastPage ? 
                        (
                        <span key={index + startPage} id={String(index + startPage)} style={{cursor:'pointer'}} onClick={onClickPage}>
                            {index + startPage}
                        </span>
                        ) : null
                    ))}
                    {/* lastPage가 startPage+10 이상이면 다음페이지 버튼 활성화 */}
                    {startPage + 10 <= lastPage && (
                        <span onClick={onClickNextPage} style={{ cursor: 'pointer' }}>
                            다음페이지
                        </span>
                    )}
                </div>
            </div>
        </div>
    )
    }