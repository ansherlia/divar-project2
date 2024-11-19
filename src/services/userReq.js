import { api } from "configs/api";

const getProfile = () => api.get("user/whoami").then((res) => res || false);

const getPostsUser = () => api.get("post/my");

const getAllPosts = () => api.get("");

export { getProfile, getPostsUser, getAllPosts };
