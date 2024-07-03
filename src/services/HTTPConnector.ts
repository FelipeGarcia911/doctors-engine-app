// src/services/httpService.ts
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const BASE_URL = "http://localhost:3000/api/";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const handleResponse = (response: AxiosResponse) => response.data;

const handleError = (error: any) => {
  console.error("HTTP Error:", error);
  return Promise.reject(error.response?.data || error.message);
};

const get = async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
  try {
    const response = await axiosInstance.get<T>(url, config);
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};

const post = async <T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<T> => {
  try {
    const response = await axiosInstance.post<T>(url, data, config);
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};

export { get, post };
