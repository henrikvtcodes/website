import React from 'react';
import Head from 'next/head'


export default function Meta({title, image, description, url}) {
    let full_title = title + " | henrik's shitty website"
    return (
        <Head>
            <title>{full_title}</title>

            <meta name='keywords' content='henrik, van tassell, henrik tech, henrik techguy' />
            <meta name='description' content={description} />
            <meta name='author' content='henrik vt' />
            <link rel='icon' href='/henriklogo.png' />

            <meta name='twitter:card' content='summary' />
            <meta name='twitter:site' content='@henrik_tech' />
            <meta name='twitter:title' content={full_title} />
            <meta name='twitter:description' content={description} />
            <meta name='twitter:image' content='https://next.henriktech.com/henriklogo.png' />

            <meta property='og:title' content={full_title} />
            <meta property='og:type' content='website' />
            <meta property='og:description' content={description} />
            <meta property='og:image' content='https://next.henriktech.com/henriklogo.png' />
            <meta property='og:url' content={url} />
        </Head>
    )
}