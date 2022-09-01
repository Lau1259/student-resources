import Container from "../../hoc/Container/Container";
import Slider from "../../hoc/Slider/Slider";
import TwoStoryList from "../TwoStoryList/TwoStoryList";

const CategorySlider = (props) => {
  return (
    <Container>
        <Slider canSlide>
          <TwoStoryList
            items={[
              {
                title: "Business",
                src: "https://unsplash.com/photos/HONJP8DyiSM/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8dGVjaHxlbnwwfDJ8fGJsYWNrfDE2NjE3NDY0NDk&force=true&w=640",
                color: "ac3",
                category: "Business",
              },
              {
                title: "Technology",
                src: "https://unsplash.com/photos/HONJP8DyiSM/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8dGVjaHxlbnwwfDJ8fGJsYWNrfDE2NjE3NDY0NDk&force=true&w=640",
                color: "ac1",
                category: "Technology",
              },
              {
                title: "Communication",
                src: "https://unsplash.com/photos/HONJP8DyiSM/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8dGVjaHxlbnwwfDJ8fGJsYWNrfDE2NjE3NDY0NDk&force=true&w=640",
                color: "ac2",
                category: "Communication",
              },
              {
                title: "Family",
                src: "https://unsplash.com/photos/HONJP8DyiSM/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8dGVjaHxlbnwwfDJ8fGJsYWNrfDE2NjE3NDY0NDk&force=true&w=640",
                color: "ac4",
                category: "Family",
              },
              {
                title: "Health",
                src: "https://unsplash.com/photos/HONJP8DyiSM/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8dGVjaHxlbnwwfDJ8fGJsYWNrfDE2NjE3NDY0NDk&force=true&w=640",
                color: "ac5",
                category: "Health",
              },
            ]}
          />
        </Slider>
      </Container>
  )
};

export default CategorySlider;