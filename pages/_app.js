import { Provider } from "react-wrap-balancer";
import "../styles/globals.css";

import untitledSerif from "../public/fonts/serif";
import untitledSans from "../public/fonts/sans";

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <main className={`${untitledSans.className} ${untitledSerif.className}`}>
        <Component {...pageProps} />
      </main>
    </Provider>
  );
}

export default MyApp;
