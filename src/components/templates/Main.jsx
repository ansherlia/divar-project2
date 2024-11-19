import { useQuery } from "@tanstack/react-query";
import { getAllPosts } from "src/services/userReq";
import Card from "./Card";

import styles from "./main.module.css";

function Main({ posts }) {
  return (
    <div className={styles.container}>
      {posts?.data.posts.map((post) => (
        <Card key={post._id} data={post} />
      ))}
    </div>
  );
}

export default Main;
