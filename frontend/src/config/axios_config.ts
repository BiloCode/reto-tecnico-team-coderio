import axios from 'axios';

export const Api = axios.create({
  baseURL : "https://timezone-application-api.herokuapp.com"
});