import React from 'react'
import Head from 'next/head'
import { GithubPage, TopBar } from '../components'
import styles from '/styles/Github.module.css'

export default function github() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Daniel Tomps | Contact</title>
                <meta name="description" content="Daniel Tomps | Senior Blockchain Developer" />
                <link rel="icon" href="ico/home.ico" />
            </Head>
            <TopBar selectedId={7} />
            <GithubPage />
        </div>
    )
}
