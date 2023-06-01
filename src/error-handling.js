export function errorHandling (error){
    if (error.response) {
      return error.response.data
        // switch (error.response.data) {
        //     case "Incorrect password":
        //      return 'Incorrect password'
             
        //     case  "Cannot find user":
        //        return 'User not found'
               
        //     case "Cannot find user":
        //        return 'User not found'
             
        //     case "Email and password are required":
        //         return 'Email and password are required'
                            
        //     default:
        //         break;
        }

       else if (error.request) {
        // A requisição foi feita mas nenhuma resposta foi recebida
        // `error.request` é uma instância do XMLHttpRequest no navegador e uma instância de
        // http.ClientRequest no node.js
        console.log('error.request');
        console.error(error.request);
      } else {
        // Alguma coisa acontenceu ao configurar a requisição que acionou este erro.
        console.log('Error, error.message');
        console.error('Error', error.message);
      }
      console.log("error.config");
      console.error(error.config);
}
