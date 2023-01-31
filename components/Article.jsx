import React from "react";

import styles from "../styles/article.module.scss";

const Article = ({ article }) => {
  return (
    <div className={styles.main}>
      <div className={styles.date}>
        <p>{article.date}</p>
      </div>
      <div className={styles.content}>
        <h4>{article.title}</h4>
        <p>{article.description}</p>
      </div>
      <div className={styles.icon} />
    </div>
  );
};

export default Article;
