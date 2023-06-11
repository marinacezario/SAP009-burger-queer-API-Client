import { api } from './api';

export const handleSubmitForm = (email, password) => {
    
  return api.post('/login', {
    email: email,
    password: password
  })
    .then(function (response) {
   
      return response;
    })
    .catch(function (error) {    
    
    throw error;
    });
};
