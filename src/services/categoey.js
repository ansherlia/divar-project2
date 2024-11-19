import {api } from "configs/api"

const postCategory = (data) => api.post("category", data);

export { postCategory };
