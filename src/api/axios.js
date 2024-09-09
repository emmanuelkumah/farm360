import axios from "axios";

export const axiosbaseURL = axios.create({
  baseURL: "https://dev.bjlfarmersmarket.net/farmers",
  headers: {
    "X-Origin": "WEB",
  },
});
