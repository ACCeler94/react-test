import { useDispatch } from "react-redux";
import styles from "./Card.module.scss";
import clsx from "clsx";
import { removeCard, toggleFavorite } from "../../redux/cardsRedux";

const Card = (props) => {

  const dispatch = useDispatch();

  return (
    <li className={styles.card} >
      {props.title}
      <div className={styles.iconContainer}>
        <span className={clsx(styles.icon + ' fa fa-star-o', props.isFavorite && styles.isFavorite)}
          onClick={() => dispatch(toggleFavorite(props.id))}>
        </span>
        <span className={styles.icon + ' fa fa-trash'} onClick={() => dispatch(removeCard(props.id))} ></span>
      </div>
    </li>
  )
}

export default Card;
