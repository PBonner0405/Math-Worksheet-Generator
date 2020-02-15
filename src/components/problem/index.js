import React from 'react';
import classnames from 'classnames';

import styles from './problem.module.css';

const Problem = ({ operator, className }) => {
    return (
        <div className={classnames(styles.wrapper, className?className:"")}>
            <div className={styles.underLine}></div>
            <div className={styles.operator}>{operator}</div>
            <div className={styles.underLine}></div>
            <div className={styles.operator}>=</div>
            <div className={styles.underLine}></div>
        </div>
    );
}

export default Problem;