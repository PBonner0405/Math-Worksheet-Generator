import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
import { 
    getRandomNumber,
    getDivisionPair,
    getSubtractionPair,
    getAddSubFactFamily
} from '../../utils';
import { Calc, Triangle, Input } from '../../components';

import styles from './main.module.css';
const Main = ({match}) => {

    const { type="addition" } = match.params
    const [title, setTitle] = useState(type.toUpperCase());
    const [digits, setDigits] = useState(2);
    const [orientation, setOrientation] = useState("Vertical");
    const [problems, setProblems] = useState(30);
    const [show, setShow] = useState(false);
    const [operator, setOperator] = useState("+");
    const [results, setResults] = useState([]);
    const [sum, setSum] = useState(20);

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

        // Set Operator
        switch(type) {
            case "addition":
                setOperator("+");
                break;
            case "subtraction":
                array = [];
                for(i = 0 ; i < problems ; i ++) {
                    array.push(getSubtractionPair(digits, i));
                }
                setOperator("-");
                break;
            case "multiplication":
                setOperator("x");
                break;
            case "division":
                array = [];
                for(i = 0 ; i < problems ; i ++) {
                    array.push(getDivisionPair(digits, i));
                }
                setOperator("÷");
                break;
            case "adsubfamilies":
                array = [];
                for(i = 0 ; i < problems ; i ++) {
                    array.push(getAddSubFactFamily(sum, i));
                }
                console.log(array);
                setOperator("addfamily");
                break;
            case "multipleFamily":
                setOperator("multfamily");
                break;
            case "graphPaper":
                setOperator("graph");
                break;
            case "numberline":
                setOperator("line");
                break;
            default:
                setOperator("+");
        }

        setResults(array);
        setShow(true);
    }

    return (
        <main className={styles.wrapper}>
            <div className="container">
                <div className="row">
                    <div className={styles.selectPanel}>
                        <Input type="text" id="title" min={10} value={title}
                            label="Title" handleChange={setTitle} className={styles.input}
                        />
                        <Input type="number" id="sum" min={10} value={sum}
                            label="Sum" handleChange={setSum} className={styles.input}
                        />

                        <Input type="number" id="length" min={1} max={5} value={digits}
                            label="Number of digits" handleChange={setDigits} className={styles.input}
                        />
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

                        <Input type="number" id="problems" min={1} max={80} value={problems}
                            label="Number of problems" handleChange={setProblems} className={styles.input}
                        />
                        <Button onClick={generateProblems}>Generate!</Button>
                    </div>
                    <div className={styles.previewWorksheet}>
                        {
                            title !== "" &&
                            <p>
                                {title}
                            </p>
                        }
                        {
                            show && 
                            (operator === "+" || operator === "-" || operator === "x" || operator === "÷") ?
                            <div className={styles.calcResults}>
                                {
                                    results.map(element => {
                                        return <Calc 
                                            key = {element.id.toString()}
                                            isNumber={true}
                                            data={element}
                                            operator={operator} 
                                        />;
                                    })
                                }
                            </div> : 
                            (operator === "addfamily" || operator === "multfamily") ?
                            <div className={styles.familyResults}>
                                {
                                    results.map(element => {
                                        return <Triangle 
                                            key = {element.id.toString()}
                                            data={element}
                                            operator={operator} 
                                        />;
                                    })
                                }
                            </div> :
                            <div className={styles.graph}>
                                I am waiting for your options
                            </div>
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main;