import React from 'react';
import { useRouter } from 'next/router'

import styles from '@styles/projects.module.css'
import projectPage from '@components/layout.jsx'

const router = useRouter()
const { postid } = router.query

export default function Post() {
    return(
        <main>
            <h1>
                Post ID: {postid}
            </h1>
        </main>
    )
}