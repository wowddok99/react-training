import { Children } from "react"
import LayOutHeader from "./header";
import LayOutBanner from "./banner";
import LayOutNavigation from "./navigation";
import LayOutFooter from "./footer";
import { useRouter } from "next/router";

const HIDDEN_HEADERS = [
    "/section13/13-02-library-star",
    "/section13/13-03-modal-alert"
]


interface LayOutProps{
    children: JSX.Element;
}

export default function LayOut(props: LayOutProps){
    const router = useRouter();
    console.log(router.asPath);

    const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);
    console.log(isHiddenHeader); // HIDDEN_HEADERS에 현재 주소가 포함되어 있으면 TRUE, 아니면 FALSE

    return (
        <div>
            {/* isHiddenHeader가 false면 LayOutHeader 렌더링 */}
            {!isHiddenHeader && <LayOutHeader/>}
            <LayOutBanner/>
            <LayOutNavigation/>
            <div style={{ height: "500px", display: "flex", flexDirection:"row", gap: "10px" }}>
                <div style={{ width: "30%", backgroundColor: "lightgray" }}>사이드바</div>
                <div style={{ width: "70%", backgroundColor: "lightgoldenrodyellow" }}>{props.children}</div>
            </div>
            <LayOutFooter/>
        </div>
    )
}