import { useQuery, gql } from '@apollo/client'

const FETCH_BOARDS = gql`
    query fetchBoards{
        fetchBoards{
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
    const { data } = useQuery<FetchBoardsData>(FETCH_BOARDS);

    return (
        <div>
            <div>
                {data?.fetchBoards.map((el:FetchBoard) => (
                <div key={el._id} style={{display: "flex", gap: "10px"}}>
                    <span>{el.title}</span>
                    <span>{el.writer}</span>
                </div>
                ))}
            </div>
        </div>
    )
    }