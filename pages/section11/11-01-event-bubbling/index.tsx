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

    const onClickAlert = (event: MouseEvent) => {
        // 바인딩 기준이 아닌, 클릭한 태그의 id를 기준으로 함
        if(event.target instanceof HTMLDivElement || event.target instanceof HTMLInputElement || event.target instanceof HTMLSpanElement){
            alert(event.target.id)
        }

        // 바인딩된 부모의 id를 기준으로 함
        // currentTarget은 태그일수 밖에 없기 때문에 instanceof 불필요
        // alert(event.currentTarget.id)
    }

    const onClickSpanAlert = () => {
        alert("SpanAlert");
    }

    const onClickInputAlert = () => {
        alert("InputAlert");
    }

    return (
        <div>
            <div>
                {data?.fetchBoards.map((el: fetchBoard) => (
                <div id={el.writer} onClick={onClickAlert} style={{display: "flex", gap: "10px"}}>
                    <span onClick={onClickSpanAlert}>
                        <input type="checkbox" onClick={onClickInputAlert}></input>
                    </span>
                    <span id={el.number}>{el.number}</span>
                    <span id={el.title}>{el.title}</span>
                    <span id={el.contents}>{el.contents}</span>
                    <span id={el.writer}>{el.writer}</span>
                </div> 
                ))}
            </div>
        </div>
    )
}