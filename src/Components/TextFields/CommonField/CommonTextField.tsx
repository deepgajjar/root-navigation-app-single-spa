import React from "react";
import './style.css';

interface propsType {
    name: string,
    placeholder: string,
    type?: string
    changeHandler: (e: any) => void,
    value: string
}

const CommonTextField = ({ name, placeholder, type, changeHandler,value }: propsType) => {
    return <input 
    className="input-field" 
    name={name}
     placeholder={placeholder} 
     type={!!type ? type : 'text'}
      onChange={changeHandler} 
      value={value}
      />
}

export default CommonTextField;