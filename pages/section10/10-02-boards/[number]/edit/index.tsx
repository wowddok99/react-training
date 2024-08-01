import { useQuery, gql } from '@apollo/client'
import { useRouter } from "next/router";
import BoardWrite from "../../../../../src/components/units/board/10-write/BoardWrite.container"

const FETCH_BOARD = gql`
    query fetchBoard($number: Int) {
        fetchBoard(number:$number){
            number
            writer
            title
            contents
        }
    }
`

export default function BoardsEdit(){
    const router = useRouter();
    
    const { data } = useQuery(FETCH_BOARD,{
        variables: { number: Number(router.query.number) }
    });

    return (
        <div>
            <BoardWrite isEdit={true} data={data}></BoardWrite>
        </div>
    ) 
}