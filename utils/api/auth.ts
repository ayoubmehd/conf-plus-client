import { AxiosResponse } from "axios";
import { http } from "./config";

export interface Login {
  email: string;
  password: string;
}

export const login = <T>(login: Login) => {
  return http.post<T>("/auth/login", login);
};
