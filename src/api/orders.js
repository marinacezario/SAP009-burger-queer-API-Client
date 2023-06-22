import { api } from "./api";

export const handleSendOrder = (orderId, orderResume, clientName, waiterId, token) => {
    return api
    .post('/order', {
        headers: {
          Authorization: `Bearer ${token}`},
        body: {
          id: orderId, 
          userId: waiterId,
          client: clientName,
          products: orderResume,
          status: 'pendente',
          dateEntry: new Date(),
        },
      }
    )
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};