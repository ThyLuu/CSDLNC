import React, { useState } from 'react'
import { Input } from 'antd';
import { WrapperInputStyle } from './style';


const InputForm = (props) => {
    const {valueInput,setValueInput} = useState('')
    const {placeholder} = props

  return (
   
    <WrapperInputStyle placeholder={placeholder} valueInput={valueInput}/> 
    

  )
}

export default InputForm