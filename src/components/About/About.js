import { PageTitle } from '../PageTitle/PageTitle';
import styles from './About.module.scss';


export const About = () => {

  return (
    <div className={styles.container}>
      <PageTitle>About</PageTitle>
      <p>Lorem ipsum</p>
    </div>
  )
}