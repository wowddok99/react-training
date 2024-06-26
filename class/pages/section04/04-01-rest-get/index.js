import axios from 'axios'

export default function RestGetPage(){
    
    function onClickAsync(){
        const result = axios.get("https://koreanjson.com/posts/1")
        console.log(result) // promise
    }

    function onClickAsync_then(){
        const result = axios.get("https://koreanjson.com/posts/1").
        // then -> get 요청 완료되면 콜백 실행
        then((response) => {
            console.log(response.data)
        })
        console.log(result) // promise
    }

    // 함수 중복 선언 문제가 있음(일반함수 사용시 문제 발생)
    // async function onClicksync(){
    //     const result = await axios.get("https://koreanjson.com/posts/1")
    //     console.log(result.data) // 제대로된 결과 출력
    // }

    // 함수 중복 문제 해결 -> 화살표함수(const)
    const onClicksync = async () => {
        const result = await axios.get("https://koreanjson.com/posts/1")
        console.log(result.data) // 제대로된 결과 출력
    }


    return (
        <div>
            <button onClick={onClickAsync}>REST-API(비동기) 요청하기</button>
            <button onClick={onClicksync}>REST-API(동기) 요청하기</button>
        </div>
    )
}