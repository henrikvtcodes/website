import Head from 'next/head'
import { useRouter } from "next/router";


const meta = {
  title: "henrik's shitty website",
  desc: "hi, im henrik. i've spent to much time on this project.",
  icon: "images/henriklogo.png",
  image: "images/henrik-forest.jpg",
  twitterSite:"@henrik_tech"
};


const DefaultMeta = () =>{

  const router = useRouter();

  let canonUrl = `https://henriktech.com${router.asPath}`;
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{meta.title}</title>
      <meta name="title" content={meta.title} />
      <meta name="description" content={meta.desc} />
      <link rel="canonical" href={canonUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonUrl} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.desc} />
      <meta property="og:image" content={meta.image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonUrl} />
      <meta property="twitter:title" content={meta.title} />
      <meta property="twitter:description" content={meta.desc} />
      <meta property="twitter:image" content={meta.image} />
      <meta property="twitter:site" content={meta.twitterSite} />
    </Head>
  );
}

const Favicon = () =>{
  return (
    <Head>
      <link rel="icon" type="image/png" href={meta.icon} />
    </Head>
  );
}

export default Favicon
export { DefaultMeta };