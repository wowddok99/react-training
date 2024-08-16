import { useQuery, gql } from '@apollo/client'
import { MouseEvent } from 'react';

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
    number: string;
    contents: string;
    title: string;
    writer: string;
}

export default function MapBoardsPage(){
    const { data } = useQuery(FETCH_BOARDS);

    const qqq1 = () => {
        alert("qqq1")
    }

    const qqq2 = (event: MouseEvent) => {
        alert("qqq2") 
    }

    const qqq3 = (event: MouseEvent) => {
        event.stopPropagation()
        alert("qqq3")     
    }

    const qqq4 = (event: MouseEvent) => {
        event.stopPropagation()
        alert("qqq4")     
    }

    return (
        <div>
            <div>
                {data?.fetchBoards.map((el: fetchBoard) => (
                <div id={el.writer} onClick={qqq1} style={{display: "flex", gap: "10px"}}>
                    <span onClick={qqq2}>
                        <input type="checkbox" onClick={qqq3}></input>
                    </span>
                    <span id={el.number} onClick={qqq4}>{el.number}</span>
                    <span id={el.title}>{el.title}</span>
                    <span id={el.contents}>{el.contents}</span>
                    <span id={el.writer}>{el.writer}</span>
                </div> 
                ))}
            </div>
        </div>
    )
}