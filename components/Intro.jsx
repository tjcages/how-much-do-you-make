import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { motion, useScroll, useTransform } from "framer-motion";
import { animateIn, animateOut } from "../modules/text";

import styles, {
  animationDuration,
  animationDelayLong,
} from "../styles/intro.module.scss";

import Notebook from "../components/Notebook";

const Intro = ({ mobile }) => {
  console.log(mobile);
  const companies = [
    {
      name: "Google",
      src: "/companies/google.png",
      href: "https://www.google.com/",
      size: 64,
    },
    {
      name: "Robinhood",
      src: "/companies/robinhood.png",
      href: "https://www.robinhood.com/",
      size: 66,
    },
    {
      name: "Amazon",
      src: "/companies/amazon.png",
      href: "https://www.amazon.com/",
      size: 64,
    },
    {
      name: "Carta",
      src: "/companies/carta.png",
      href: "https://www.carta.com/",
      size: 64,
    },
  ];

  const [value, setValue] = useState("");

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
          <h3 animate="header">
            Interviews with top earners on money<br />& investing
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
            <Balancer>Learn strategies, tax hacks, tools, and more.</Balancer>
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
          {companies.map((company, index) => (
            <Link key={index} href={company.href} target="_blank">
              <Image
                src={company.src}
                alt={company.name}
                width={company.size}
                height={company.size}
                style={{ width: "100%", height: "auto" }}
              />
            </Link>
          ))}
        </div>
      </div>

      {!mobile && (
        <div className={styles.content}>
          <Notebook />
        </div>
      )}
    </div>
  );
};

export default Intro;
