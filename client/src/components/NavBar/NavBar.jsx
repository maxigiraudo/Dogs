import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import Logo from "../Inicial/dogs-logo.png";

export default function NavBar() {
  return (
    <header className={styles.container}>
      <NavLink className={styles.navLogo} to="/home">
        <li>
          <img className={styles.logo} src={Logo} alt="" />
        </li>
      </NavLink>
      <nav className={styles.navBar}>
        <ul className={styles.unl}>
          <div className={styles.navLinks}>
            <NavLink to="/about">
              <li>SOBRE MI</li>
            </NavLink>
            <NavLink to="/add">
              <li>CREAR RAZA</li>
            </NavLink>
          </div>
        </ul>
      </nav>
    </header>
  );
}
