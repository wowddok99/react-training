import { useState } from 'react' 

export default function SignupStatePage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [emailError, setEmailError] = useState("아직은 에러가 없습니다.")

    function onChangeEmail(event){
        setEmail(event.target.value)
    }

    function onChangePassword(event){
        setPassword(event.target.value)
    }

    // 연결 -> 바인딩
    function onClickSignup(){
        console.log(email)
        console.log(password)

        // 1. 검증하기
        if(email.includes("@") === false){
            setEmailError("이메일이 올바르지 않습니다. -> '@'가 존재하지 않습니다.")
            // document.getElementById("myerror").innerText = "이메일이 올바르지 않습니다. -> '@'가 존재하지 않습니다." => 옛날방식
        } else {
            setEmailError("회원가입 완료. 환영합니다!")
            // document.getElementById("myerror").innerText = "회원가입 완료. 환영합니다!" => 옛날방식
        }
        // 2. 백엔드에 보내기
        // 추후에 진행

        // 3. 성공시 성공알람 보여주기1
        // alert("회원가입을 완료했습니다.")
    }
    
    return (
        <div>
            이메일: <input type ="text" onChange={onChangeEmail}/>
            {/* <div id="myerror"></div> 옛날 방식 */}
            <div>{emailError}</div>
            비밀번호: <input type ="text" onChange={onChangePassword}/>
            <button onClick={onClickSignup}>회원가입</button>
        </div>     
    )

}