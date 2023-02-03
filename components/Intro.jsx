import React, { useEffect, useState } from "react";
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
        <p>New York, NY</p>
      </motion.div>
      <motion.div className={styles.container}>
        <div className={styles.headerContainer}>
          <>
            <h3 animate="header">
              The financial
              <br />& investment strategies of
              <br />
              top earners
            </h3>
          </>
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
              An inside look at the personal finances of young professionals.
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

      <div className={styles.content}>
        <Notebook />
      </div>
    </div>
  );
};

export default Intro;
