import React from 'react';

import { Problem } from '../../components';
import styles from './triangle.module.css';

const Triangle = ({ data, isNumber=true, operator, showAnser }) => {

    const getMax = (a,b) => {return a>b?a:b}
    const getMin = (a,b) => {return a<b?a:b}

    var a = getMin(getMin(data.first, data.second), getMin(data.second, data.last));
    var c = getMax(getMax(data.first, data.second), getMax(data.second, data.last));
    var arrangedData ;
    if(operator === "addfamily") {
        arrangedData = {
            a: a,
            b: c-a,
            c: c
        }
    }
    if(operator === "multfamily") {
        arrangedData = {
            a: a,
            b: c/a,
            c: c
        }
    }


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
                    <Problem operator="+" data={arrangedData} showAnser={showAnser} first/>
                    <Problem operator="+" data={arrangedData} showAnser={showAnser} />
                    <Problem operator="-" data={arrangedData} showAnser={showAnser} first/>
                    <Problem operator="-" data={arrangedData} showAnser={showAnser} />
                </div>
            }
            {
                operator === "multfamily" && 
                <div className={styles.problems}>
                    <Problem operator="x" data={arrangedData} showAnser={showAnser} first/>
                    <Problem operator="x" data={arrangedData} showAnser={showAnser} />
                    <Problem operator="÷" data={arrangedData} showAnser={showAnser} first/>
                    <Problem operator="÷" data={arrangedData} showAnser={showAnser} />
                </div>
            }
        </div>
    );
}

export default Triangle;