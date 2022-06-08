import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <header className={styles.container}>
      <nav className={styles.navBar}>
        <ul className={styles.unl}>
          <NavLink to="/home">
            <li>Home</li>
          </NavLink>

          <NavLink to="/fav">
            <li>Fav</li>
          </NavLink>
          <NavLink to="/add">
            <li>Create</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}
