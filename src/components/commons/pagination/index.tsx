import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import { MouseEvent, useState } from "react";
import { FetchBoardsData } from "../../../../pages/section15/15-05-pargination-refactoring";

interface PaginationProps {
    refetch: (variables?: Partial<OperationVariables> | undefined) => Promise<ApolloQueryResult<FetchBoardsData>>;
    lastPage: number;
}

export default function Pagination(props: PaginationProps){
    const [startPage, setStartPage] = useState(1);
    
    const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
        void props.refetch({ page: Number(event.currentTarget.id) });
    }

    const onClickPrevPage = () => {
        if (startPage === 1) {
            return;
        }

        setStartPage(startPage - 10)
        void props.refetch({ page: startPage - 10 })
    }

    const onClickNextPage = () => {
        // if (startPage + 10 <= lastPage) {
            setStartPage(startPage + 10)
            void props.refetch({ page: startPage + 10 })
        // } 
    } 

    return (
        <div style={{display:'flex', gap:'10px'}}>
            <span onClick={onClickPrevPage} style={{cursor:'pointer'}}>이전페이지</span>
            {new Array(10).fill(1).map((_, index) => (
                // 현재페이지(index + startPage)가 lastPage 이하까지만 페이징 넘버를 출력 
                index + startPage <= props.lastPage ? 
                (
                <span key={index + startPage} id={String(index + startPage)} style={{cursor:'pointer'}} onClick={onClickPage}>
                    {index + startPage}
                </span>
                ) : null
            ))}
            {/* lastPage가 startPage+10 이상이면 다음페이지 버튼 활성화 */}
            {startPage + 10 <= props.lastPage && (
                <span onClick={onClickNextPage} style={{ cursor: 'pointer' }}>
                    다음페이지
                </span>
            )}
        </div>
    )
}