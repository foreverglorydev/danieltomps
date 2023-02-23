import React from 'react'
import Head from 'next/head'
import { ServicePage, TopBar } from '../components'
import styles from '/styles/Service.module.css'

export default function Service() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Daniel Tomps | Service</title>
                <meta name="description" content="Daniel Tomps | Senior Blockchain Developer" />
                <link rel="icon" href="ico/home.ico" />
            </Head>
            <TopBar selectedId={5} />
            <ServicePage />
        </div>
    )
}
