import styles from './PageTitle.module.scss';

export const PageTitle = props => {

  return (
    <h1 className={styles.title}>{props.children}</h1>
  )
}