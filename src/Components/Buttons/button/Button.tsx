import React from 'react';
import './style.css';

interface propsType {
    title : String,
    clickEvent? :  (e:any) => void
}

const Button = ({title,clickEvent}:propsType) => {
    return <div onClick={clickEvent} className="submit-btn">
    <p>{title}</p>
</div>
}

export default Button;