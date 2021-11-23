import { useRouter } from "next/router";

import StdPostLayout from "~/layouts/old/post";

const Post = (props) => {
  const router = useRouter();

  const { post } = router.query
  return(
  <StdPostLayout>
    <h1 className="text-6xl">hello</h1>
    <h1 className="text-4xl "> Query Param: <span className="kbd kbd-md">{post}</span> </h1>
  </StdPostLayout>
  )
};

export default Post;