import Head from 'next/head'

export default function Meta({title, site, image, description, author}) {
    return (
        <Head>
            <title>{title}</title>
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@henrik_tech" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            <meta name="keywords" content="henrik, van tassell, henrik tech, henrik techguy" />
            <meta name="description" content={description} />
            <meta name="author" content="henrik vt" />
        </Head>
    )
}