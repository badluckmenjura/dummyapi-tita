import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'https://dummyapi.io/data/v1/',
  headers: {
    'app-id': '612a7e4b28bfa16daf6012bf'
  } 
});

export {
  axiosInstance
}