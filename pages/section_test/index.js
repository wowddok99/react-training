import { useState } from "react";

export default function testPage(){
    const [state, setState] = useState(1);

    const onClick = () => {
        setState(state+4);
        setState(state+2);
        setState(state+3);
    };

    return (
        <div className="App">
          <button onClick={onClick}>+1</button>
          <p>현재 값 {state}</p>
        </div>
      );
}