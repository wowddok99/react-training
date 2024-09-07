import { useQuery, gql } from '@apollo/client'
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
    const { data, refetch } = useQuery<FetchBoardsData>(FETCH_BOARDS);

    const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
        void refetch({ page: Number(event.currentTarget.id) });
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
                    {new Array(10).fill(1).map((_, index) => (
                        <span key={index + 1} id={String(index + 1)} style={{cursor:'pointer'}} onClick={onClickPage}>
                            {index + 1}
                        </span>
                    ))}
                    {/* {[1,1,1,1,1,1,1,1,1,1].map((_, index) => (
                        <span key={index + 1} id={String(index + 1)} style={{cursor:'pointer'}} onClick={onClickPage}>
                            {index + 1}
                        </span>
                    ))} */}
                    {/* {[1,2,3,4,5,6,7,8,9,10].map((el, index) => (
                        <span key={el} id={String(el)} style={{cursor:'pointer'}} onClick={onClickPage}>
                            {el}
                        </span>
                    ))} */}
                </div>
            </div>
        </div>
    )
    }