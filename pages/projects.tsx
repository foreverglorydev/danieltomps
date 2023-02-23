import React from 'react'
import Head from 'next/head'
import { TopBar, ProjectsPage } from '../components'
import styles from '/styles/Projects.module.css'

export default function projects() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Daniel Tomps | Projects</title>
                <meta name="description" content="Daniel Tomps | Senior Blockchain Developer" />
                <link rel="icon" href="ico/home.ico" />
            </Head>
            <TopBar selectedId={4} />
            <ProjectsPage />
        </div>
    )
}
