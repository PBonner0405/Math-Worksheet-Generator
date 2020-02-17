import React from 'react';
import classnames from 'classnames';
import styles from './numberLine.module.css';

const NumberLine = ({className, content}) => {
    const arrows = ["<", ">"];
    const len = content?content.length:0;
    const flex = (len -1) * 2;
    const mainStyle = {
        flex: flex,
    }
    return (
        <div className={classnames(styles.wrapper, {[className]: className})}>
            <span>
                <p>
                    {arrows[0]}
                </p>
            </span>
            <div className={styles.numbers} style={mainStyle}>
                {
                    content.map((element, index) => {
                        return <div key={index.toString()}>
                            <div className={styles.lines}>
                                <div></div>
                                <div></div>
                            </div>
                            <p className={styles.label}>
                                {element}
                            </p>
                        </div>
                    })
                }
            </div>
            <span>
                <p>
                    {arrows[1]}
                </p>
            </span>
        </div>
    );
}

export default NumberLine;