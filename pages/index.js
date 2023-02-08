import { useEffect, useState } from "react";
import useMediaQuery, { mobileBreakpoint } from "../modules/agents";
import styles from "../styles/index.module.scss";

import Meta from "../components/Meta";
import Intro from "../components/Intro";
import Notebook from "../components/Notebook";

export default function Home() {
  const mobile = useMediaQuery(mobileBreakpoint);
  const [cards, setCards] = useState(null);

  useEffect(() => {
    const getCards = async () => {
      // send phone to backend
      const cards = await fetch("/api/main", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await cards.json();
      if (data.json.status == "success") {
        // show cards
        setCards(data.json.data);
      } else {
        // failed to get cards, don't show
        setCards(null);
      }
    };

    if (cards == null) getCards();
  }, [cards]);

  return (
    <Meta>
      {mobile == null ? null : (
        <main className={styles.main}>
          <Intro mobile={mobile} />
          {!mobile && <Notebook cards={cards} />}
        </main>
      )}
    </Meta>
  );
}
