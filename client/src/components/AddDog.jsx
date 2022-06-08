import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function AddDog() {
  const [dog, setDog] = useState({});
  let history = useHistory();

  function onInputChange(e) {
    e.preventDefault();
    setDog({
      ...dog,
      [e.target.name]: e.target.value,
    });
  }

  function onSubmit(e) {
    e.preventDefault();
    axios.post("http://localhost:3001/api/dogs/", dog).then(() => {
      history.push("/");
    });
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="">Nombre: </label>
        <input
          onChange={onInputChange}
          name="name"
          type="text"
          value={dog.name}
        />
        <label htmlFor="">Imagen: </label>
        <input
          onChange={onInputChange}
          name="img"
          type="text"
          value={dog.img}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
