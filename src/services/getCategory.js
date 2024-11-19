import { api } from "configs/api";

const getAllCategory = () => api.get("category");

export { getAllCategory };
