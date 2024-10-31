import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react"
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../src/commons/stores";
import { unescape } from "lodash";

const LOGIN_USER = gql`
    mutation loginUser($email: String!, password: String!){
        loginUser(email: $email, password: $password){
            accessToken
        }
    }
`
interface LoginUser{
    loginUser: {
        accessToken: string
    }
} 

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginUser] = useMutation<LoginUser>(LOGIN_USER);

    const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

    const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.currentTarget.value)
    }

    const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.currentTarget.value)
    }

    const onClickLogin = async (): Promise<void> => {
        // 1. 로그인
        const result = await loginUser({
            variables: {
                email: email,
                password: password
            }
        })

        const accessToken = result.data?.loginUser.accessToken;
        console.log(accessToken)

        if(accessToken === undefined){
            alert("로그인에 실패했습니다! 다시 시도해 주세요!");
            return
        }
        // 2. 받아온 accessToken을 recoil에 저장
        setAccessToken(accessToken);
    }

    return (
        <div>
            이메일: <input type="text" onChange={onChangeEmail}/>
            비밀번호: <input type="password" onChange={onChangePassword}/>
            <button onClick={onClickLogin}>로그인</button>
        </div>
    )
}