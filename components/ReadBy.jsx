import Image from "next/image";
import Link from "next/link";

import styles from "../styles/readby.module.scss";

const Intro = () => {
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

  return (
    <div className={styles.main}>
      <p>Read by leaders at</p>
      <div className={styles.companies}>
        {companies.map((company, index) => (
          <Link key={index} href={company.href} target="_blank">
            <Image
              priority
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
  );
};

export default Intro;
