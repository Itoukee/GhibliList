import axios from "axios";
import { API_URL } from "../utils/apiUrl";

export const backend = axios.create({
  baseURL: `${API_URL["dev"]}`,
});
