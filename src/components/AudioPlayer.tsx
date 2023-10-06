'use client';

import React, { useState } from 'react';
import styles from '@/styles/audioplayer.module.css';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { FaPlay, FaPause } from 'react-icons/fa';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={styles.audioPlayer}>
      <audio src='/06 Against the Wind.mp3' preload='metadata'></audio>
      <button className={styles.forwardBackward}>
        <BsArrowLeftShort /> 30
      </button>
      <button onClick={togglePlayPause} className={styles.playPause}>
        {isPlaying ? <FaPause /> : <FaPlay className={styles.play} />}
      </button>
      <button className={styles.forwardBackward}>
        30 <BsArrowRightShort />
      </button>

      {/* current time */}
      <div className={styles.currentTime}>0:00</div>

      {/* progress bar */}
      <div>
        <input type='range' className={styles.progressBar} />
      </div>

      {/* duration */}
      <div className={styles.duration}>2:49</div>
    </div>
  );
};

export { AudioPlayer };
