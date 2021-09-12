import { useRouter } from 'next/router';

type TwitterMeta = {
    card?: string;
    site?: string | "@henrik_tech";
}

interface Meta {
    title: string;
    description: string;
    url?: string | "henriktech.com" | "henrikvt.com";
    image?: string;
    twitter?: TwitterMeta;
    
}

const DefaultProps:Meta = {
    title: "henriks shitty website",
    description: "henrik's portfolio site",
    url: "henriktech.com",
    image: "/images/henrik-forest.jpg",
    twitter:{
        site: "@henrik_tech",
        card: "summary-large-image",
    }
}

const DefaultMeta = () =>{


    return (
      <div>
        <title> {DefaultProps.title} </title>
        <meta name="title" content={DefaultProps.title} />
        <meta name="description" content={DefaultProps.description} />
        {/** FACEBOOK / OPENGRAPH */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={DefaultProps.url} />
        <meta property="og:title" content={DefaultProps.title} />
        <meta property="og:description" content={DefaultProps.description} />
        <meta property="og:image" content={DefaultProps.image} />
        {/* TWITTER */}
        <meta property="twitter:card" content={DefaultProps.twitter?.card} />
        <meta property="twitter:url" content={DefaultProps.url} />
        <meta property="twitter:title" content={DefaultProps.title} />
        <meta property="twitter:description" content={DefaultProps.description} />
        <meta property="twitter:image" content={DefaultProps.image} />
        <meta property="twitter:site" content={DefaultProps.twitter?.site} />
      </div>
    );
}

const CustomMeta = (MetaProps:Meta) => {
  return (
    <div>
      <title> {MetaProps.title || DefaultProps.title} </title>
      <meta name="title" content={MetaProps.title || DefaultProps.title} />
      <meta name="description" content={MetaProps.description || DefaultProps.description} />
      {/** FACEBOOK / OPENGRAPH */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={MetaProps.url ||  DefaultProps.url} />
      <meta property="og:title" content={MetaProps.title || DefaultProps.title} />
      <meta property="og:description" content={MetaProps.description || DefaultProps.description} />
      <meta property="og:image" content={MetaProps.image ||  DefaultProps.image} />
      {/* TWITTER */}
      <meta property="twitter:card" content={MetaProps.twitter?.card || DefaultProps.twitter?.card} />
      <meta property="twitter:url" content={MetaProps.url || DefaultProps.url} />
      <meta property="twitter:title" content={MetaProps.title || DefaultProps.title} />
      <meta property="twitter:description" content={MetaProps.description || DefaultProps.description} />
      <meta property="twitter:image" content={MetaProps.image || DefaultProps.image} />
      <meta property="twitter:site" content={MetaProps.twitter?.site || DefaultProps.twitter?.site} />
    </div>
  );
};

export default DefaultMeta;