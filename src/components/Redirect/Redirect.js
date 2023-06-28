import Button from "../Button/Button";
import { PageTitle } from "../PageTitle/PageTitle";
import styles from './Redirect.module.scss';

export const Redirect = () => {

  return (
    <div className={styles.redirectContainer}>
      <PageTitle >404 Not Found</PageTitle>
      <a href="/"><Button>Home</Button></a>
    </div>
  )
}