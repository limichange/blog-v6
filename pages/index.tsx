import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Limichange</title>
        <meta name="description" content="a person from the world" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image
          className={styles.avatar}
          src="/avatar.jpg"
          alt="avatar"
          width={128}
          height={128}
        />
        <h1 className={styles.title}>Limichange</h1>

        <p>Frontend Developer / Freelancer</p>

        <p>6 years developing web applications</p>

        <br />
        <p>
          <a
            href="https://twitter.com/Limichange2"
            target="_blank"
            rel="noreferrer">
            Twitter
          </a>{' '}
          /{' '}
          <a
            href="https://github.com/limichange"
            target="_blank"
            rel="noreferrer">
            Github
          </a>
        </p>
      </main>
    </div>
  )
}

export default Home
