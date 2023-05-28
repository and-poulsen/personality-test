"use client";
import Image from 'next/image';
import styles from './page.module.scss';
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>Welcome to the Personality Test</h1>
        <Link href="/test">Start the test</Link>
      </div>
    </main>
  );
}
