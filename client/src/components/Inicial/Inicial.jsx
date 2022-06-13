import React from "react";
// import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./Inicial.module.css";
import Logo from "./dogs-logo.png";

export default function Inicial() {
  return (
    <div className={styles.containterInicial}>
      <div className={styles.logoBtn}>
        <Link to="/home">
          <div>
            <img className={styles.logo} src={Logo} alt="" />
          </div>
          <button className={styles.inicio}>INGRESAR</button>
        </Link>
      </div>
    </div>
  );
}
