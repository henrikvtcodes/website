import React from 'react';
import Head from 'next/head'


export default function Meta({title, image, description}) {
    let full_title = title + " | henrik's shitty website"
    return (
        <Head>
            <title>{full_title}</title>

            <meta name="keywords" content="henrik, van tassell, henrik tech, henrik techguy" />
            <meta name="description" content={description} />
            <meta name="author" content="henrik vt" />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@henrik_tech" />
            <meta name="twitter:title" content={full_title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            <meta property="og:title" content={full_title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
        </Head>
    )
}