// import styles from "./TwoStoryList.module.scss";
import TwoStory from "../TwoStory/TwoStory";

const TwoStoryList = (props) => {
  return props.items.map((item, index) => (
    <TwoStory
      key={`TwoStory-${index}`}
      {...item}
      position={props.position}
      isEven={index % 2 === 0}
      shared={{ ...props.shared }}
      tabIndex={0}
    />
  ));
};

export default TwoStoryList;
