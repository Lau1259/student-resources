import React from "react";
import { useState } from "react";

export const CategoryContextProvider = (props) => {
  const [category, setCategory] = useState(localStorage.getItem('category'));

  const setCategoryHandler = (newCategory) =>{
    if(newCategory === null){
      localStorage.removeItem('category')  
    }
    setCategory(newCategory);
    localStorage.setItem('category',newCategory)
  }

  return (
    <CategoryContext.Provider
      value={{ value: category, onSetCategory: setCategoryHandler }}
    >
      {props.children}
    </CategoryContext.Provider>
  );
};

export const CategoryContext = React.createContext({
  category: "",
  onSetCategory: (choice) => {},
});
