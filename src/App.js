import "./styles/global-styles.scss";
import { useContext } from "react";
import { ThemeContext } from "./store/theme-context";
import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";
import CategoryCardSlider from "./components/CategoryCardSlider/CategoryCardSlider";
import Resources from "./components/Resources/Resources";

function App() {
  const theme = useContext(ThemeContext);

  return (
    <div className="App">
      <Header theme={theme.value} />
      <CategoryCardSlider />
      <Resources />
      <Footer />
    </div>
  );
}

export default App;
