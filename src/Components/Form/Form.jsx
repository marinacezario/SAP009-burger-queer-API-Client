import { useState } from 'react';

//components
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';


import { ErrorLabel } from '../ErrorLabel/ErrorLabel';
import { handleSubmitForm } from '../../api/users';

//styles
import styles from './Form.module.css';





export function Form() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [error, setError] = useState('');

  return (
    <form onSubmit={(e) => {handleSubmitForm(email, password); e.preventDefault();}} className={styles.login_form}>
      <h1 className={styles.login_title}>LOGIN</h1>
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <Input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <Button type="submit" text="login" value="login" className={styles.send_btn} />
      <ErrorLabel value={error}/>
    </form>
  );
}
