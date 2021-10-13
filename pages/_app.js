import "../styles/globals.css";
import Head from "next/head";
import { Provider } from "next-auth/client";

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <Head>
        <link
          href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </Head>
      <div className="container">
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}

export default MyApp;
