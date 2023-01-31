import React from "react";
import { motion } from "framer-motion";
import styles, {
  animationDurationLong,
  animationDelay,
} from "../styles/letter.module.scss";

const Letter = () => {
  return (
    <div className={styles.main}>
      <motion.div
        className={styles.letterContainer}
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: "-10%" }}
        transition={{
          duration: parseFloat(animationDurationLong.replace("s", "")),
          delay: parseFloat(animationDelay.replace("s", "")),
          ease: "easeOut",
        }}
      >
        <div className={styles.letterHeader}>
          <strong>From: Andrew Rea</strong>
          <strong>To: Rumple Stiltskin</strong>
        </div>
        <h5>How Much Do You Make?</h5>
        <div className={styles.letterBody}>
          <p>
            We’re making a newsletter focused on high earning young killers.
          </p>
          <p>
            We’ll interview them and ask — How much do you make, net worth,
            income streams, investment strategy, investment/finance stack,
            personal philosophy on your money, etc.
          </p>
          <p>
            We’re launching soon. In progress on the first few interviews right
            now
          </p>
          <p>It’s going to be called — “How much do you make?”</p>
          <p>Would you be game to help us with landing page next week?</p>
          <p>Thanks,</p>
          <p>Andrew</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Letter;
