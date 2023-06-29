import { useParams } from "react-router-dom";
import { getAllColumnsByList, getListById } from "../../redux/store";
import Column from "../Column/Column";
import ColumnForm from "../ColumnForm/ColumnForm";
import styles from "./List.module.scss";
import { useSelector } from 'react-redux';

const List = () => {

  const { listId } = useParams();
  const columns = useSelector(state => getAllColumnsByList(state, listId));
  const listData = useSelector(state => getListById(state, listId));
  console.log(listData, 'listData')




  return (
    <div className={styles.list}>
      <header className={styles.header}><h2 className={styles.title}>
        {listData.title}</h2></header>
      <p className={styles.description}>
        {listData.description}
      </p>
      <section className={styles.columns}>
        {columns.map(column => <Column key={column.id} {...column} />)}
      </section>
      <ColumnForm listId={listId} />
    </div>
  )
};

export default List;