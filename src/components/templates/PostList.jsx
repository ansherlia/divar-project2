import { useQuery } from "@tanstack/react-query";
import { getPostsUser } from "src/services/userReq";
import Loader from "../modules/Loader";
import { e2p, sp } from "src/utils/numbers";
import styles from "./PostList.module.css";
function PostList() {
  const baseURL = import.meta.env.VITE_BASE_URL;
  const { data, isLoading } = useQuery({
    queryKey: ["get-posts-user"],
    queryFn: getPostsUser,
  });
  console.log({ data });
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h3 className={styles.list}>آگهی های شما</h3>
          {data.data.posts.map((post) => (
            //Back end format needed to BASEURL for show the image//
            <div key={post._id} className={styles.container}>
              <img src={`${baseURL}${post.images[0]}`} />
              <div>
                <p>{post.options.title}</p>
                <span>{post.options.content}</span>
              </div>
              <div>
                <p>{new Date(post.createdAt).toLocaleDateString("fa")}</p>
                <span>{e2p(sp(post.amount))}</span>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default PostList;
