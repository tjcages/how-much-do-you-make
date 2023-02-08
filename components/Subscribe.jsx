import { useEffect, useState } from "react";
import validator from "validator";
import { motion } from "framer-motion";
import { animateIn } from "../modules/text";

import styles, {
  animationDuration,
  animationDelayLong,
} from "../styles/subscribe.module.scss";

const Intro = () => {
  const [email, setEmail] = useState("");
  const [notice, setNotice] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async () => {
    setNotice(true);
    if (validator.isEmail(email)) {
      // copy email value
      const subscriptionEmail = email;
      // reset UI
      setError(false);
      setEmail("");
      setTimeout(() => {
        setNotice(false);
      }, 2000);
      // trigger subscription API call
      await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: subscriptionEmail }),
      });
    } else {
      setError(true);
      setTimeout(() => {
        setNotice(false);
      }, 2000);
    }
  };

  useEffect(() => {
    animateIn("line", "header");
  }, []);

  return (
    <div className={styles.main}>
      <motion.div
        className={styles.contact}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: parseFloat(animationDuration.replace("s", "")),
          delay: parseFloat(animationDelayLong.replace("s", "")),
          ease: "easeOut",
        }}
      >
        <input
          value={email}
          placeholder={"Get the newsletter"}
          onChange={(e) => {
            setEmail(e.target.value);
            setNotice(null);
            setError(false);
          }}
        />
        <button onClick={() => handleSubmit()}>→</button>
      </motion.div>
      <div
        className={`${styles.success} ${notice && styles.active} ${
          error && styles.error
        }`}
      >
        {error ? "Not a valid email" : "Success"}
      </div>
    </div>
  );
};

export default Intro;
