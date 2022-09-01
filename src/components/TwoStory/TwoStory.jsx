import styles from "./TwoStory.module.scss";
import Card from "../UI/Card/Card";
import { ThemeContext } from "../../store/theme-context";
import { useContext, useState } from "react";
import { CategoryContext } from "../../store/category-context";

const TwoStory = (props) => {
  const theme = useContext(ThemeContext);
  const category = useContext(CategoryContext);
  const color = props.color || "ac1";
  const selectedCategory = props.category || "";
  const [animationEnabled, setAnimationEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  const clickHandler = () => {
    if (theme.value === color) {
      theme.onSetTheme("");
    } else {
      theme.onSetTheme(color);
    }
    if (category.value === selectedCategory) {
      category.onSetCategory("");
    } else {
      category.onSetCategory(selectedCategory);
    }
  };

  return (
    <Card
      className={`${styles.twoStory} ${styles[color]} ${
        props.isEven ? styles.isEven : ""
      } ${animationEnabled ? styles.animationEnabled : ""}`}
      rounded
      onClickHandler={clickHandler}
      style={{
        transform: `
        translateX(${props.position * -122}%) 
        ${hovering ? "scale(1.1)" : ""} 
        `,
      }}
      shared={{
        onMouseEnter: () => {
          setAnimationEnabled(true);
          setHovering(true);
        },
        onFocus:() => {
          setAnimationEnabled(true);
          setHovering(true);
        },
        onMouseLeave: () => {
          setHovering(false);
        },
        onBlur: () => {
          setHovering(false);
        },
        tabIndex: props.tabIndex
      }}
    >
      <div  className={styles.top}>
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
