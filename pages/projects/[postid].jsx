import React from 'react';
import { useRouter } from 'next/router'
import matter from 'gray-matter';

import styles from '@styles/projects.module.css'
import projectPage from '@components/layout.jsx'
import Header from '@components/header.jsx';
import Footer from '@components/footer.jsx';



export default function Post() {
    const router = useRouter()
    const { postid } = router.query
    return(
        <main className={styles.container}>
            <Header />

            <div className={styles.main}>
                <h1>
                A Post
                </h1>
                <h4>Your post ID is: <i>{ postid }</i> </h4>
            </div>

            <Footer />
        </main>
    )
}