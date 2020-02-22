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
    style,
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

    const handleIncrease = (e, inc) => {
        e.preventDefault();
        if(value < max && inc > 0)
            handleChange(value + inc)
        if(value > min && inc < 0)
            handleChange(value + inc)
    }

    return (
        <div className={classnames(styles.wrapper, className?className:"")}>
            <label htmlFor={id}>{label}</label>
            {
                style === "withButton" ?
                <div className={styles.numberSelector}>
                    <button 
                        className={classnames(styles.inDebtn, {[styles.buttonInactive]: (value<=min)})}
                        onClick={e => handleIncrease(e, -1)}
                    >
                            -
                    </button>
                    <input className="form-control" id={id} type={type} value={value} max={max} min={min}
                        onChange={e => handleChange(e.target.value)}/>
                    <button
                        className={classnames(styles.inDebtn, {[styles.buttonInactive]: (value>=max)})}
                        onClick={e => handleIncrease(e, 1)}
                    >
                        +
                    </button>
                </div> :
                <input className="form-control" id={id} type={type} value={value} max={max} min={min}
                        onChange={e => handleChange(e.target.value)}/>
            }
            
        </div>
    );
}

export default Input;