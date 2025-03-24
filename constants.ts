import axios from "axios";

export const API_BACKEND = axios.create({
  withCredentials: false,
  baseURL: import.meta.env.VITE_API_URL as string,
  headers: { 'X-API-KEY': "jmPWEOehaR7qB7Y03faV", },
});