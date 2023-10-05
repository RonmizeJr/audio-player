'use client';

import React, { useState } from 'react';
import styles from '@/app/audioplayer.module.css';
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
      <button>
        <BsArrowLeftShort /> 30
      </button>
      <button onClick={togglePlayPause}>
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
      <button>
        30 <BsArrowRightShort />
      </button>

      {/* current time */}
      <div>0:00</div>

      {/* progress bar */}
      <div>
        <input type='range' />
      </div>

      {/* duration */}
      <div>2:49</div>
    </div>
  );
};

export { AudioPlayer };
