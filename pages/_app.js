import "../styles/globals.css";
import { WeitterProvider } from "../context/WeitterContext";

function MyApp({ Component, pageProps }) {
  return (
    <WeitterProvider>
      <Component {...pageProps} />;
    </WeitterProvider>
  );
}

export default MyApp;
