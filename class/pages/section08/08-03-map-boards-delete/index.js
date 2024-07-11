import { useQuery, gql, useMutation } from '@apollo/client'

const FETCH_BOARDS = gql`
    query{
        fetchBoards(page: 1){
            number
            writer
            title
            contents
        }
    }
`
const DELETE_BOARD = gql`
    mutation deleteBoard($number: Int){
        deleteBoard(number: $number) {
            message
        }
    }
`

export default function MapBoardsPage(){
    const { data } = useQuery(FETCH_BOARDS);

    const [deleteBoard] = useMutation(DELETE_BOARD);

    console.log(data?.fetchBoards);
    // console.log(data?.fetchBoards.map(el => <div>{el.contents}</div>));

    const onClickDelete = (event) => {
        deleteBoard({
            variables: {number: Number(event.target.id)},
            refetchQueries: [{query: FETCH_BOARDS}]
        });
    };

    return (
        <div>
            <div>
                {data?.fetchBoards.map(el => (
                <div style={{display: "flex", gap: "10px"}}>
                    <span>
                        <input type="checkbox"></input>
                    </span>
                    <span>{el.number}</span>
                    <span>{el.title}</span>
                    <span>{el.writer}</span>
                    <span>
                        <button id={el.number} onClick={onClickDelete}>삭제</button>
                    </span>
                </div>
                ))}
            </div>
        </div>
    )
    }