import axios from "axios";
import { getAuthToken } from "../utils/auth";

const token = getAuthToken();
const API_BASE_URL = "https://dev.bjlfarmersmarket.net";

export const axiosbaseURL = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "X-Origin": "WEB",
    Authorization: `Bearer ${token}`,
  },
});
