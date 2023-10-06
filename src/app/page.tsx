import { AudioPlayer } from '@/components/AudioPlayer';
import styles from '@/styles/page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <AudioPlayer />
    </main>
  );
}
