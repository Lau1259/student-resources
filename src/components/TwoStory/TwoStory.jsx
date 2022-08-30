import styles from "./TwoStory.module.scss";
import Card from "../UI/Card/Card";
import { ThemeContext } from "../../store/theme-context";
import { useContext } from "react";

const TwoStory = (props) => {
  const theme = useContext(ThemeContext);
  const color = props.color || "ac1";

  return (
    <Card
      className={`${styles.twoStory} ${styles[color]} ${
        props.isEven ? styles.isEven : ""
      }`}
      rounded
      onClickHandler={
        theme.value === color
          ? () => theme.onSetTheme("")
          : () => theme.onSetTheme(color)
      }
      style={{ transform: `translateX(${props.position * -113}%)` }}
    >
      <div className={styles.top}>
        <p className={styles.title}>{props.title}</p>
      </div>
      <div
        className={`${styles.bottom}`}
        style={props.src ? { backgroundImage: `url(${props.src})` } : null}
      />
    </Card>
  );
};

export default TwoStory;
