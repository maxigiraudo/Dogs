import React from "react";
// import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Inicial() {
  return (
    <div>
      <h1>Bienvenidos a "Tu mejor amigo"</h1>
      <Link to="/home">
        <button>Ingresar</button>
      </Link>
    </div>
  );
}
