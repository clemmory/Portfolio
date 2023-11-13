import styles from '../styles/Footer.module.css';
import { useState } from 'react';
import Form from './Form';
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSquareGithub,faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faHeart, faCircleChevronUp} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';



function Footer() {

useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
}, []);

const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
};

  return (
        <div className={styles.footer}>
            <h2 className={styles.title}>let's connect !</h2>
            <div className={styles.content}>
                <div className={styles.contentLeft}>
                    <p className={styles.textContact}>Feel free to reach out if you're interested in <span>working together.</span> <br/>You can fill up the for form or email me at <span>clementine.mory@gmail.com</span></p>
                    <div className={styles.iconsContainer}>
                        <Link href='https://github.com/clemmory'>
                            <a target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faSquareGithub} className={styles.icon}/>
                            </a>
                        </Link>
                        <Link href='https://www.linkedin.com/in/clementinemory'>
                            <a target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} className={styles.icon}/>
                            </a>
                        </Link>
                    </div>
                </div>
                <Form/>
                <FontAwesomeIcon icon={faCircleChevronUp} className={styles.iconTop} onClick={scrollToTop}/>
            </div>
            <p className={styles.text}>Coded and designed with <FontAwesomeIcon icon={faHeart} width={15} height={15} color='#4440FF' /> by Clémentine Mory | @ 2023 All rights reserved. </p>
        </div>

  )
};

export default Footer;


