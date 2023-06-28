import Container from '../Container/Container';
import styles from './NavBar.module.scss';

export const NavBar = () => {

  return (
    <nav>
      <Container>
        <div className={styles.navContent}>
          <a href='/'><span className={styles.icon + ' fa fa-tasks'}></span></a>
          <ul className={styles.navLinks}>
            <li><a href='/'>Home</a></li>
            <li><a href='/favorite'>Favorite</a></li>
            <li><a href='/about'>About</a></li>
          </ul>
        </div>
      </Container>
    </nav >
  )
}