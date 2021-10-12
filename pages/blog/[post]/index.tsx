import { useRouter } from "next/router";

import PostLayout from "layouts/blog";

const Post = () => {
  const router = useRouter();

  return(
  <PostLayout>
    <h1>hello</h1>
  </PostLayout>
  )
};

export default Post;
