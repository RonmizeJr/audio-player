import { AudioPlayer } from '@/components/AudioPlayer';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <AudioPlayer />
    </main>
  );
}
