import ChildPage from "./02-child";

export default function ParentPage() {
    return (
        <div>
            {/* <ChildPage count={10}/> */}
            {ChildPage({ count:20 })}
        </div>
    )
}