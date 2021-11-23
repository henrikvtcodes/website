
import BlogLayout from "~/layouts/old/blogpage";
import PostCard from "components/old/postcard"
import Post from "./[post]";

interface BlogProps{
    posts: [
        title: string,
        desc: string,
        imageURL: string,
        postURL: string,
        tags: string[],
    ]
}

const Blog = (props:BlogProps) =>{
    return (
      <BlogLayout>
        <div className=" container mx-auto text-center max-w-4xl ">
            <h1 className=" text-6xl Whitney "> Henrik&apos;s Blog</h1>
            <p className=" text-md "> Welcome to Henrik&apos;s Blog. This is where I post various technical content. I have made posts on such topics as how I built this website, configuring VSCode, and more! </p>
        </div>
        <hr className=" mx-16 " />
        <h2 className=" text-center Whitney text-3xl"> Posts  </h2>
        <div className="container mx-4 flex flex-wrap flex-row" >
            <PostCard title="First Post" desc="First Post Description" imageURL="/images/mountain-sunrise.jpg" postURL="PORGCHAMP" />
        </div>
      </BlogLayout>
    );
}

export default Blog;