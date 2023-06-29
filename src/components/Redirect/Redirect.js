import Button from "../Button/Button";
import PageTitle from "../PageTitle/PageTitle";
import styles from './Redirect.module.scss';
import { Link } from 'react-router-dom';

const Redirect = () => {

  return (
    <div className={styles.redirectContainer}>
      <PageTitle >404 Not Found</PageTitle>
      <Link to="/"><Button>Home</Button></Link>
    </div>
  )
}

export default Redirect;