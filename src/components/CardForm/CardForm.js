import { useDispatch } from 'react-redux';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import styles from './CardForm.module.scss';
import { useState } from 'react';
import shortid from 'shortid';
import { addCard } from '../../redux/store';

const CardForm = (props) => {

  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addCard({ id: shortid(), columnId: props.columnId, title }));
    setTitle('');
  }

  return (
    <form className={styles.cardForm} onSubmit={handleSubmit}>
      <TextInput value={title} onChange={e => setTitle(e.target.value)} />
      <Button>Add Card</Button>
    </form>
  )
}

export default CardForm;