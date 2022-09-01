import styles from "./Header.module.scss";
import Logo from "../../Logo/Logo";
import { useContext } from "react";
import { ThemeContext } from "../../../store/theme-context";

const Header = (props) => {
  const theme = useContext(ThemeContext);
  return (
    <header className={styles.header}>
      <div className={styles.icon}>
        <Logo secondary={theme.value} shadow={true} />
      </div>
    </header>
  );
};

export default Header;
