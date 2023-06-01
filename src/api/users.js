import {api} from './api';
import { errorHandling } from '../error-handling';

export const handleFormSubmit = (username, password) => {

    
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
        console.log(errorMessage)
    //    setError(errorMessage);      
      });
  };
