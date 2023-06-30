import Card from '../Card/Card';
import styles from './Column.module.scss'
import CardForm from '../CardForm/CardForm';
import { useSelector } from 'react-redux';
import { getFilteredCards } from '../../redux/store';

const Column = (props) => {

  const cards = useSelector(state => getFilteredCards(state, props.id));
  console.log('Column render');

  return (
    <article className={styles.column}>
      <h2 className={styles.title}><span className={styles.icon + ' fa fa-' + props.icon}></span>{props.title}</h2>
      <ul className={styles.cards}>
        {cards.map(card => <Card key={card.id} title={card.title} isFavorite={card.isFavorite} id={card.id} />)}
      </ul>
      <CardForm columnId={props.id} />
    </article >
  )
}

export default Column;