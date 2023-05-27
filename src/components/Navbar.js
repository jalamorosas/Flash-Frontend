import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <h1 className={styles.logo}>
        Flashify
      </h1>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/" className={styles.navLink}>
            Home
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/flashcard" className={styles.navLink}>
            Generate
          </Link>
        </li>
      </ul>
      <div className={styles.buttons}>
        <button className={styles.signup}>Sign Up</button>
        <button className={styles.login}>Log In</button>
      </div>
    </nav>
  );
}
