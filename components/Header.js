import styles from '../styles/Header.module.css';

function Header() {

  const handleClick =() =>{
    console.log('Click detected')
  }
  
  return (
    <header className={styles.header}>
        <div className={styles.tabsContainer}>
          <p className={styles.tabs} onClick={()=> handleClick()}>PROJECTS</p>
          <p className={styles.tabs}>ABOUT</p>
          <p className={styles.tabs}>CONTACT</p>
        </div>
        <div className={styles.textContainer}>
            <h1 className={styles.title}>hi there!<br/> i'm <span className={styles.firstname}>Clémentine.</span></h1>
            <span className={styles.subtitle}>I'M A FRONTEND DEVELOPER</span>
            <button className={styles.buttonContact} type="button">CONTACT ME</button>
        </div>
    </header>
  );
}

export default Header;
