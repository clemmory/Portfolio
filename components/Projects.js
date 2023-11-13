import styles from '../styles/Projects.module.css';
import Image from 'next/image';
import Link from 'next/link';
import medMe from '../public/medMe.JPG';
import morningnews from '../public/morningnews.JPG';
import mymoviz from '../public/mymoviz.JPG';
import VideoPlayer from './VideoPlayer';

function Projects() {

  const boxOneStyle = {'backgroundColor':'#4440FF'};
  const boxTwoStyle = {'backgroundColor':'#E18B66'};
  const boxThreeStyle = {'backgroundColor':'#77BDC3'};

  const imageStyle = {
    'object-fit':'contain'
  }
  
  return (
      <div className={styles.projectsContainer}>
            <div className={styles.square} style={boxOneStyle}>
              <div className={styles.content}>
                <span className={styles.number}>01.</span>
                <h2 className={styles.projectTitle}>medMe</h2>
                <p className={styles.description}>"medMe" is an application that provides a medicine delivery service. It was developed with two other students under a tight deadline of 10 days. <br/>Press PLAY to view a demo of the minimum viable product (MVP) version.</p>
                <div className={styles.buttons}>
                    <VideoPlayer videoUrl='https://youtu.be/i7lpIey4TT4'/>
                    <Link href='https://github.com/Benjamindio/frontend-medme'target="_blank">
                    <a target="_blank"><button className={styles.buttnBlue}>GITHUB FRONT</button></a>
                    </Link>
                    <Link href='https://github.com/Benjamindio/backend-medme'target="_blank">
                    <a target="_blank"><button className={styles.buttnBlue}>GITHUB BACK</button></a>
                    </Link>
                </div>
              </div>
            </div>
            <div className={styles.square}>
              <div className={styles.contentImage}>
                <div className={styles.imageContainer}>
                  <Image src={medMe} alt='screen' className={styles.image} layout='fill'/>
                </div>
                <div className={styles.skills}>
                  <p className={styles.skillsTextBlue}>REACT NATIVE</p>
                  <p className={styles.skillsTextBlue}>REDUX</p>
                  <p className={styles.skillsTextBlue}>NODEJS</p>
                  <p className={styles.skillsTextBlue}>EXPO</p>
                  <p className={styles.skillsTextBlue}>MONGODB</p>
                  <p className={styles.skillsTextBlue}>EXPRESS</p>
                </div>
              </div>
            </div>
            <div className={styles.square} style={boxTwoStyle}>
              <div className={styles.content}>
                <span className={styles.number}>02.</span>
                <h2 className={styles.projectTitle}>morning news</h2>
                <p className={styles.description}>"Morning News" is a web application that allows you to display the latest news from The Verge. You can also save your favorite articles and access them by logging into your account.</p>
                <div className={styles.buttons}>
                  <Link href='https://morningnews-frontend-sandy.vercel.app/'>
                      <a target="_blank"><button className={styles.buttnOrange}>LIVE</button></a>
                  </Link>
                  <Link href='https://github.com/clemmory/Morningnews-Frontend'target="_blank">
                    <a  target="_blank"><button className={styles.buttnOrange}>GITHUB FRONT</button></a>
                  </Link>
                  <Link href='https://github.com/clemmory/Morningnews-Backend'target="_blank">
                    <a target="_blank"><button className={styles.buttnOrange}>GITHUB BACK</button></a>
                    </Link>
                </div>
              </div>
            </div>
            <div className={styles.squareWhite}>
              <div className={styles.contentImage}>
                <div className={styles.imageContainer}>
                  <Image src={morningnews} alt='morning news home page' className={styles.image} layout='fill'/>
                </div>
                <div className={styles.skills}>
                  <p className={styles.skillsTextOrange}>EXPRESS</p>
                  <p className={styles.skillsTextOrange}>REDUX</p>
                  <p className={styles.skillsTextOrange}>NEXT.JS</p>
                  <p className={styles.skillsTextOrange}>AUTHENTIFICATION</p>
                  <p className={styles.skillsTextOrange}>WEBSERVICES</p>
                </div>
              </div>
            </div>
          <div className={styles.square} style={boxThreeStyle}>
            <div className={styles.content}>
                <span className={styles.number}>03.</span>
                <h2 className={styles.projectTitle}>my moviz</h2>
                <p className={styles.description}>"MyMoviz" is an application that displays the latest released movies and gives you the ability to add a film to your favorites, manage a view counter, and rate each of the presented films.</p>
                <div className={styles.buttons}>
                  <Link href='https://movizz-frontend.vercel.app/'>
                    <a  target="_blank"><button className={styles.buttnGreen}>LIVE</button></a>
                  </Link>
                  <Link href='https://github.com/clemmory/movizz-frontend/'target="_blank">
                  <a  target="_blank"><button className={styles.buttnGreen}>GITHUB FRONT</button></a>
                  </Link>
                  <Link href='https://github.com/clemmory/movizz-backend/'target="_blank">
                  <a target="_blank"><button className={styles.buttnGreen}>GITHUB BACK</button></a>
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.square}>
              <div className={styles.contentImage}>
                <div className={styles.imageContainer}>
                  <Image src={mymoviz} alt='my moviz home page' className={styles.image} layout='fill'/>
                </div>
                <div className={styles.skills}>
                  <p className={styles.skillsTextGreen}>EXPRESS</p>
                  <p className={styles.skillsTextGreen}>REACT</p>
                  <p className={styles.skillsTextGreen}>NODEJS</p>
                  <p className={styles.skillsTextGreen}>WEBSERVICES</p>
                </div>
              </div>
            </div>
      </div>
  )
};

export default Projects;