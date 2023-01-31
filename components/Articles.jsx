import React from "react";

import styles from "../styles/articles.module.scss";

import data from "../data";

import Article from "./Article";

const Articles = () => {
  return (
    <div className={styles.main}>
      <div className={styles.cords}>
        <div className={styles.cord} />
        <div className={styles.cord} />
        <div className={styles.cord} />
        <div className={styles.cord} />
      </div>
      <div className={styles.content}>
        {data.map((article, index) => {
          return <Article key={index} article={article} />;
        })}
      </div>
    </div>
  );
};

export default Articles;
