import React from 'react';
import classnames from 'classnames';
import styles from './input.module.css';

const Input = ({
    type,
    id,
    value,
    label,
    handleChange,
    max=99999,
    min=1,
    className
}) => {

    const validate = (rs) => {
        if(type === "number"){
            if(rs > max) rs = max;
            if(rs < min) rs = min;
            return parseInt(rs);
        }
        if(type === "text") return rs;
    }

    return (
        <div className={classnames(styles.wrapper, className?className:"")}>
            <label htmlFor={id}>{label}</label>
            <input className="form-control" id={id} type={type} value={value} max={max} min={min}
                onChange={e => handleChange(e.target.value)}/>
        </div>
    );
}

export default Input;