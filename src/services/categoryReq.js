import { api } from "configs/api";

const postCategory = (data) => api.post("category", data);

const deleteCategory = (id) => api.delete(`category/${id}`);

export { postCategory, deleteCategory };
