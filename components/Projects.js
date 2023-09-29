import styles from '../styles/Projects.module.css';
import Image from 'next/image';
import Link from 'next/link';
import medMe from '../public/medMe.JPG';
import morningnews from '../public/morningnews.JPG';
import mymoviz from '../public/mymoviz.JPG';



function Projects() {

  const boxOneStyle = {'backgroundColor':'#4440FF'};
  const boxTwoStyle = {'backgroundColor':'#E18B66'};
  const boxThreeStyle = {'backgroundColor':'#77BDC3'};

  const imageStyle = {
    'object-fit':'contain',
  }
  
  return (
      <div className={styles.projectsContainer}>
        <div className={styles.contentRow}>
            <div className={styles.textBox} style={boxOneStyle}>
              <div className={styles.content}>
                <span className={styles.number}>01.</span>
                <h2 className={styles.projectTitle}>medme</h2>
                <p className={styles.description}>"medMe" is an application that provides a medicine delivery service. It was developed with two other students under a tight deadline of 10 days. <br/>Feel free to click on "Live" to view a demonstration of the minimum viable product (MVP) version.</p>
                <div className={styles.buttons}>
                  <Link href='https://movizz-frontend.vercel.app/'>
                      <a className={styles.buttnBox} target="_blank"><button className={styles.buttn}>LIVE</button></a>
                    </Link>
                    <Link href='https://github.com/Benjamindio/frontend-medme'target="_blank">
                    <a className={styles.buttnBox} target="_blank"><button className={styles.buttn}>GITHUB FRONT</button></a>
                    </Link>
                    <Link href='https://github.com/Benjamindio/backend-medme'target="_blank">
                    <a className={styles.buttnBox} target="_blank"><button className={styles.buttn}>GITHUB BACK</button></a>
                    </Link>
                </div>
              </div>
            </div>
            <div className={styles.imageBox}>
              <div className={styles.imageContainer}>
              <Image src={medMe} alt='screen' style={imageStyle} layout='fill'/>
              </div>
              <div className={styles.skills}>
                <p className={styles.skillsText}>REACT NATIVE</p>
                <p className={styles.skillsText}>REDUX</p>
                <p className={styles.skillsText}>NODEJS</p>
                <p className={styles.skillsText}>EXPO</p>
                <p className={styles.skillsText}>MONGODB</p>
                <p className={styles.skillsText}>EXPRESS</p>
              </div>
            </div>
        </div>
        <div className={styles.contentRow}>
            <div className={styles.imageBox}>
              <div className={styles.imageContainer}>
                <Image src={morningnews} alt='morning news home page' style={imageStyle} layout='fill'/>
              </div>
              <div className={styles.skills}>
                <p className={styles.skillsText}>EXPRESS</p>
                <p className={styles.skillsText}>REDUX</p>
                <p className={styles.skillsText}>NEXT.JS</p>
                <p className={styles.skillsText}>WEBSERVICES</p>
              </div>
            </div>
            <div className={styles.textBox} style={boxTwoStyle}>
              <div className={styles.content}>
                <span className={styles.number}>02.</span>
                <h2 className={styles.projectTitle}>morning news</h2>
                <p className={styles.description}>"Morning News" is a web application that allows you to display the latest news from The Verge. You can also save your favorite articles and access them by logging into your account.</p>
                <div className={styles.buttons}>
                  <Link href='https://movizz-frontend.vercel.app/'>
                      <a className={styles.buttnBox} target="_blank"><button className={styles.buttn}>LIVE</button></a>
                    </Link>
                    <Link href='https://github.com/clemmory/movizz-frontend/'target="_blank">
                    <a className={styles.buttnBox} target="_blank"><button className={styles.buttn}>GITHUB FRONT</button></a>
                    </Link>
                    <Link href='https://github.com/clemmory/movizz-backend/'target="_blank">
                    <a className={styles.buttnBox} target="_blank"><button className={styles.buttn}>GITHUB BACK</button></a>
                    </Link>
                </div>
              </div>
            </div>
        </div>
        <div className={styles.contentRow}>
        <div className={styles.textBox} style={boxThreeStyle}>
          <div className={styles.content}>
                <span className={styles.number}>03.</span>
                <h2 className={styles.projectTitle}>my moviz</h2>
                <p className={styles.description}>"MyMoviz" is an application that displays the latest released movies and gives you the ability to add a film to your favorites, manage a view counter, and rate each of the presented films.</p>
                <div className={styles.buttons}>
                  <Link href='https://movizz-frontend.vercel.app/'>
                    <a className={styles.buttnBox} target="_blank"><button className={styles.buttn}>LIVE</button></a>
                  </Link>
                  <Link href='https://github.com/clemmory/movizz-frontend/'target="_blank">
                  <a className={styles.buttnBox} target="_blank"><button className={styles.buttn}>GITHUB FRONT</button></a>
                  </Link>
                  <Link href='https://github.com/clemmory/movizz-backend/'target="_blank">
                  <a className={styles.buttnBox} target="_blank"><button className={styles.buttn}>GITHUB BACK</button></a>
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.imageBox}>
              <div className={styles.imageContainer}>
                <Image src={mymoviz} alt='my moviz home page' style={imageStyle} layout='fill'/>
              </div>
              <div className={styles.skills}>
                <p className={styles.skillsText}>EXPRESS</p>
                <p className={styles.skillsText}>REACT</p>
                <p className={styles.skillsText}>NODEJS</p>
                <p className={styles.skillsText}>WEBSERVICES</p>
              </div>
            </div>
        </div>
      </div>
  )
};

export default Projects;