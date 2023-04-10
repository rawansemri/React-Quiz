import React from 'react'
import styles from "./styles.module.css";
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className={styles.NavbarContainer}>
       <Link to={'/'}> <h1>React Quiz</h1></Link>
    </div>
  )
}
