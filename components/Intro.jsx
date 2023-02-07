import { useEffect, useState } from "react";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
import { motion, useScroll, useTransform } from "framer-motion";
import { animateIn, animateOut } from "../modules/text";

import styles, {
  animationDuration,
  animationDelayLong,
} from "../styles/intro.module.scss";

import Notebook from "../components/Notebook";

const Intro = () => {
  const copy = [
    "engineers",
    "designers",
    "entrepreneurs",
    "investors",
    "creatives",
    "writers",
  ];

  const [value, setValue] = useState("");

  useEffect(() => {
    animateIn("line", "header");
  });

  return (
    <div className={styles.main}>
      <motion.div className={styles.location}>
        <p>How Much Do You Make? 📈</p>
      </motion.div>
      <motion.div className={styles.container}>
        <div className={styles.headerContainer}>
          <h3 animate="header">
            The investing
            <br />& financial strategies
            <br />
            of top earners
          </h3>
        </div>
        <motion.div
          className={styles.textContainer}
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: "0%" }}
          transition={{
            duration: parseFloat(animationDuration.replace("s", "")),
            delay: parseFloat(animationDelayLong.replace("s", "")),
            ease: "easeOut",
          }}
        >
          <h5>
            <Balancer>
              Learn strategies, tax hacks, tools, and more from engineers.
            </Balancer>
          </h5>
        </motion.div>
        <motion.div
          className={styles.contactContainer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: parseFloat(animationDuration.replace("s", "")),
            delay: parseFloat(animationDelayLong.replace("s", "")),
            ease: "easeOut",
          }}
        >
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={"Get the newsletter"}
          />
          <button>→</button>
        </motion.div>

      </motion.div>
        <div className={styles.readby}>
          <p>Read by leaders at</p>
          <div className={styles.companies}>
            <Image
              src="/companies/google.png"
              alt="google"
              width={64}
              height={64}
              style={{ width: "100%", height: "auto" }}
            />
            <Image
              src="/companies/robinhood.png"
              alt="robinhood"
              width={68}
              height={68}
              style={{ width: "100%", height: "auto" }}
            />
            <Image
              src="/companies/amazon.png"
              alt="amazon"
              width={64}
              height={64}
              style={{ width: "100%", height: "auto" }}
            />
            <Image
              src="/companies/carta.png"
              alt="carta"
              width={64}
              height={64}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>

      <div className={styles.content}>
        <Notebook />
      </div>
    </div>
  );
};

export default Intro;
