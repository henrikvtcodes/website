import React from 'react';
import Link from "next/link";

import styles from '@styles/Header.module.css'

function Header() {
    return (
        <navbar className={styles.navbar}>
            <ul>
                <li> {/* main logo, home page link */}
                    <Link href="/">
                        <img src={'/henriklogo-spin-crop.gif'} alt="Circular Cartoon Henrik Face" />
                    </Link>
                </li>
                <li> {/* link to about page */}
                    <Link href="/about">
                    About
                    </Link>
                </li>
                <li> {/* media page; twitch, youtube, twitter, insta embeds*/}
                    <Link href="/media">
                    Media
                    </Link>
                </li>
                <li> {/* project psuedo-blog; content generated based on markdown files */}
                    <Link href="/projects">
                    Projects
                    </Link>
                </li>
                <li> {/* contact form */}
                    <Link href="/contact">
                    Contact
                    </Link>
                </li>
            </ul>
        </navbar>
    )
}

export default Header