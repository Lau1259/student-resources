import React, { useContext } from "react";
import { ThemeContext } from "../../../store/theme-context";
import styles from "./Title.module.scss";

const Title = (props) => {
  const theme = useContext(ThemeContext);

  return (
    <div
      className={` 
      ${styles.title}
      ${
        props.themedUnderline
          ? styles[`themedUnderline-${theme.value}`]
          : ""
      } 
      ${props.align ? styles[props.align] : styles.left} 
      ${props.fontWeight ? styles[props.fontWeight] : ""} 
      ${props.textTransform ? styles[props.textTransform] : ""}
      `}
    >
      {/* <span style={{ color: "var(--ac-1)" }}>{category.value}</span> Resources */}
      {React.Children.map(props.children, (child) => {
        if (child.props) {
          return React.cloneElement(child, {
            className: `
            ${child.props.themed ? styles[theme.value] : ""}
            `,
          });
        }
        return child;
      })}
    </div>
  );
};

export default Title;
