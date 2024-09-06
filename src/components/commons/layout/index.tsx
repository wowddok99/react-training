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
    const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);

    return (
        <div>
            {/* isHiddenHeader가 false면 LayOutHeader 렌더링 */}
            {!isHiddenHeader && <LayOutHeader/>}
            <LayOutBanner/>
            <LayOutNavigation/>
            <div style={{ height: "500px", display: "flex", flexDirection:"row", gap: "10px" }}>
                <div style={{ width: "10%", backgroundColor: "lightgray" }}>사이드바</div>
                <div>{props.children}</div>
            </div>
            <LayOutFooter/>
        </div>
    )
}