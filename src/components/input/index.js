import React from 'react';

import styles from './input.module.css';

const Input = ({
    type,
    id,
    value,
    label,
    handleChange,
    max=99999,
    min=1
}) => {

    const validate = (rs) => {
        if(type === "number"){
            if(rs > max) rs = max;
            if(rs < min) rs = min;
            return rs;
        }
        if(type === "text") return rs;
    }

    return (
        <div className={styles.wrapper}>
            <label htmlFor={id}>{label}</label>
            <input id={id} type={type} value={value}
                onChange={e => handleChange(validate(e.target.value))}/>
        </div>
    );
}

export default Input;