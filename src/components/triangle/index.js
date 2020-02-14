import React from 'react';

import styles from './triangle.module.css';

const Triangle = ({ data, isNumber=true, operator}) => {
    return (
        <div className={styles.wrapper}>
            {
                isNumber && <p className={styles.number}>{data.id})</p>
            }
            <p className={styles.digit}>{data.first}</p>
            <p className={styles.digit}>{data.second}</p>
        </div>
    );
}

export default Triangle;