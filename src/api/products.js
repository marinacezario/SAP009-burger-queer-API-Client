import { api } from "./api";

export const getProducts = () => {
    return api
    .get('/products'
    )
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};

export const createNewProducts = (name, price, type, dateEntry) => {
  return api
    .post('/products', {
      name: name,
      price: price,
      type: type,
      dateEntry: dateEntry
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    })
};

export const editProduct = (uid, name, price, type, dateEntry) => {
  return api
    .patch(`/products/${uid}`, {
      name: name,
      price: price,
      type: type,
      dateEntry: dateEntry
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    })
};

export const deleteProduct = (uid) => {
  return api
  .delete(`/products/${uid}`
  )
  .then((response) => {
    return response;
  })
  .catch((error) => {
    throw error;
  })
};
