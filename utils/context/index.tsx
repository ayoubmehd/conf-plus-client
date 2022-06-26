import React, { Context, Dispatch, SetStateAction } from "react";

const createAuthContext = <T,>(): Context<
  [T, Dispatch<SetStateAction<T>>] | []
> => {
  return React.createContext<[T, Dispatch<SetStateAction<T>>] | []>([]);
};

export const AuthContext = createAuthContext<{
  _id: string;
  email: string;
  role: string;
}>();
