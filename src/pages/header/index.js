import React from 'react';
import styles from './header.module.css';

import Logo from '../../assets/icons/logo.png';

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className={styles.wrapper}>
                        <a href="/" className={styles.favicon}>
                            <img alt="logo" src={Logo} />
                        </a>
                        <ul className={styles.links}>
                            <li>
                                <a href="/home">
                                    Home Page
                                </a>
                            </li>
                            <li>
                                <a href="/#">
                                    About US
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;