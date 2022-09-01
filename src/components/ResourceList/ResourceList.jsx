// import Card from "../UI/Card/Card";
import { useContext } from "react";
import { ThemeContext } from "../../store/theme-context";
import styles from "./ResourceList.module.scss";
// Make the following generic components
// generic Link tag?
// Generic list component

const ResourceList = (props) => {
  const theme = useContext(ThemeContext);

  return (
    <ul className={styles.list}>
      <li className={`${styles.listItem} ${styles[theme.value]}`}>
        <header>
          <p>O'Reilly</p>
          <button type="button">+</button>
        </header>
        <div className={styles.moreInformation}>
          <p>
            O'Reilly provides free high quality video tutorials for current
            students.
          </p>
          <a
            className={`${styles.link}`}
            href="https://learning.oreilly.com/home/"
            target={"_blank"}
          >
            View Website
          </a>
        </div>
      </li>
      <li className={styles.listItem}>Linked In Learning</li>
      <li className={styles.listItem}>Code Wars</li>
    </ul>
  );
};

export default ResourceList;
