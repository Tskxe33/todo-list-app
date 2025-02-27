import { AxiosRequestConfig, AxiosResponse } from "axios";
import instance from "./axios-instance";

export type ApiServiceType = {
  get<Type>(
    url: string,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<Type>>;
  getById<Type>(url: string, id: number): Promise<AxiosResponse<Type>>;
  put(
    url: string,
    id: number,
    data: Record<string, unknown>
  ): Promise<AxiosResponse>;
  patch(
    url: string,
    data: Record<string, unknown>,
    id?: number | string
  ): Promise<AxiosResponse>;
  post(url: string, data?: Record<string, unknown>): Promise<AxiosResponse>;
  delete<Type>(url: string, id: number | string): Promise<AxiosResponse<Type>>;
};

const ApiService: ApiServiceType = {
  get<Type>(
    url: string,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<Type>> {
    return instance.get(url, options);
  },

  getById<Type>(url: string, id: number): Promise<AxiosResponse<Type>> {
    return instance.get(url + `/${id}`);
  },

  put(
    url: string,
    id: number,
    data: Record<string, unknown>
  ): Promise<AxiosResponse> {
    return instance.put(url + `/${id}`, data);
  },
  patch(
    url: string,
    data: Record<string, unknown>,
    id?: number | string
  ): Promise<AxiosResponse> {
    if (id) return instance.patch(url + `/${id}`, data);
    return instance.patch(url, data);
  },

  post(url: string, data?: Record<string, unknown>): Promise<AxiosResponse> {
    return instance.post(url, data);
  },

  delete(url: string, id: number): Promise<AxiosResponse> {
    return instance.delete(url + `/${id}`);
  },
};

export default ApiService;
