import styles from '../styles/Home.module.css';
import React from 'react';
import Head from 'next/head';
import Projects from './Projects';
import Footer from './Footer';
import { useRef } from 'react';


function Home() {

  const projects = useRef(null);
  const about = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    });
  };
   
  return (
    <div>
      <Head>
        <title>Portfolio Clémentine Mory</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" href='/icon_portfolio.png' />
        <meta name="description" content="Clémentine Mory is a web and mobile developer based in Valencia, Spain."/>
      </Head>
      <header className={styles.header}>
        <div className={styles.tabsContainer}>
          <p className={styles.tabs} onClick={()=> scrollToSection(projects)}>PROJECTS</p>
          <p className={styles.tabs} onClick={()=> scrollToSection(about)}>ABOUT ME</p>
          <p className={styles.tabs} onClick={()=> scrollToSection(contact)}>CONTACT</p>
        </div>
        <div className={styles.textContainer}>
            <h1>hi there!<br/> i'm <span className={styles.firstname}>Clémentine.</span></h1>
            <span className={styles.subtitle}>I'M A WEB DEVELOPER</span>
            <button className={styles.buttonContact} type="button" onClick={()=> scrollToSection(contact)}>CONTACT ME</button>
        </div>
      </header>
      <div ref={projects}>
        <Projects />
      </div>
      <div className={styles.aboutContainer} ref={about}>
        <div className={styles.content}>
          <h2 className={styles.title}>about me</h2>
          <p className={styles.text}><p className = {styles.importantText}>Hello, I'm Clem !</p>After six years of working as an interior designer, I've decided to take on a <span className={styles.coloredWord}>new challenge</span> and embark on a different path in the web development field. I recently completed the full-stack engineer course offered by "La Capsule" and earned the title of <span className={styles.coloredWord}>software developer and designer</span>. I am now seeking an opportunity to work as a frontend developer where I can contribute to exciting projects, continue my learning journey, and put my <span className={styles.coloredWord}>creativity</span> to good use.</p>
        </div>
      </div>
      <footer ref={contact}>
        <Footer/>
      </footer>
    </div>

  )
};

export default Home;
