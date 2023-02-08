import { useEffect } from "react";
import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";
import { animateIn } from "../modules/text";

import styles, {
  animationDuration,
  animationDelayLong,
} from "../styles/intro.module.scss";

import Subscribe from "./Subscribe";
import ReadBy from "./ReadBy";

const Intro = () => {
  useEffect(() => {
    animateIn("line", "header");
  }, []);

  return (
    <div className={styles.main}>
      <motion.div className={styles.location}>
        <p>How Much Do You Make? 📈</p>
      </motion.div>
      <motion.div className={styles.container}>
        <div className={styles.headerContainer}>
          <h3 animate="header">Interviews on money & investing</h3>
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
            <Balancer>Learn strategies, tax hacks, tools, and more.</Balancer>
          </h5>
        </motion.div>

        <Subscribe />
      </motion.div>

      <ReadBy />
    </div>
  );
};

export default Intro;
