import { useQuery, gql } from '@apollo/client'

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
    const { data, refetch} = useQuery<FetchBoardsData>(FETCH_BOARDS);

    const onClickPage1 = (): void => {
        refetch({ page: 1 });
    }

    const onClickPage2 = (): void => {
        refetch({ page: 2 });
    }

    const onClickPage3 = (): void => {
        refetch({ page: 3 });
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
                    <span style={{cursor:'pointer'}} onClick={onClickPage1}>1</span>
                    <span style={{cursor:'pointer'}} onClick={onClickPage2}>2</span>
                    <span style={{cursor:'pointer'}} onClick={onClickPage3}>3</span>
                </div>
            </div>
        </div>
    )
    }