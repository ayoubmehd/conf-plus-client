import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";

import "react-toastify/dist/ReactToastify.css";

const aueryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={aueryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
