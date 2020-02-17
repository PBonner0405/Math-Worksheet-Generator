import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
import { 
    getRandomNumber,
    getDivisionPair,
    getSubtractionPair,
    getAddSubFactFamily,
    getMultiDiviFactFamily
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
    const [results, setResults] = useState([]);
    const [sum, setSum] = useState(20);
    const [max, setMax] = useState(5);

    // Set Operator
    var operator = "+";
    switch(type) {
        case "addition":
            operator = "+";
            break;
        case "subtraction":
            operator = "-";
            break;
        case "multiplication":
            operator = "x";
            break;
        case "division":
            operator = "÷";
            break;
        case "adsubfamilies":
            operator = "addfamily";
            break;
        case "multipleFamily":
            operator = "multfamily";
            break;
        case "graphPaper":
            operator = "graph";
            break;
        case "numberline":
            operator = "line";
            break;
        default:
            operator = "+";
    }

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
            case "multiplication":
                break;
            case "subtraction":
                array = [];
                for(i = 0 ; i < problems ; i ++) {
                    array.push(getSubtractionPair(digits, i));
                }
                break;
            case "division":
                array = [];
                for(i = 0 ; i < problems ; i ++) {
                    array.push(getDivisionPair(digits, i));
                }
                break;
            case "adsubfamilies":
                array = [];
                for(i = 0 ; i < 8 ; i ++) {
                    array.push(getAddSubFactFamily(sum, i));
                }
                break;
            case "multipleFamily":
                array = [];
                for(i = 0 ; i < 8 ; i ++) {
                    array.push(getMultiDiviFactFamily(max, i));
                }
                break;
            case "graphPaper":
                break;
            case "numberline":
                break;
            default:
                break;
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
                            label="Title" handleChange={setTitle}
                        />
                        {
                            operator === "addfamily" ?
                            <Input type="number" id="sum" min={9} value={sum}
                                label="Sum" handleChange={setSum}
                            /> :
                            operator === "multfamily" &&
                            <Input type="number" id="sum" min={5} max={999} value={max}
                                label="Operand Max Number" handleChange={setMax}
                            />
                        }

                        {
                            (
                                operator === "+" || operator === "-" || operator === "x" || operator === "÷"
                            ) &&
                            <Input type="number" id="length" min={1} max={5} value={digits}
                                label="Number of digits" handleChange={setDigits}
                            />
                        }

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
                            label="Number of problems" handleChange={setProblems}
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
                            (operator === "addfamily" || operator === "multfamily") ?
                            <div className={styles.familyResults}>
                                {
                                    results.map(element => {
                                        return <Triangle 
                                            key = {element.id.toString()}
                                            data={element}
                                        />;
                                    })
                                }
                            </div> :
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
                            <div className={styles.graph}>
                                I am waiting for your options
                            </div>
                        }
                        {
                            !show && 
                            <div className={styles.graph}>
                                Set whatever you want to generate!!!
                            </div>
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main;