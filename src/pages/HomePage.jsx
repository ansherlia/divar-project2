import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Loader from "src/components/modules/Loader";
import Main from "src/components/templates/Main";
import Sidebar from "src/components/templates/Sidebar";
import { getAllCategory } from "src/services/getCategory";
import { getAllPosts } from "src/services/userReq";

function HomePage() {
  const [query, setQuery] = useState({});
  const queryKey = ["get-All-Category"];
  const { data: categories, error } = useQuery({
    queryKey,
    queryFn: getAllCategory,
  });
  const queryKey1 = ["get-all-posts"];
  const { data: posts, isLoading } = useQuery({
    queryKey1,
    queryFn: getAllPosts,
  });
  console.log(query);
  console.log(posts);
  const style = { display: "flex" };
  return (
    <div style={style}>
      {!categories && !posts ? (
        <Loader />
      ) : (
        <>
          <Sidebar categories={categories} query={query} setQuery={setQuery} />
          <Main posts={posts} />
        </>
      )}
    </div>
  );
}

export default HomePage;
