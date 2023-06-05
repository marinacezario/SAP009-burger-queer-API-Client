import { api } from './api';
import { errorHandler } from '../error-handler';

export const handleSubmitForm = (email, password) => {
  // const [error, setError] = useState('');

  // console.log('Email:', email);
  // console.log('Password:', password);
    
  return api.post('/login', {
    email: email,
    password: password
  })
    .then(function (response) {
   //   console.log(response.data.user)
      return response.data.user;
    })
    .catch(function (error) {        
      const errorMessage = errorHandler(error);
      console.log(errorMessage)
      // setError(errorMessage);      
    });
};
