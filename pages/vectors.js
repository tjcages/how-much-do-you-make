import styles from "../styles/_main.module.scss";

import Meta from "../components/Meta";
import Vectors from "../components/Vectors";
import Intro from "../components/Intro";
import Letter from "../components/Letter";
import Articles from "../components/Articles";
import Footer from "../components/Footer"

export default function Home() {
  return (
    <Meta>
      <main className={styles.main}>
        <Vectors />
        <Intro />
        <Letter />
        <Articles />
        <Footer />
      </main>
    </Meta>
  );
}
