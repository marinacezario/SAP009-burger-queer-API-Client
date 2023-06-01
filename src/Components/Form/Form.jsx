import { useState } from 'react';

import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { errorHandling } from '../../error-handling';
import { ErrorLabel } from '../ErrorLabel/ErrorLabel';
import styles from './Form.module.css';
//import stylesB from './Button.module.css';
import { handleFormSubmit } from '../../api/users';

export function Form() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const [error, setError] = useState('');
  
  

  return (
    
    <form onSubmit={(e) => {handleFormSubmit(username, password); e.preventDefault();}} className={styles.form_login}>
        <h1 className={styles.login_title}>LOGIN</h1>
      <Input
        type="text"
        placeholder="Nome de usuário"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <Input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <Button type="submit" text="login" value="login" className={styles.btnSend} />
      <ErrorLabel value={error}/>
    </form>
  );
}
