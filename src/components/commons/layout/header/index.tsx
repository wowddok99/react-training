import styled from "@emotion/styled"

const Wrapper = styled.div`
    height: 50px;
    background-color: yellow;
`

export default function LayOutHeader(){
    return (
        <Wrapper>
            <div>여기는 헤더입니다</div>
        </Wrapper>
    )
}