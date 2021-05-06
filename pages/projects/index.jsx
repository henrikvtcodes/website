import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import Header from '@components/header.jsx';
import Footer from '@components/footer.jsx';
import styles from '@styles/projects.module.css';

export default function Projects() {
    return (
      <main className={styles.container}>
        <Head>
          <title> Projects | henrik's shitty website </title>
          <link rel="icon" href="/henriklogo.png" />
          <meta name="keywords" content="henrik, van tassell, henrik tech, henrik techguy" />
          <meta name="description" content="projects, case studies" />
          <meta name="author" content="henrik vt" />
        </Head>
        
        <Header /> 
  
        <div className={styles.main}>
          <h1>
            Henrik's Projects
          </h1>
          <p>
            Here is a list of projects that Henrik has done for himself or other people.
          </p>
        </div>
  
        <Footer />
  
      </main>
    )
}