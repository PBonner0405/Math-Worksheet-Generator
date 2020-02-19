import React, { useState, useEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

import {
    getRandomNumber,
    getDivisionPair,
    getSubtractionPair,
    getAddSubFactFamily,
    getMultiDiviFactFamily
} from '../../utils';
import { Calc, Triangle, Input, NumberLine, Alert } from '../../components';

import styles from './main.module.css';

const useResize = (myRef) => {
    const [width, setWidth] = useState('')
    const [height, setHeight] = useState('')

    const handleResize = () => {
        if (myRef.current) {
            setWidth(myRef.current.offsetWidth)
            setHeight(myRef.current.offsetHeight)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        window.addEventListener('load', handleResize)
        window.addEventListener('focusin', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
            window.addEventListener('load', handleResize)
            window.addEventListener('focusin', handleResize)
        }
    }, [myRef])

    return { width, height }
}

const Main = ({ match }) => {

    const graphRef = useRef(null);
    const { width, height } = useResize(graphRef)
    console.log(width, height);

    const { type = "addition" } = match.params
    const [title, setTitle] = useState(type.toUpperCase());
    const [digits, setDigits] = useState(3);
    const [problems, setProblems] = useState(50);
    const [show, setShow] = useState(false);
    const [results, setResults] = useState([]);
    const [sum, setSum] = useState(50);
    const [max, setMax] = useState(5);

    const [unit, setUnit] = useState(4);
    const [start, setStart] = useState(1);
    const [end, setEnd] = useState(50);
    const [increment, setIncrement] = useState(1);
    const [lines, setLines] = useState(7);

    const [alert, setAlert] = useState(false);
    const [error, setError] = useState("");
    const [errorType, setErrorType] = useState("primary");

    const [isAnswer, setShowAnswer] = useState(false);
    const [displayNumber, setDisplay] = useState(true);

    // Set Operator
    var operator = "+";
    switch (type) {
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

    const showAnswer = () => {
        setShowAnswer(!isAnswer);
    }

    const generateProblems = () => {
        // Generate Number arrays
        var array = [];
        for (var i = 0; i < problems; i++) {
            const first = getRandomNumber(digits);
            const second = getRandomNumber(digits);
            array.push(
                {
                    id: i,
                    first: first,
                    second: second,
                    last: first + second
                }
            )
        }

        // Set Operator
        switch (type) {
            case "addition":
                array = [];
                for (i = 0; i < problems; i++) {
                    const first = getRandomNumber(digits);
                    const second = getRandomNumber(digits);
                    array.push(
                        {
                            id: i,
                            first: first,
                            second: second,
                            last: first + second
                        }
                    )
                }
                break;
            case "multiplication":
                array = [];
                for (i = 0; i < problems; i++) {
                    const first = getRandomNumber(digits);
                    const second = getRandomNumber(digits);
                    array.push(
                        {
                            id: i,
                            first: first,
                            second: second,
                            last: first * second
                        }
                    )
                }
                break;
            case "subtraction":
                array = [];
                for (i = 0; i < problems; i++) {
                    array.push(getSubtractionPair(digits, i));
                }
                break;
            case "division":
                array = [];
                for (i = 0; i < problems; i++) {
                    array.push(getDivisionPair(digits, i));
                }
                break;
            case "adsubfamilies":
                array = [];
                for (i = 0; i < 9; i++) {
                    array.push(getAddSubFactFamily(sum, i));
                }
                break;
            case "multipleFamily":
                array = [];
                for (i = 0; i < 9; i++) {
                    array.push(getMultiDiviFactFamily(max, i));
                }
                break;
            case "graphPaper":
                array = [];
                // DPI : 60
                for (i = 0; i < Math.floor(unit * height / 60); i++) {
                    var colContent = [];
                    for (var k = 0; k < Math.floor(unit * width / 60); k++)
                        colContent.push("")
                    array.push(colContent)
                }
                break;
            case "numberline":
                if (Math.floor(end / increment) > 25) {
                    showAlert("Can't display too much numbers across a line");
                    setErrorType("error");
                    array = [];
                    break;
                }
                array = [];
                for (i = 0; i < lines; i++) {
                    var row = [];
                    for (var indent = 0; (start + indent * increment) <= end; indent++)
                        row.push(start + indent * increment)
                    array.push(row)
                }
                break;
            default:
                break;
        }

        setResults(array);
        if (!alert)
            setShow(true);
    }

    const showAlert = (error) => {
        setError(error);
        setAlert(true);
    }

    const hideAlert = () => {
        setAlert(false);
    }

    // const heightPxToMm = (px) => {
    //     return Math.floor(px / document.getElementById('myMm').offsetHeight);
    // };

    // const widthPxToMm = (px) => {
    //     return Math.floor(px / document.getElementById('myMm').offsetWidth);
    // };

    // const mmToPx = (mm) => {
    //     return document.getElementById('myMm').offsetHeight * mm;
    // };

    const downloadPdf = () => {
        const result = document.getElementById("result");
        html2canvas(result)
            .then(
                (canvas) => {
                    const imgData = canvas.toDataURL("image/png");
                    const pdf = new jsPDF('p', 'mm', "a4");
                    var width = pdf.internal.pageSize.getWidth();
                    var height = pdf.internal.pageSize.getHeight();
                    console.log(width, height)
                    pdf.addImage(imgData, 'PNG', -2, -1, 207, 300);
                    pdf.save("result.pdf");
                }
            )
    }

    return (
        <main className={styles.wrapper}>
            <Alert label={error} handleClose={hideAlert} type={errorType}
                className={alert ? styles.showAlert : styles.hideAlert} />
            <div className="container">
                <div className="row" style={{ height: "100%", "justify-content": "center" }}>
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
                            <Input type="number" id="digits" min={1} max={5} value={digits}
                                label="Number of digits" handleChange={setDigits}
                            />
                        }
                        {
                            (
                                operator === "graph"
                            ) &&
                            <Input type="number" id="units" min={1} max={8} value={unit}
                                label="Lines per Unit" handleChange={setUnit}
                            />
                        }
                        {
                            (
                                operator === "+" || operator === "-" || operator === "x" || operator === "÷"
                            ) &&
                            <Input type="number" id="problems" min={1} max={50} value={problems}
                                label="Number of problems" handleChange={setProblems}
                            />
                        }
                        {
                            (
                                operator === "line"
                            ) &&
                            <div className={styles.lineInput}>
                                <Input type="number" id="start" min={1} max={8} value={start}
                                    label="Starting Number" handleChange={setStart}
                                />
                                <Input type="number" id="end" value={end}
                                    label="Ending Number" handleChange={setEnd}
                                />
                                <Input type="number" id="increment" min={1} max={8} value={increment}
                                    label="Increment" handleChange={setIncrement}
                                />
                                <Input type="number" id="lines" min={1} max={12} value={lines}
                                    label="Lines per page" handleChange={setLines}
                                />
                            </div>
                        }
                        <div className={styles.checkbox}>
                            <input id="display" type="checkbox" checked={displayNumber}
                                onChange={e => setDisplay(!displayNumber)} />
                            <label htmlFor="display">
                                Display problem numbers
                            </label>
                        </div>
                        <Button onClick={generateProblems}>Generate!</Button>
                        {
                            show && <Button onClick={showAnswer}>
                                { !isAnswer ? "Show Answer" : "Hide Answer"}
                            </Button>
                        }
                        {
                            show && <Button onClick={downloadPdf}>
                                Download PDF
                                <div id="myMm" style={{ height: "1mm", width: "1mm" }} />
                            </Button>
                        }

                        {
                            !show &&
                            <div className={styles.alert}>
                                Set whatever you want to generate!!!
                            </div>
                        }
                    </div>
                    <div className={styles.resultWrapper}>
                        <p>Preview Worksheet</p>
                        <ul className={styles.tab}>
                            <li onClick={e => setShowAnswer(false)}
                                className={isAnswer? styles.inactive : styles.active}>
                                WORKSHEET
                            </li>
                            <li onClick={e => setShowAnswer(true)}
                                className={isAnswer? styles.active : styles.inactive}>
                                ANSWER KEY
                            </li>
                        </ul>
                        <div className={styles.previewWorksheet} id="result">
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
                                                key={element.id.toString()}
                                                data={element}
                                                operator={operator}
                                                showAnser={isAnswer}
                                                isNumber={displayNumber}
                                            />;
                                        })
                                    }
                                </div> :
                                (operator === "+" || operator === "-" || operator === "x" || operator === "÷") ?
                                <div className={styles.calcResults}>
                                    {
                                        results.map(element => {
                                            return <Calc
                                                key={element.id.toString()}
                                                isNumber={displayNumber}
                                                data={element}
                                                operator={operator}
                                                showAnser={isAnswer}
                                            />;
                                        })
                                    }
                                </div> :
                                operator === "graph" ?
                                <div className={styles.graph} ref={graphRef}>
                                    {
                                        results.map((element, index) => {
                                            return <div key={index.toString()}>
                                                {
                                                    element.map((item, ind) => {
                                                        return <span key={ind.toString()}></span>
                                                    })
                                                }
                                            </div>
                                        })
                                    }
                                    <span className={styles.horiX}>
                                    </span>
                                    <span className={styles.verY}>
                                    </span>
                                </div> :
                                operator === "line" &&
                                <div className={styles.numberline}>
                                    {
                                        !alert && results.map((element, index) => {
                                            return <NumberLine content={element} key={index.toString()}>

                                            </NumberLine>
                                        })
                                    }
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main;