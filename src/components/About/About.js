import PageTitle from '../PageTitle/PageTitle';
import styles from './About.module.scss';


const About = () => {

  return (
    <div className={styles.container}>
      <PageTitle>About</PageTitle>
      <p>Lorem ipsum</p>
    </div>
  )
}

export default About;