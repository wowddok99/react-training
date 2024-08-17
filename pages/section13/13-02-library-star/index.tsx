import React, { useState } from 'react';
import { Flex, Rate } from 'antd';

export default function App(){
    const [value, setValue] = useState(3);
    
    // 1단계 방식
    // const onChangeStar = (value:number) => {
    //     setValue(value);
    // }

    // 2단계 방식
    const onChangeStar = (value:number) => setValue(value)
    
    return (

        // <Rate onChange={onChangeStar} value={value} /> // 1단계 방식
        // <Rate onChange={onChangeStar} value={value} /> // 2단계 방식
        // <Rate onChange={(value) => setValue(value)} value={value} /> // 3단계 방식
        
        // Rate의 onChange는 Html의 onChange가 아님 -> ant-design에서 만든 onChange
        <Rate onChange={setValue} value={value} /> // 4단계 방식
      );
}
