import { api } from "./api";
import { getItem } from "../storage/localStorage";

const getToken = getItem("token");

export const handleShowMenu = () => {
    return api
    .get('/products', {
        headers: {
          Authorization: `Bearer ${getToken}`}
      }
    )
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};
