import React from 'react';

import styles from './calc.module.css';

const Calc = ({operator, data, isNumber=true}) => {
    return (
        <div className={styles.wrapper}>
            {
                isNumber && <p className={styles.number}>{data.id+1})</p>
            }
            <p className={styles.digit}>{data.first}</p>
            <p className={styles.digit}>{operator}&nbsp;{data.second}</p>
        </div>
    );
}

export default Calc;