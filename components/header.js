import React from 'react';
import Link from "next/link";

import styles from '@styles/header.module.css'

function Header() {
    return (
        <main className={styles.container}>
           <img src='@media/henriklogo.png' className={styles.logo} />
        </main>
    )
}

export default Header