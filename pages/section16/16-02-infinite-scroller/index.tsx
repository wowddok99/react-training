import { useQuery, gql } from '@apollo/client'
import { useState } from 'react';
import InfiniteScroll from "react-infinite-scroller";

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
    const { data, fetchMore } = useQuery<FetchBoardsData>(FETCH_BOARDS);

    const onLoadMore = (): void => {
        if(data === undefined) return;

        fetchMore({
            variables: {page: Math.ceil((data?.fetchBoards.length ?? 10) / 10) + 1 },
            updateQuery: (prev, {fetchMoreResult}) => {
                if(fetchMoreResult.fetchBoards === undefined){
                    return {
                        fetchBoards: [...prev.fetchBoards]
                    }
                }
                
                console.log([...prev.fetchBoards, ...fetchMoreResult.fetchBoards])
                
                return {
                    fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards]
                }
            }
        })
    }

    return (
        <div>
            <InfiniteScroll loadMore={onLoadMore} hasMore={true}>
                {data?.fetchBoards.map((el:FetchBoard) => (
                    <div key={el._id} style={{display: "flex", gap: "10px"}}>
                        <span>{el.title}</span>
                        <span>{el.writer}</span>
                    </div>
                ))}
            </InfiniteScroll>
        </div>
    )
    }