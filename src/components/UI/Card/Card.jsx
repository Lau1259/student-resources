import React from "react";
import styles from "./Card.module.scss";

const Card = (props) => {
  return (
    <div
      className={`${styles.card} ${props.rounded && styles.rounded} ${
        styles.slide} ${props.className}`}
      draggable={props.draggable}
      onClick={props.onClickHandler}
      style={{
        transform: ` translateX(${props.position * -110}%)`,
        ...props.style,
      }}
    >
      {props.children}
    </div>
  );
};

export default Card;
