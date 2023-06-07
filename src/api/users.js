import { api } from './api';

export const handleSubmitForm = (email, password) => {
    
  return api.post('/login', {
    email: email,
    password: password
  })
    .then(function (response) {
   
      return response.data.user;
    })
    .catch(function (error) {    
    
    throw error;
    });
};
