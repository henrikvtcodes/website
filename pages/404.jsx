import Image from 'next/image'

import styles from '@styles/404.module.css';

function error() {
    return(
        <main className={styles.page}>
            <div>
                <h1> Page Not Found </h1> <br />
                <p> I apologize for the shittiness of this 404 page</p>
            </div>
        </main>
    )
}

export default error;