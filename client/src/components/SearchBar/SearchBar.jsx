import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchDogs } from "../../store/actions";
import styles from "./SearchBar.module.css";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  let dispatch = useDispatch();
  function onSubmit(e) {
    e.preventDefault();
    dispatch(searchDogs(search));
  }

  function onInputChange(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          placeholder="Busca tu raza"
          className={styles.form}
          type="text"
          onChange={onInputChange}
          value={search}
        />
        <input className={styles.buscar} type="submit" value="Buscar" />
      </form>
    </div>
  );
}
