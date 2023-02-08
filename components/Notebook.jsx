import styles from "../styles/notebook.module.scss";

import Cards from "./Cards";

const Notebook = ({ cards }) => {
  return (
    <div className={styles.grid}>
      {cards && <Cards cards={cards} col={2} row={2} />}
    </div>
  );
};

export default Notebook;
