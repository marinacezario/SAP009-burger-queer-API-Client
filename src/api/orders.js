import { api } from "./api";
import { getItem } from "../storage/localStorage";

const token = getItem("token");

export const createNewOrder = (orderResume, clientName, waiterId) => {
  return api
    .post('/orders', {
          userId: waiterId,
          client: clientName,
          products: orderResume,
          status: 'pending',
          dateEntry: new Date(),
        }, {
        headers: {
          Authorization: `Bearer ${token}`
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

export const getOrders = () => {
  return api
    .get('/orders', {
        headers: {
          Authorization: `Bearer ${token}`}
      }
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
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};
