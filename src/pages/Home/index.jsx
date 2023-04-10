import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <div className={styles.ChooseStatment}>Choose Your Quiz Category</div>

      <div className={styles.CategoryContainer}>
        <Link to={"/math"}>
          <button className={styles.btnMath}>Math</button>
        </Link>
        <Link to={"/english"}>
          <button className={styles.btnEnglish}>English</button>
        </Link>
        <Link to={"/computer"}>
          <button className={styles.btnComputer}>Computer</button>
        </Link>
        <Link to={"/chemistry"}>
          <button className={styles.btnChemistry}>Chemistry</button>
        </Link>
        <Link to={"/science"}>
          <button className={styles.btnScience}>Science</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
