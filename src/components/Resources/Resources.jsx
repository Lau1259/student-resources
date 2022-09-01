import { useContext } from "react";
import { CategoryContext } from "../../store/category-context";
import Container from "../../hoc/Container/Container";
import Slider from "../../hoc/Slider/Slider";
import Title from "../UI/Title/Title";
import { useState } from "react";
import CategoryCircleList from "../CategoryCircleList/CategoryCircleList";
import ResourceList from "../ResourceList/ResourceList";
// import styles from './Resources.module.scss';

const Resources = (props) => {
  const category = useContext(CategoryContext);
  const [filter, setFilter] = useState("");

  const onSetFilterHandler = (label) => {
    setFilter(label);
  };

  return (
    <Container>
      <Title align={"center"} fontWeight={"light"} textTransform={"uppercase"}>
        <span themed>{category.value} </span>
        <span>{filter !== "" ? filter : "Resources"}</span>
      </Title>
      <Slider
        style={{ justifyContent: "space-around" }}
        shared={{ active: filter, onClick: onSetFilterHandler }}
      >
        <CategoryCircleList
          items={[
            {
              src: "https://unsplash.com/photos/HONJP8DyiSM/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8dGVjaHxlbnwwfDJ8fGJsYWNrfDE2NjE3NDY0NDk&force=true&w=640",
              label: "Tutorials",
            },
            {
              label: "Books",
            },
            {
              src: "https://unsplash.com/photos/HONJP8DyiSM/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8dGVjaHxlbnwwfDJ8fGJsYWNrfDE2NjE3NDY0NDk&force=true&w=640",
              label: "Groups",
            },
            {
              src: "https://unsplash.com/photos/HONJP8DyiSM/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8dGVjaHxlbnwwfDJ8fGJsYWNrfDE2NjE3NDY0NDk&force=true&w=640",
              label: "Projects",
            },
          ]}
        />
      </Slider>
      <ResourceList />
    </Container>
  );
};

export default Resources;
