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
          <NavLink to="/about">
            <li>About</li>
          </NavLink>
          <NavLink to="/add">
            <li>Create</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}
