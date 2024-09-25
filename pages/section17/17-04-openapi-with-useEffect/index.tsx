import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

export default function RestGetPage(){
    const [dog, setDog] = useState("");

    useEffect(() => {
        const onClickSync = async (): Promise<void> => {
            const result = await axios.get("https://dog.ceo/api/breeds/image/random")
            setDog(result.data.message);
        }
        onClickSync();
    }, [])

    const onClickChangeDog = async () => {
        const result = await axios.get("https://dog.ceo/api/breeds/image/random")
        setDog(result.data.message);
    }

    return (
        <div>
            <img src={dog}/>
            <button onClick={onClickChangeDog}>Dog 요청</button>
        </div>
    )
}