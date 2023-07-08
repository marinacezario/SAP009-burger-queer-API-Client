import { api } from "./api";

export const handleShowMenu = () => {
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
