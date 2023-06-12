import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import styles from './ColumnForm.module.scss';
import { useState } from "react";

const ColumnForm = (props) => {

  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    props.action({ title: title, icon: icon, });
    setTitle('');
    setIcon('');
  }

  return (
    <form onSubmit={handleSubmit} className={styles.columnForm}>
      <label for="title">Title</label>
      <TextInput id="title" type="text" value={title} onChange={e => setTitle(e.target.value)} />
      <label for="icon">Icon</label>
      <TextInput id="icon" type="text" value={icon} onChange={e => setIcon(e.target.value)} />
      <Button>Add Column</Button>
    </form>
  )
}

export default ColumnForm;