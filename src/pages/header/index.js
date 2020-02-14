import React from 'react';
import styles from './header.module.css';

import Logo from '../../assets/icons/logo.png';

const Header = () => {
    return (
        <header className={styles.wrapper}>
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
                    <a href="/main">
                        Get My Sheet
                    </a>
                </li>
                <li>
                    <a href="#">
                         About US
                    </a>
                </li>
            </ul>
        </header>
    )
}

export default Header;