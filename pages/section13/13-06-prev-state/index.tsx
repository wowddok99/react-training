import { useState } from 'react' 

export default function CounterStatePage(){
    const [ count, setCount] = useState(0)

    //js
    function onClickCountUp(): void {
        // setCount(count + 1)
        // setCount(count + 1)
        // setCount(count + 1)
        // setCount(count + 1)
        // setCount(count + 1)

        setCount((prev) => prev + 1)
        setCount((prev) => prev + 1)
        setCount((prev) => prev + 1)
        setCount((prev) => prev + 1)
        setCount((prev) => prev + 1)
    }
    
    function onClickCountDown(): void {
        setCount(count - 1)
    }
return (
    //html
    <div>
        <div id="qqq">{count}</div>
        <button onClick={onClickCountUp}>카운트 올리기</button>
        <button onClick={onClickCountDown}>카운트 내리기</button>
    </div>
)
}