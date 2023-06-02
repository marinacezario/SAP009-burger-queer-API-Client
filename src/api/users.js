import { api } from './api';
import { errorHandler } from '../error-handler';

export const handleSubmitForm = (email, password) => {
  
  console.log('Email:', email);
  console.log('Password:', password);
    
  api.post('/login', {
    email: email,
    password: password
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {        
      const errorMessage = errorHandler(error);
      console.log(errorMessage)
      //    setError(errorMessage);      
    });
};
