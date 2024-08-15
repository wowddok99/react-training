import { useQuery, gql } from '@apollo/client'

const FETCH_BOARDS = gql`
    query{
        fetchBoards(page:1){
            number
            writer
            title
            contents
        }
    }
`

interface fetchBoard{
    contents: string;
    title: string;
    writer: string;
}

export default function MapBoardsPage(){
    const { data } = useQuery(FETCH_BOARDS);

    console.log(data?.fetchBoards)
    // console.log(data?.fetchBoards.map(el => <div>{el.contents}</div>))
    return (
        <div>
            <div>
                {data?.fetchBoards.map((el: fetchBoard) => (
                <div style={{display: "flex", gap: "10px"}}>
                    <span>
                        <input type="checkbox"></input>
                    </span>
                    <span>{el.contents}</span>
                    <span>{el.title}</span>
                    <span>{el.writer}</span>
                </div>
                ))}
            </div>
        </div>
    )
    }