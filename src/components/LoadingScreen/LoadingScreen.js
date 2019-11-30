import React from 'react';
import styles from './LoadingScreen.module.css'

export default function(props) {
    return (
      <div className={styles.overlayLoader}>
        <div className={styles.loader}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
        
    )
}