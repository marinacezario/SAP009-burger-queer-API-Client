import axios from "axios";
import { getItem } from "../storage/localStorage";

export const api = axios.create({
  baseURL: "https://burger-queer-api-mock.vercel.app/",
  headers: {
    Authorization: `Bearer ${getItem("token")}`,
  },
});
