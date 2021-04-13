import React from 'react';
import Head from 'next/head'

import Header from '@components/header.jsx'
import Footer from '@components/footer.jsx'
import styles from '@styles/home.module.css'

export default function Home() {
  return (
    <main className={styles.container}>
      <Head>
        <title> henrik's shitty website </title>
        <link rel="icon" href="/henriklogo.png" />
        <meta name="keywords" content="henrik, van tassell, henrik tech, henrik techguy" />
        <meta name="description" content="henrik's shitty personal website" />
        <meta name="author" content="henrik vt" />
      </Head>
      
      <Header /> 

      <div className={styles.main}>
        <h1>
          HOME PAGE
        </h1>
      </div>

      <Footer />

    </main>
  )
}