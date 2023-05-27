import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Navbar />
        <Head>
          <title>Flashify</title>
          <meta name="description" content="Welcome to my homepage" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <div className={styles.jumbo}>
            <h1 className={styles.heading}>
              Learn <b>faster</b> with the power of AI
            </h1>
            <p className={styles.description}>
              Our innovate flashcard generation software leverages the power of GPT 3.5 for quick and simple flashcard creation.
            </p>
            <Link href="/flashcard" className={styles.navLink}>
              <button className={styles.jumboButton}>
                Try now
              </button>
            </Link>
            
          </div>
          <div className={styles.flashcards}>
            <div className={styles.flashcard2}>
              <h1>The mitochondria</h1>
            </div>
            <div className={styles.flashcard1}>
              <h1>What is the powerhouse of the cell?</h1>
            </div>
          </div>
        </main>

      </div>
    </>


  )
}
