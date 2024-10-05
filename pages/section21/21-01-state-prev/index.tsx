import { useState } from 'react' 

export default function CounterStatePage(){
    const [ count, setCount] = useState(0)

    function onClickCountUp(): void {
        // 1. 화살표함수
        setCount((prev) => prev + 1);

        // 2. 함수선언식
        setCount(function (prev) {
            // 로직 추가 가능
            // example -> if(), for(), ... 등
            return prev + 1
        });
    }
    
return (
    //html
    <div>
        <div id="qqq">{count}</div>
        <button onClick={onClickCountUp}>카운트 올리기</button>
    </div>
)
}