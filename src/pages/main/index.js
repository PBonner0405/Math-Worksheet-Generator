import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
import { getRandomNumber } from '../../utils';

import styles from './main.module.css';
const Main = ({match}) => {

    const { type="addition" } = match.params
    const [title, setTitle] = useState(type.toUpperCase());
    const [digits, setDigits] = useState(2);
    const [orientation, setOrientation] = useState("Vertical");
    const [problems, setProblems] = useState(10);
    const [show, setShow] = useState(false);
    const [results, setResults] = useState([]);

    const generateProblems = () => {
        // Generate Number arrays
        var array = [];
        for(var i = 0 ; i < problems ; i ++) {
            array.push(
                {
                    id: i,
                    first: getRandomNumber(digits),
                    second: getRandomNumber(digits)
                }
            )
        }
        setShow(true);
    }

    return (
        <main className={styles.wrapper}>
            <div className="container">
                <div className="row">
                    <div className={styles.selectPanel}>
                        <div className={styles.title}>
                            <label htmlFor="title">Title</label>
                            <input id="title" type="text" value={title} onChange={e => setTitle(e.target.value)}/>
                        </div>
                        <div className={styles.length}>
                            <label htmlFor="length">Number of digits</label>
                            <input id="length" type="number" min={1} max={5} value={digits} onChange={e => setDigits(e.target.value)}/>
                        </div>
                        <div className={styles.orientation}>
                            <label htmlFor="orientation">Orientation</label>
                            <select id="orientation" value={orientation} onChange={e=>setOrientation(e.target.value)}>
                                <option value="Vertical">
                                    Vertical
                                </option>
                                <option value="Horizontal">
                                    Horizontal
                                </option>
                            </select>
                        </div>
                        <div className={styles.problems}>
                            <label htmlFor="problems">Number of problems</label>
                            <input id="problems" type="number" min={1} max={20} value={problems} onChange={e => setProblems(e.target.value>20?20:e.target.value)}/>
                        </div>
                        <Button onClick={generateProblems}>Generate!</Button>
                    </div>
                    <div className={styles.previewWorksheet}>
                        {
                            show && 
                            <div className={styles.results}>
                                results here
                            </div>
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main;