import React from 'react';

import { Problem } from '../../components';
import styles from './triangle.module.css';

const Triangle = ({ data, isNumber=true, operator}) => {
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
            {
                operator === "addfamily" && 
                <div className={styles.problems}>
                    <Problem operator="+" />
                    <Problem operator="+" />
                    <Problem operator="-" />
                    <Problem operator="-" />
                </div>
            }
            {
                operator === "multfamily" && 
                <div className={styles.problems}>
                    <Problem operator="x" />
                    <Problem operator="x" />
                    <Problem operator="÷" />
                    <Problem operator="÷" />
                </div>
            }
        </div>
    );
}

export default Triangle;