import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Link from 'next/link'
import { GenButton } from '../components/Button';
import Menu from '../components/Menu'

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Todo List With <span style={{ color: 'blue' }}>Next.js</span> and <span style={{ color: 'orange' }}>Context API</span> 🙂
        </h1>
        <div>
          <GenButton theme={"primary"} text={"Hello"} />
        </div>

      </main>

      <footer className={styles.footer}>
        <p>Footer</p>
      </footer>
    </div>
  )
}

export default Home;
