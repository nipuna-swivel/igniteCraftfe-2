import axios from "axios";
import {store} from "@/store";

export const axiosInstence = axios.create ({

 baseURL: process.env.NEXT_PUBLIC_API_URL,
 
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  }
  
});

// Add a request interceptor
axiosInstence.interceptors.request.use(function (config) {
  // Do something before request is sent
  let state =store.getState()
  config.headers['Authorization'] = `Bearer ${state.auth.jwtToken}`;
  return config;
  
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axiosInstence.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});