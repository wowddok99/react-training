import { useQuery, gql } from '@apollo/client'
import { ChangeEvent, MouseEvent, useState } from 'react';

const FETCH_BOARDS = gql`

    query fetchBoards($page: Int, $search: String){
        fetchBoards(page: $page, search: $search){
            _id
            writer
            title
            contents
        }
    }
`

interface FetchBoard{
    _id: string
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

    const [search, setSearch] = useState("")

    // 
    const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
        // 검색에서 refetch를 하면, refetch에 추가로 search를 포함 시키지 않아도 됨.
        refetch({ page: Number(event.currentTarget.id) });
    }

    const onChangeSearch = (event: ChangeEvent<HTMLInputElement>): void => {
        setSearch(event.currentTarget.value);
    }

    const onClickSearch = (): void => {
        refetch({
            page:1,
            search: search
        });
    }

    return (
        <div style={{padding:"10px"}}>
            <div>
                <div>
                    <span>검색어 입력:</span>
                    <input type="text" onChange={onChangeSearch}></input>
                </div>
                <button onClick={onClickSearch}>검색하기</button>
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
                </div>
            </div>
        </div>
    )
    }