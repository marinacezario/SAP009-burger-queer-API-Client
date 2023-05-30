// import axios from 'axios'

// axios.post('/login', {
//     email: 'anita.borg@systers.xyz',
//     password: '123456'
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

//   const api = axios.create({
//          baseURL: 'https://burger-queen-api-mock-rho.vercel.app/'})

//   export default api;

// // export const api = axios.create({
// //     baseURL: 'https://burger-queen-api-mock-rho.vercel.app/'
// // 

// import axios from 'axios';

// const api = axios.create({
//   baseURL: 'https://burger-queen-api-mock-rho.vercel.app/'
// });

// export default api;

import axios from 'axios';

const api = axios.create({
  baseURL: 'https://burger-queen-api-mock-rho.vercel.app/'
});

export default api;