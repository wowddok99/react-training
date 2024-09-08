import { useQuery, gql } from '@apollo/client'
import BoardList from '../../../src/components/units/boardList';
import Pagination from '../../../src/components/commons/pagination';

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
    const { data: fetchBoardsData, refetch } = useQuery<FetchBoardsData>(FETCH_BOARDS);
    const { data: fetchBoardsCountData } = useQuery<FetchBoardsCountData>(FETCH_BOARDS_COUNT);

    // fetchBoardsCount가 undefined이면 -> 10
    const lastPage = Math.ceil((fetchBoardsCountData?.fetchBoardsCount ?? 10) / 10);

    return (
        <div>
            <BoardList fetchBoardsData={fetchBoardsData} />
            <Pagination refetch={refetch} lastPage={lastPage} />
        </div>
    )
}