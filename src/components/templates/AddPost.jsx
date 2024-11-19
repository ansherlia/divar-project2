import { useQuery } from "@tanstack/react-query";
import { getAllCategory } from "src/services/getCategory";

import styles from "./AddPost.module.css";
import { useState } from "react";
import axios from "axios";
import { getCookie } from "src/utils/cookie";
import toast from "react-hot-toast";
function AddPost() {
  const [form, setForm] = useState({
    title: "",
    content: "",
    price: null,
    images: null,
    city: "",
    category: "",
  });
  const queryKey = ["get-All-Category"];

  const { data } = useQuery({
    queryKey: queryKey,
    queryFn: getAllCategory,
  });

  

  const changeHandler = (event) => {
    const name = event.target.name;
    if (name !== "images") {
      setForm({ ...form, [name]: event.target.value });
    } else {
      setForm({ ...form, [name]: event.target.files[0] });
    }
  };

  const addHandler = (event) => {
    event.preventDefault();
    const formData = new FormData();
    for (let i in form) {
      formData.append(i, form[i]);
    }
    
    const accessToken = getCookie("accessToken");

    axios
      .post(`${import.meta.env.VITE_BASE_URL}post/create`, formData, {
        headers: {
          //"Content-Type": "multipart/form-data", new Content type for image data//
          "Content-Type": "multipart/form-data",
          Authorization: `bearer ${accessToken}`,
        },
      })
      .then((res) => toast.success(res.data.message))
      .catch((error) => toast.error("مشکلی پیش آمده است."));
  };
  return (
    <form className={styles.form} onChange={changeHandler}>
      <h3>افزودن آگهی</h3>
      <label htmlFor="title">عنوان</label>
      <input type="text" name="title" id="title" />
      <label htmlFor="content">توضیحات</label>
      <textarea name="content" id="content" />
      <label htmlFor="price">مبلغ</label>
      <input type="number" name="price" id="price" />
      <label htmlFor="city">شهر</label>
      <input type="text" name="city" id="city" />
      <label htmlFor="category">دسته بندی</label>
      <select name="category" id="category">
        {data?.data.map((i) => (
          <option key={i._id} value={i._id}>
            {i.name}
          </option>
        ))}
      </select>
      <label htmlFor="images">عکس</label>
      <input type="file" name="images" id="images" />
      <button onClick={addHandler}>ایجاد</button>
    </form>
  );
}

export default AddPost;
//افزودن آگهی عنوان توضیحات مبلغ شهر دسته بندی عکس
