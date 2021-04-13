import React from 'react';
import Head from 'next/head'

import Header from '@components/header.jsx'
import Footer from '@components/footer.jsx'
import styles from '@styles/About.module.css'

export default function About() {
    return (
      <main className={styles.container}>
        <Head>
          <title> About | henrik's shitty website </title>
          <link rel="icon" href="/henriklogo.png" />
          <meta name="keywords" content="henrik, van tassell, henrik tech, henrik techguy" />
          <meta name="description" content="about henrik i guess, prob boring" />
          <meta name="author" content="henrik vt" />
        </Head>
        
        <Header /> 
  
        <div className={styles.main}>
          <h1>
            ABOUT PAGE
          </h1>
        </div>
  
        <Footer />
  
      </main>
    )
  }