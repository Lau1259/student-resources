import "./styles/global-styles.scss";
import { useContext } from "react";
import { ThemeContext } from "./store/theme-context";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Slider from "./components/Slider/Slider";
import TwoStory from "./components/TwoStory/TwoStory";

function App() {
  const theme = useContext(ThemeContext);

  return (
    <div className="App">
      <Header theme={theme.value} />
      <Slider>
      <TwoStory
          title={"Business"}
          src={
            "https://unsplash.com/photos/HONJP8DyiSM/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8dGVjaHxlbnwwfDJ8fGJsYWNrfDE2NjE3NDY0NDk&force=true&w=640"
          }
          color={"ac3"}
        />
        <TwoStory
          title={"Technology"}
          src={
            "https://unsplash.com/photos/HONJP8DyiSM/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8dGVjaHxlbnwwfDJ8fGJsYWNrfDE2NjE3NDY0NDk&force=true&w=640"
          }
          color={"ac1"}
        />
        <TwoStory
          title={"Communication"}
          src={
            "https://unsplash.com/photos/HONJP8DyiSM/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8dGVjaHxlbnwwfDJ8fGJsYWNrfDE2NjE3NDY0NDk&force=true&w=640"
          }
          color={"ac2"}
        />
        <TwoStory
          title={"Family"}
          src={
            "https://unsplash.com/photos/HONJP8DyiSM/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8dGVjaHxlbnwwfDJ8fGJsYWNrfDE2NjE3NDY0NDk&force=true&w=640"
          }
          color={"ac4"}
        />
        <TwoStory
          title={"Health"}
          src={
            "https://unsplash.com/photos/HONJP8DyiSM/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8dGVjaHxlbnwwfDJ8fGJsYWNrfDE2NjE3NDY0NDk&force=true&w=640"
          }
          color={"ac5"}
        /><TwoStory
        title={"Business"}
        src={
          "https://unsplash.com/photos/HONJP8DyiSM/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8dGVjaHxlbnwwfDJ8fGJsYWNrfDE2NjE3NDY0NDk&force=true&w=640"
        }
        color={"ac3"}
      />
      <TwoStory
        title={"Technology"}
        src={
          "https://unsplash.com/photos/HONJP8DyiSM/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8dGVjaHxlbnwwfDJ8fGJsYWNrfDE2NjE3NDY0NDk&force=true&w=640"
        }
        color={"ac1"}
      />
      <TwoStory
        title={"Communication"}
        src={
          "https://unsplash.com/photos/HONJP8DyiSM/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8dGVjaHxlbnwwfDJ8fGJsYWNrfDE2NjE3NDY0NDk&force=true&w=640"
        }
        color={"ac2"}
      />
      <TwoStory
        title={"Family"}
        src={
          "https://unsplash.com/photos/HONJP8DyiSM/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8dGVjaHxlbnwwfDJ8fGJsYWNrfDE2NjE3NDY0NDk&force=true&w=640"
        }
        color={"ac4"}
      />
      <TwoStory
        title={"Health"}
        src={
          "https://unsplash.com/photos/HONJP8DyiSM/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8dGVjaHxlbnwwfDJ8fGJsYWNrfDE2NjE3NDY0NDk&force=true&w=640"
        }
        color={"ac5"}
      /><TwoStory
      title={"Business"}
      src={
        "https://unsplash.com/photos/HONJP8DyiSM/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8dGVjaHxlbnwwfDJ8fGJsYWNrfDE2NjE3NDY0NDk&force=true&w=640"
      }
      color={"ac3"}
    />
    <TwoStory
      title={"Technology"}
      src={
        "https://unsplash.com/photos/HONJP8DyiSM/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8dGVjaHxlbnwwfDJ8fGJsYWNrfDE2NjE3NDY0NDk&force=true&w=640"
      }
      color={"ac1"}
    />
    <TwoStory
      title={"Communication"}
      src={
        "https://unsplash.com/photos/HONJP8DyiSM/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8dGVjaHxlbnwwfDJ8fGJsYWNrfDE2NjE3NDY0NDk&force=true&w=640"
      }
      color={"ac2"}
    />
    <TwoStory
      title={"Family"}
      src={
        "https://unsplash.com/photos/HONJP8DyiSM/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8dGVjaHxlbnwwfDJ8fGJsYWNrfDE2NjE3NDY0NDk&force=true&w=640"
      }
      color={"ac4"}
    />
    <TwoStory
      title={"Health"}
      src={
        "https://unsplash.com/photos/HONJP8DyiSM/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8dGVjaHxlbnwwfDJ8fGJsYWNrfDE2NjE3NDY0NDk&force=true&w=640"
      }
      color={"ac5"}
    />
        
        
      </Slider>
      <Footer />
    </div>
  );
}

export default App;
