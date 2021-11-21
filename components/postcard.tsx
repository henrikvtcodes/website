import Image from "next/image";
import Link from "next/link"


interface CardProps {
  title: string,
  desc: string,
  imageURL: string,
  postURL: string,
  tags?: string,
}



const PostCard = (props:CardProps,) =>{
  return (
    <Link href={`/blog/${props.postURL}`}>
      <div className="card bordered max-w-xl mx-8 min-w-xl">
        <figure className=" z-10">
          <Image src={props.imageURL} layout="fill" />
        </figure>
        <div className="card-body z-20 mt-48">
          <h2 className="card-title"> {props.title} </h2>
          <p>{props.desc}</p>
          <div className="card-actions Inter justify-center"></div>
        </div>
      </div>
    </Link>
  ); 
}

export default PostCard;