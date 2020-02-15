import React from 'react';

import { Problem } from '../../components';
import styles from './triangle.module.css';

const Triangle = ({ data, isNumber=true}) => {
    return (
        <div className={styles.wrapper}>
            {
                isNumber && <p className={styles.number}>{data.id + 1})</p>
            }
            <div className={styles.triangle}>
                <span></span>
                <p>{data.first}</p>
                <p>{data.second}</p>
                <p>{data.last}</p>

            </div>
            <div className={styles.problems}>
                <Problem operator="+" />
                <Problem operator="+" />
                <Problem operator="-" />
                <Problem operator="-" />
            </div>
        </div>
    );
}

export default Triangle;