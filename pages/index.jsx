import React from 'react';
import Head from 'next/head';

import Header from '@components/header.jsx';
import Footer from '@components/footer.jsx';
import Meta from '@components/meta.js';
import styles from '@styles/Home.module.css';

export default function Home() {
  return (
    <main className={styles.container}>
      <Meta title='home' description='homepage' image='/henriklogo.png' />
      
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