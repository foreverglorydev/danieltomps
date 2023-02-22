import React from 'react'
import Head from 'next/head'
import { TopBar, ContactPage } from '../components'
import styles from '/styles/Contact.module.css'

export default function contact() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Daniel Tomps | Contact</title>
                <meta name="description" content="Kai Min | Senior Blockchain Developer" />
                <link rel="icon" href="ico/home.ico" />
            </Head>
            <TopBar selectedId={6} />
            <ContactPage />
        </div>
    )
}
