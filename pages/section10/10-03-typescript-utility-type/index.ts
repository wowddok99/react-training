export interface Profile {
    name: string
    age: number
    school: string
    hobby?: string
}

// Partial 타입
type aaa = Partial<Profile>;

// Required 타입
type bbb = Required<Profile>

// Pick 타입
type ccc = Pick<Profile, "name" | "age">

// Omit 타입
type ddd = Omit<Profile, "school">

// Union 타입
type eee = "철수" | "영희" | "훈이"
let child: eee = "철수"

// Record 타입
type fff = Record<eee, Profile> 

const profiles: fff = {
    철수: {
        name: "Kim Cheolsu",
        age: 15,
        school: "Seoul High School",
        hobby: "Soccer",
        money: 10000 // Profile 선언병합으로 인한 추가
    },
    영희: {
        name: "Lee Younghee",
        age: 14,
        school: "Seoul Middle School",
        money: 10000
        // hobby는 선택적 프로퍼티이므로 생략 가능
    },
    훈이: {
        name: "Park Hooni",
        age: 16,
        school: "Busan High School",
        hobby: "Basketball",
        money: 10000
    }
};

// 타입 또는 interface의 key들로 Union 타입 만들기
type ggg = keyof Profile // "name" | "age" | "school" | "hobby"
let myProfile: ggg = "hobby"

// 타입과 인터페이스의 차이 => interface는 선언병합 가능, type은 불가능
export interface Profile {
    money: number // 선언병합으로 추가됨
}

let profile: Partial<Profile> = {
    money: 10
}

let profile_ten: Profile = {
    name: "ten",
    age: 26,
    school: "동국대",
    money: 2000
    // hobby는 선택적 프로퍼티이므로 생략 가능
}
