interface FetchBoard{
    _id: string;
    title: string;
    writer: string;
    createdAt: string;
} 

interface FetchBoardsData{
    fetchBoards: Array<FetchBoard>;
}

interface BoardListProps {
    fetchBoardsData?: FetchBoardsData
}

export default function BoardList(props: BoardListProps) {

    return (
        <div>
            {props.fetchBoardsData?.fetchBoards.map((el:FetchBoard) => (
            <div key={el._id} style={{display: "flex", gap: "10px"}}>
                    <span>{el.title}</span>
                    <span>{el.writer}</span>
            </div>
            ))}
        </div>
    )
}