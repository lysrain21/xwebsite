import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.heroContainer}>
        <h1 className={styles.heroTitle}>
          THE PROTOCOL TO<br />
          VALUE HUMAN VOICE
        </h1>
        <p className={styles.subTitle}>
          Voice data is scattered, unused, and undervalued. But it doesn't have to be.
          For the first time, you can upload, evaluate, and earn on a single intelligent agent layer.
        </p>
      </div>
    </div>
  );
}