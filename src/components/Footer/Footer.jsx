import Logo from "../Logo/Logo";
import styles from "./Footer.module.scss";
import { useContext } from "react";
import { ThemeContext } from "../../store/theme-context";

const Footer = (props) => {
  const theme = useContext(ThemeContext);
  console.log('footer theme: ' + theme);
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
