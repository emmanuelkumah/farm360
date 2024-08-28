import axios from "axios";

export const axiosbaseURL = axios.create({
  baseURL: "http://18.134.98.183:8080/",
  headers: {
    "X-Origin": "WEB",
  },
});
