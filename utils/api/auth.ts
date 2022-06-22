import { AxiosResponse } from "axios";
import { http } from "./config";

export interface Login {
  email: string;
  password: string;
}

export const login = (login: Login) => {
  return http.post("/auth/login", login);
};
