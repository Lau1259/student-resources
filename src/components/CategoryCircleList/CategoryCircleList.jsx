// import styles from './CategoryCircleList.module.scss';
import CategoryCircle from "../CategoryCircle/CategoryCircle";

const CategoryCircleList = (props) => {
  return props.items.map((item, index) => (
    <CategoryCircle
      key={`TwoStory-${index}`}
      {...item}
      { ...props.shared }
      tabIndex={0}
    />
  ));
};

export default CategoryCircleList;
