import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactElement, ReactNode, useState } from "react";
import { AuthContext } from "../utils/context";

import DefaultLayout from "../components/Layouts/Default";

import "react-toastify/dist/ReactToastify.css";
import { NextPage } from "next/types";

const queryClient = new QueryClient();

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout || ((page) => <DefaultLayout>{page}</DefaultLayout>);

  const [user, setUser] = useState({
    _id: "",
    email: "",
    role: "",
  });

  return getLayout(
    <AuthContext.Provider value={[user, setUser]}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </AuthContext.Provider>
  );
}

export default MyApp;
