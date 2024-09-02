interface ExampleProps {
    school: string;
    children: JSX.Element;
}

export default function Example(props: ExampleProps){
    return (
        <div>
            <div>안녕하세요. 예제1입니다.</div>
            {/* <div>{props.school}</div> */}
            <div>{props.children}</div>
            <div>안녕하세요. 예제2입니다.</div>
        </div>

    )
}