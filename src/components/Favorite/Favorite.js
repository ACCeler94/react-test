import PageTitle from '../PageTitle/PageTitle';
import styles from './Favorite.module.scss';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/store';
import Container from '../Container/Container';

const Favorite = () => {

  const cards = useSelector(state => getFavoriteCards(state));


  const checkForFavorites = () => {
    if (cards.length !== 0) {
      return (
        <ul className={styles.cards}>
          {cards.map(card => <Card key={card.id} title={card.title} isFavorite={card.isFavorite} id={card.id} />)}
        </ul>
      )
    } else {
      return (
        <p>You have no favorite Cards</p>
      )
    }
  }

  return (
    <Container>
      <PageTitle>Favorite</PageTitle>
      <div className={styles.favoriteContainer}>
        <p>Your Favorite Cards</p>
        <article className={styles.column}>
          {checkForFavorites()}
        </article>
      </div>
    </Container>
  )
}

export default Favorite;











