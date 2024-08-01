export default function TypescriptPage(){
    // 타입추론
    let aaa = "안녕하세요";

    // 타입명시
    let bbb: string = "반갑습니다";

    // 타입명시가 필요한 상황
    let ccc: string | number = 1000;
    ccc = "1000";
    ccc = 1000;

    // 숫자타입
    let ddd: number = 10;

    // 문자열 타입
    let eee: string = "eee";

    // 불린타입
    let fff: boolean = true;
    fff = false;

    // 배열타입
    let ggg: number[] = [1,2,3,4,5];
    let hhh: string[] = ["a","b","c"];

    // 타입추론 -> let iii: (string | number)[]
    let iii = ["철수", "영희", "훈이", 10];

    // 배열_타입추론
    const profile = {
        name: "철수",
        age: 8,
        school: "다람쥐초등학교"
    }
    
    // 배열_타입명시
    const profile2: {
        name: string;
        age: number;
        school: number | string;
    } = {
        name: "철수",
        age: 8,
        school: "다람쥐초등학교"
    }

    profile2.school = "123";
    profile2.school = 22;
    
    interface StudentProfile {
        name: string
        age: number | string
        school: string
        hobby?: string
    }
    
    const profile3: StudentProfile = {
        name: "철수",
        age: 8,
        school: "다람쥐초등학교",
    }

    profile3.name = "훈이";
    profile3.age = "8살";
    profile3.hobby = "수영"
    
    // 함수타입
    function add(num1: number, num2: number, unit: string): string {
        return num1 + num2 + unit
    }
    const result = add(1000,2000,"원"); // 결과의 리턴 타입도 예측가능

    const add2 = (num1: number, num2: number, unit: string): string => {
        return num1 + num2 + unit
    }
    const result2 = add2(1000,2000,"원"); // 결과의 리턴 타입도 예측가능


    // any 타입 -> Javascript 처럼 동작
    let qqq: any = "철수";
    qqq = 123;
    qqq = "123";
    qqq = true

    return (
        <div></div>
    )
}