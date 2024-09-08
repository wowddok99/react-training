export default function Child1(props: any){

    function onClickCountUp_Child(){
        props.setCount((prev: number) => prev + 1)
    }
    
return (
    <div>
        <div>자식1의 카운트: {props.count}</div>
        <button onClick={onClickCountUp_Child}>카운트 올리기</button>
    </div>
)
}