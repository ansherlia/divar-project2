import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import styles from "./CategoryForm.module.css";
import { postCategory as mutationFn } from "src/services/categoryReq";
function CategoryForm() {
  const [form, setForm] = useState({ name: "", slug: "", icon: "" });
  const queryClient = useQueryClient();
  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const { mutate, data, isLoading, error } = useMutation({
    mutationFn,
  });

  console.log({ data, isLoading, error });

  const submitHandler = (event) => {
    event.preventDefault();
    if (!form.name || !form.slug || !form.icon) return;
    mutate(form, {
      onSuccess: (data) => {
        console.log("data:", data);
        queryClient.invalidateQueries(["get-All-Category"]);
      },
    });
  };
  return (
    <form
      onChange={changeHandler}
      onSubmit={submitHandler}
      className={styles.form}
    >
      <h3>دسته بندی جدید</h3>
      {!!error && <p>مشکلی پیش آمده است.</p>}
      {data?.status === 201 && <p>دسته بندی با موفقیت اضافه شد.</p>}
      <label htmlFor="name">اسم دسته بندی</label>
      <input type="text" name="name" id="name" />

      <label htmlFor="slug"> اسلاگ</label>
      <input type="text" name="slug" id="slug" />

      <label htmlFor="icon"> آیکون </label>
      <input type="text" name="icon" id="icon" />

      <button type="submit" disabled={isLoading}>
        ایجاد
      </button>
    </form>
  );
}

export default CategoryForm;
