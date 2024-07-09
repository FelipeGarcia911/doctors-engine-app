import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const BASE_URL = `${process.env.REACT_APP_API_URL}/api/`;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const handleResponse = (response: AxiosResponse) => response.data;

const handleError = (error: any) => {
  if (axios.isAxiosError(error)) {
    console.error(`HTTP Error: ${error.response?.status} - ${error.message}`);
    throw error;
  } else {
    console.error("Unexpected Error:", error);
    throw error;
  }
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
