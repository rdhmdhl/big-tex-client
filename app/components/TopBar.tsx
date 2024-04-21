import React from 'react'
import { GiTexas } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import styles from './TopBar.module.css';

const TopBar = () => {
  return (
    <div className={styles.topbarContainer}>
        <GiTexas className={styles.icon}/>
        <h1>Big Texas Ent</h1>
        <FaShoppingCart className={styles.icon}/>
    </div>
  )
}

export default TopBar
