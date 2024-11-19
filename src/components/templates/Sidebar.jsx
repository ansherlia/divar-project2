import { useQuery } from "@tanstack/react-query";
import { getAllCategory } from "src/services/getCategory";

import styles from "./Sidebar.module.css";
import { useState } from "react";
function Sidebar({ categories, query, setQuery }) {
  const [category, setCategory] = useState("");
  const categoryHandler = ({}) => {
    const tagName = event.target.tagName;
    const textCategory = event.target.innerText;
    if (tagName !== "H5") {
      return;
    } else {
      setQuery((query) => (query, { textCategory }));
    }
  };
  return (
    <div className={styles.container}>
      <h3>دسته‌ها</h3>
      <ul onClick={categoryHandler} className={styles.categories}>
        {categories?.data.map((cate) => (
          <li key={cate._id}>
            <img src={`${cate.icon}.svg`} alt="" />
            <h5>{cate.name}</h5>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
