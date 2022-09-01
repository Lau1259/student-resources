import { useContext } from "react";
import { ThemeContext } from "../../../store/theme-context";
import styles from "./Footer.module.scss";
import Logo from "../../Logo/Logo";

const Footer = (props) => {
  const theme = useContext(ThemeContext);
  return (
    <footer className={styles.footer}>
      <div className={styles.logoContainer}>
        <Logo className={styles.logo} theme={"light"} secondary={theme} />
      </div>
      <div className={styles.info}>
        <p>&copy; 2022</p>
        <p>Lautaro Cuevas</p>
      </div>
    </footer>
  );
};

export default Footer;
