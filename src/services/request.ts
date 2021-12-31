import axios, { Method, AxiosRequestConfig } from 'axios';
import { __BASE_URL__ } from '@src/constants';

export const apiRequest = (
  method: Method,
  url: string,
  data?: any,
  config?: AxiosRequestConfig,
) => {
  return new Promise((resolve, reject) => {
    return axios({
      method,
      baseURL: __BASE_URL__,
      url,
      data,
      ...config,
    })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error.response.data);
      });
  });
};
