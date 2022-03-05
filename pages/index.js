import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Banner } from '../components/banner'
import { CounterContainer } from '../components/counter/counter_container'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Counters</title>
        <meta name="description" content="Keep track of things you're counting" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Banner title="🧮 Abacus"/>

      <main className={styles.main}>
        <CounterContainer />
      </main>

      <footer className={styles.footer}>
        <p>
          Created by Appsolutely Wonderful
        </p>
      </footer>
    </div>
  )
}
