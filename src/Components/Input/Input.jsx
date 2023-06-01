<<<<<<< HEAD
import styles from './Input.module.css'

export function Input({type, value, onChange, placeholder, className}) {
    return (
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={styles.inputs}
      />
    );
=======
import styles from './Input.module.css';

export function Input({type, value, onChange, placeholder}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className= {styles.inputs}
    />
  );
>>>>>>> 28aeaa48629483fd84d757c87db0dd87333f2a16
}
