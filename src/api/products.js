import { api } from './api';

export const handleShowMenu = (email, password) => {
    
  return api.get('/products')
    .then(function (response) {
   
      return response;
    })
    .catch(function (error) {    
    
    throw error;
    });
};
