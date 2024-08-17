import React, { useState } from 'react';

export default function Test(){
    const [value, setValue] = useState("");
    
    // 1단계 방식
    // const onChangeStar = (value:number) => {
    //     setValue(value);
    // }

    // 2단계 방식
    const handleChange = (event) => {
      console.log(event);
    }
    
    return (
        <input type="text" onChange={handleChange} value={value}/>
      );
}
