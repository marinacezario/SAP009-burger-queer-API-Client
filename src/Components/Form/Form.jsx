import { useState } from 'react';
import axios from 'axios';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import api from '../../api';
import { errorHandling } from '../../ErrorHandling';
import { ErrorLabel } from '../ErrorLabel/ErrorLabel';
import styles from './Form.module.css';

export function Form() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const [error, setError] = useState('');
  
  const handleFormSubmit = (event) => {
    event.preventDefault(); 
    console.log('Username:', username);
    console.log('Password:', password);
    
    api.post('/login', {
      email: username,
      password: password
    })
      .then(function (response) {
        console.log(response);
        
      })
      .catch(function (error) {        
        const errorMessage = errorHandling(error);
        setError(errorMessage);      
      });
  };

  return (
    <form onSubmit={handleFormSubmit} className={styles.form_login}>
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
      <Button type="submit" text="login" />
      <ErrorLabel value={error}/>
    </form>
  );
}
