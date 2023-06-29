import Container from '../Container/Container';
import styles from './NavBar.module.scss';
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {

  return (
    <nav>
      <Container>
        <div className={styles.navContent}>
          <Link to='/'><span className={styles.icon + ' fa fa-tasks'}></span></Link>
          <ul className={styles.navLinks}>
            <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to='/'>Home</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to='/favorite'>Favorite</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to='/about'>About</NavLink></li>
          </ul>
        </div>
      </Container>
    </nav >
  )
}

export default NavBar;