// pages/index.js

import Head from "next/head";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Welcome to our home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main}>
        <h1 className={styles.title}>
          Welcome to our <a href="#">Home Page!</a>
        </h1>

        {/* <p className={styles.description}>
          Get started by editing
          <code className={styles.code}>pages/index.js</code>
        </p> */}

        <div className={styles.grid}>
          <a href="#" className={styles.card}>
            <h3>Users &rarr;</h3>
            <p>List of all users from jsonplaceholder website.</p>
          </a>

          {/* <a href="#" className={styles.card}>
            <h3>Link 2 &rarr;</h3>
            <p>Learn about our company history.</p>
          </a>

          <a href="#" className={styles.card}>
            <h3>Link 3 &rarr;</h3>
            <p>Contact us for further information.</p>
          </a> */}
        </div>
      </div>

      <footer className={styles.footer}>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Powered by
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
