import styles from './TextInput.module.scss';

const TextInput = (props) => {
  return (<input className={styles.input} type="text" id={props.id} onChange={props.onChange} value={props.value} placeholder={props.placeholder} />);
};

export default TextInput;