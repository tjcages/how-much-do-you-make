import { Provider } from "react-wrap-balancer";
import "../styles/globals.css";
import styles from "../styles/_main.module.scss";

import untitledSerif from "../public/fonts/serif";
import untitledSans from "../public/fonts/sans";

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <main className={`${untitledSans.className} ${untitledSerif.className} ${styles.main}`}>
        <Component {...pageProps} />
      </main>
    </Provider>
  );
}

export default MyApp;
