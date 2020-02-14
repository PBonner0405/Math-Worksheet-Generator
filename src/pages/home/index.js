import React from 'react';
import { Link } from 'react-router-dom';

import Substraction from '../../assets/images/subtraction_thumbnail.jpg';
import Addition from '../../assets/images/addition_thumbnail.jpg';
import Multiplication from '../../assets/images/multiplication_thumbnail.jpg';
import Division from '../../assets/images/division_thumbnail.jpg';
import AdditionFamily from '../../assets/images/addition_subtraction_fact_families_thumbnail.jpg';
import MultiplicationFamily from '../../assets/images/multiplication_division_fact_families_thumbnail.jpg';
import Graph from '../../assets/images/graph_paper_thumbnail.jpg';
import NumberLine from '../../assets/images/number_line_thumbnail.jpg';

import styles from './home.module.css'
const Home = () => {
    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className={styles.wrapper}>
                        <Link to="/main/addition" className={styles.option}>
                            <img alt="addition" src={Addition}/>
                            <p>Addition</p>
                        </Link>
                        <Link to="/main/subtraction" className={styles.option}>
                            <img alt="subtraction" src={Substraction}/>
                            <p>Subtraction</p>
                        </Link>
                        <Link to="/main/multiplication" className={styles.option}>
                            <img alt="multiplication" src={Multiplication}/>
                            <p>Multiplication</p>
                        </Link>
                        <Link to="/main/division" className={styles.option}>
                            <img alt="division" src={Division}/>
                            <p>Division</p>
                        </Link>
                        <Link to="/main/adsubfamilies" className={styles.option}>
                            <img alt="adsubfamilies" src={AdditionFamily}/>
                            <p>Addition and Subtraction Fact Families</p>
                        </Link>
                        <Link to="/main/multipleFamily" className={styles.option}>
                            <img alt="multipleFamily" src={MultiplicationFamily}/>
                            <p>Multiplication and Division Fact Families</p>
                        </Link>
                        <Link to="/main/graphPaper" className={styles.option}>
                            <img alt="graphPaper" src={Graph}/>
                            <p>Graph Paper</p>
                        </Link>
                        <Link to="/main/numberline" className={styles.option}>
                            <img alt="numberline" src={NumberLine}/>
                            <p>Number Line</p>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home;