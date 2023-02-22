import React from 'react'
import Head from 'next/head'
import { TopBar, SkillPage } from '../components'
import styles from '/styles/Skill.module.css'

export default function skill() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Daniel Tomps | Skill</title>
                <meta name="description" content="Kai Min | Senior Blockchain Developer" />
                <link rel="icon" href="ico/home.ico" />
            </Head>
            <TopBar selectedId={3} />
            <SkillPage />
        </div>
    )
}
