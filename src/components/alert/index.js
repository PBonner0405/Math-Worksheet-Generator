import React from 'react';
import classnames from 'classnames';
import styles from './alert.module.css';

const Alert = ({type, className, label, handleClose}) => {
    return (
        <div className={classnames(styles.wrapper, styles[type] , {[className]: className})}>
            <span onClick={handleClose}>x</span>
            <p>
                {label}
            </p>
        </div>
    );
}

export default Alert;