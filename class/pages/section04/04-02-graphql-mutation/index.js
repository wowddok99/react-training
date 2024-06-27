export default function GraphqlMutationPage(){

    const onClickSubmit = () => {
        alert("바인딩 완료")
    }
    
    // 한 줄일때는 괄호 불필요
    return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
}