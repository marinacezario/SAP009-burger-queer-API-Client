import { api } from "./api";

export const createNewOrder = (orderResume, clientName, waiterId) => {
  return api
    .post('/orders', {
          userId: waiterId,
          client: clientName,
          products: orderResume,
          status: 'pending',
          dateEntry: new Date(),
        }
    )
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};

export const getOrders = () => {
  return api
    .get('/orders'
    )
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};

export const updateStatus = (id, newStatus) => {
  return api
    .patch(`/orders/${id}`, {
      status: newStatus,
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};
