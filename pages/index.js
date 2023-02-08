import styles from "../styles/_main.module.scss";
import useMediaQuery, { mobileBreakpoint } from "../modules/agents";

import Meta from "../components/Meta";

import Intro from "../components/Intro";

export default function Home() {
  const mobile = useMediaQuery(mobileBreakpoint);

  return (
    <Meta>
      {mobile == null ? null : (
        <main className={styles.main}>
          <Intro mobile={mobile} />
        </main>
      )}
    </Meta>
  );
}
