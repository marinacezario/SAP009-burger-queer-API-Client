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

export const getUsers = () => {
  return api
    .get('/users'
    )
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};

export const createNewUser = (userId, email, password, role) => {
  return api
    .post('/users', {
      id: userId,
      email: email,
      password: password,
      role: role,
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    })
};

export const editUser = (uid) => {
  return api
    .patch(`/users/${uid}`
    )
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    })
};

export const deleteUser = (uid) => {
  return api
  .delete(`/users/${uid}`
  )
  .then((response) => {
    return response;
  })
  .catch((error) => {
    throw error;
  })
};
