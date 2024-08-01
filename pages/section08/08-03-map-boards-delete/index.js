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
                {data?.fetchBoards.map((el, index) => (
                // 특별한 이유가 없으면 Fragment로 감싸기 -> div는 1개 더 그려야해서 약간 더 느려짐 -> 엄청난 성능차이가 있지는 않음.
                // 프레그먼트 -> <> </> or <Fragment></Fragment>
                // index는 게시글을 삭제할 때, 다음 게시글이 올라오면서 기존 index와 동일한 값을 갖게 됨. 즉 유일하지 않음.
                <div key={el.number} style={{display: "flex", gap: "10px"}}>
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