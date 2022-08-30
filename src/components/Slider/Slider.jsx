import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { ThemeContext } from "../../store/theme-context";
import styles from "./Slider.module.scss";

const Slider = (props) => {
  const theme = useContext(ThemeContext);
  const [position, setPosition] = useState(0);
  const total = props.children ? props.children.length : 3;
  const max = props.columns ? total - props.columns : total - 3;
  const width = props.columns ? 100 / props.columns : 100 / 3;

  const onSlide = (pos) => {
    if (pos < 0) return;
    if (pos > max) return;
    setPosition(pos);
  };

  return (
    <div className={styles.slider}>
      <div className={styles.slideList}>
        {React.Children.map(props.children, (child, index) =>
          React.cloneElement(child, {
            position,
            width,
            isEven: index % 2 === 0,
          })
        ).sort()}
      </div>
      <button
        className={`${styles[theme.value]} ${styles.btn} ${styles.previousBtn}`}
        onClick={() => onSlide(position - 1)}
        disabled={position === 0}
      >
        &lArr;
      </button>
      <button
        className={`${styles[theme.value]} ${styles.btn} ${styles.nextBtn}`}
        onClick={() => onSlide(position + 1)}
        disabled={position >= max}
      >
        &rArr;
      </button>
      total: {total}, max: {max}, position: {position}, theme: {theme.value}
    </div>
  );
};

export default Slider;
