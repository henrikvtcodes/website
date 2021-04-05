import React from 'react';
import Link from "next/link";

import styles from '@styles/header.module.css'
import henrik from '@media/henriklogo.png'

function Header() {
    return (
        <navbar className={styles.navbar}>
            <ul>
                <li> // home button and main logo
                    <Link href="/">
                        <img src={henrik} alt="Circular Cartoon Henrik Face" />
                    </Link>
                </li>
                <li> // about page
                    <Link href="/about">
                    About
                    </Link>
                </li>
                <li> // media page; twitch, youtube, twitter feed, etc.
                    <Link href="/media">
                    Media
                    </Link>
                </li>
                <li> // projects page; psuedo blog where i write about my various code and IT projects
                    <Link href="/projects">
                    Projects
                    </Link>
                </li>
                <li> // contact page; contact form
                    <Link href="/contact">
                    Contact
                    </Link>
                </li>
            </ul>
        </navbar>
    )
}

export default Header