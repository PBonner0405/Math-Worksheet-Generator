import React from 'react';
import classnames from 'classnames';

import styles from './problem.module.css';

const Problem = ({ operator, className, data, showAnser, first }) => {
    return (
        <div className={classnames(styles.wrapper, className?className:"")}>
            {
                showAnser && (
                    (operator==="+" || operator==="x") ? 
                    <div className={styles.answerWraper}>
                        <p className={styles.underLine}>
                            {first ? data.a :data.b}
                        </p>
                        <p className={styles.operator}>
                            {operator}
                        </p>
                        <p className={styles.underLine}>
                            {first ? data.b :data.a}
                        </p>
                        <p className={styles.operator}>=</p>
                        <p className={styles.underLine}>
                            {data.c}
                        </p>
                    </div> :
                    (operator==="-" || operator==="÷") &&
                    <div className={styles.answerWraper}>
                        <p className={styles.underLine}>
                            {data.c}
                        </p>
                        <p className={styles.operator}>
                            {operator}
                        </p>
                        <p className={styles.underLine}>
                            {first ? data.b :data.a}
                        </p>
                        <p className={styles.operator}>=</p>
                        <p className={styles.underLine}>
                            {first ? data.a :data.b}
                        </p>
                    </div> 
                )
            }
            {
                !showAnser && 
                <div className={styles.container}>
                    <p className={styles.underLine}>
                    </p>
                    <p className={styles.operator}>
                        {operator}
                    </p>
                    <p className={styles.underLine}>
                    </p>
                    <p className={styles.operator}>=</p>
                    <p className={styles.underLine}>
                    </p>
                </div>
            }
        </div>
    );
}

export default Problem;