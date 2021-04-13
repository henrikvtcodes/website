import React from 'react';
import Head from 'next/head'

import Header from '@components/header.jsx'
import Footer from '@components/footer.jsx'
import styles from '@styles/Contact.module.css'

export default function Contact() {
    return (
      <main className={styles.container}>
        <Head>
          <title> Contact | henrik's shitty website </title>
          <link rel="icon" href="/henriklogo.png" />
          <meta name="keywords" content="henrik, van tassell, henrik tech, henrik techguy" />
          <meta name="description" content="give me a holla" />
          <meta name="author" content="henrik vt" />
        </Head>
        
        <Header /> 
  
        <div className={styles.main}>
          <h1>
            CONTACT PAGE
          </h1>
        </div>
  
        <Footer />
  
      </main>
    )
}