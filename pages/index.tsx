import type { NextPage } from 'next'
import Head from 'next/head'
import {
  Homepage
} from '../components'
import { TopBar } from '../components'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Daniel Tomps | Home</title>
        <meta name="description" content="Daniel Tomps | Senior Blockchain Developer" />
        <link rel="icon" href="ico/home.ico" />
      </Head>
      <TopBar selectedId={1} />
      <Homepage />
    </div>
  )
}

export default Home
