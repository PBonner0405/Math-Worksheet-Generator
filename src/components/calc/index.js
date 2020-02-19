import React from 'react';

import styles from './calc.module.css';

const Calc = ({operator, data, isNumber=true, showAnser}) => {
    return (
        <div className={styles.wrapper}>
            {
                isNumber && <p className={styles.number}>{data.id+1})</p>
            }
            <p className={styles.digit}>{data.first}</p>
            <p className={styles.digit + " " + styles.second}>
                <span>
                    {operator}
                </span>
                &nbsp;
                <span>
                    {data.second}
                </span>
            </p>
            {
                showAnser && <p className={styles.answer}>
                    {data.last}
                </p>
            }
        </div>
    );
}

export default Calc;