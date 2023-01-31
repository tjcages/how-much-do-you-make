import styles from "../styles/notebook.module.scss";

import { Cards } from "./Cards";

const Notebook = () => {
  return (
    <div className={styles.grid}>
      <Cards col={2} row={2} />
    </div>
  );
};

export default Notebook;