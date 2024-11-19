import { useQuery } from "@tanstack/react-query";
import { getAllCategory } from "services/getCategory";
import { deleteCategory } from "src/services/categoryReq";
import { FaTrash } from "react-icons/fa";

import styles from "./CategoryList.module.css";

function CategoryList() {
  const queryKey = ["get-All-Category"];

  const { data, error, isLoading } = useQuery({
    queryKey: queryKey,
    queryFn: getAllCategory,
    // refetchInterval: 3000,
  });

  const deleteHandler = (id) => {
    console.log(id);
    deleteCategory(id);
  };

  //   console.log({ data, error, isLoading });
  return (
    <div className={styles.list}>
      {data?.data.map((i) => (
        <div key={i._id}>
          <img src={`${i.icon}.svg`} />
          <h5>{i.name}</h5>
          <p>slug : {i.slug}</p>
          <button onClick={() => deleteHandler(i._id)}>
            <FaTrash />
          </button>
        </div>
      ))}
    </div>
  );
}

export default CategoryList;
