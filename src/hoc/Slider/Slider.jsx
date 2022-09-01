import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { ThemeContext } from "../../store/theme-context";
import styles from "./Slider.module.scss";

const Slider = (props) => {
  const theme = useContext(ThemeContext);
  const [position, setPosition] = useState(0);
  let total = 0;
  let max;
  let width;

  const onSlide = (pos) => {
    if (pos < 0) return;
    if (pos > max) return;
    setPosition(pos);
  };

  const navigation = (
    <>
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
    </>
  );

  return (
    <div className={styles.slider}>
      <div className={styles.slideList} style={props.style}>
        {React.Children.map(props.children, (child, index) => {
          total += child.props.items ? child.props.items.length : 0;
          max = props.columns ? total - props.columns : total - 1;
          width = props.columns ? 100 / props.columns : 100 / 3;
          return React.cloneElement(child, {
            position,
            width,
            isEven: index % 2 === 0,
            tabIndex: 0,
            shared: props.shared,
          });
        })}
      </div>
      {props.canSlide && navigation}
    </div>
  );
};

export default Slider;
