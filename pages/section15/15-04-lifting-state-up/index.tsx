import { useState } from 'react' 
import Child1 from '../../../src/components/units/15-lifting-state-up/Chid1'
import Child2 from '../../../src/components/units/15-lifting-state-up/Child2'

export default function CounterStatePage(){
    const [ count, setCount ] = useState(0)

    const onClickCountUp = (): void => {
        setCount((prev: number) => prev + 1)
    }

    return (
        <div>
            <Child1 count={count} setCount={setCount}/>
            <Child2 count={count} onClickCountUp={onClickCountUp}/>
        </div>
    )
}