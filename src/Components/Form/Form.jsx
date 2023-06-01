import { useState } from 'react';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
//import { ErrorLabel } from '../ErrorLabel/ErrorLabel';
import styles from './Form.module.css';
import { handleFormSubmit } from '../../API/Users'


export function Form() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
/*   const [error, setError] = useState(''); */
    const handleLogin = handleFormSubmit(username, password) 
  return (
    <form onSubmit={handleFormSubmit(username, password)} className={styles.form_login}>
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
      <Button type="submit" text="login" className="submit_btn" />
{/*       <ErrorLabel value={error}/> */}
    </form>
  );
}