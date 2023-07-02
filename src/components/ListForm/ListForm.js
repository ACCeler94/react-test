import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import styles from './ListForm.module.scss';
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/listsRedux';

const ListForm = () => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addList({ title, description }));
    setTitle('');
    setDescription('');
  }

  return (
    <form onSubmit={handleSubmit} className={styles.listForm}>
      <label for="title">Title</label>
      <TextInput id="title" type="text" value={title} onChange={e => setTitle(e.target.value)} />
      <label for="description">Description</label>
      <TextInput id="description" type="text" value={description} onChange={e => setDescription(e.target.value)} />
      <Button>Add List</Button>
    </form>
  )
}

export default ListForm;