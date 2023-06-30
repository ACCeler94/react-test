import { useDispatch } from "react-redux";
import styles from "./Card.module.scss";
import clsx from "clsx";
import { toggleFavorite } from "../../redux/store";

const Card = (props) => {

  const dispatch = useDispatch();

  return (
    <li className={styles.card} onClick={() => dispatch(toggleFavorite(props.id))}>
      {props.title}
      <span className={clsx(styles.icon + ' fa fa-star-o', props.isFavorite && styles.isFavorite)}>
      </span>
    </li>
  )
}

export default Card;
