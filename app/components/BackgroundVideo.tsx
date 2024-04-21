import React from 'react';
import styles from './BackgroundVideo.module.css';

const BackgroundVideo = () => {
  return (
    <div >
      <video className={styles.videoContainer} autoPlay muted loop preload="none">
        <source src="/background.mp4" />
      </video>
    </div>
  )
}

export default BackgroundVideo
