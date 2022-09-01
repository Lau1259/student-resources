import { useContext } from "react";
import { ThemeContext } from "../../store/theme-context";
import styles from "./CategoryCircle.module.scss";

const CategoryCircle = (props) => {
  const theme = useContext(ThemeContext);

  return (
    <div
      className={`${styles.categoryCircle}
    ${props.active === props.label ? styles.active : ""}
    ${styles[theme.value]}`}
      onClick={(e) => {
        if (props.label === props.active) {return props.onClick("")};
        props.onClick(props.label);
      }}
    >
      <div className={styles.iconContainer}>
        <div
          className={`${styles.icon}`}
          style={{ backgroundImage: `${props.src ? `url(${props.src})` : ""}` }}
        ></div>
      </div>
      <p className={styles.label}>{props.label}</p>
    </div>
  );
};

export default CategoryCircle;
