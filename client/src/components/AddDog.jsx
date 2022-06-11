import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { fetchTemperaments } from "../store/actions";

export default function AddDog() {
  let temperaments = useSelector((state) => state.temperaments);
  const [dog, setDog] = useState({
    temperament: [],
  });
  const [error, setError] = useState({
    error: "Debe ingresar una raza",
  });
  let history = useHistory();
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTemperaments());
  }, []);

  function validationForm(value) {
    let errors = {};
    if (!value.name) errors.name = "Debe ingresar una raza";
    else if (!/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/.test(value.name)) {
      errors.name = "Los nombres propios empiezan con mayúscula";
    }
    return errors;
  }

  const onSelectChange = (e) => {
    setDog({
      ...dog,
      temperament: [...dog.temperament, e.target.value],
    });
  };

  function onInputChange(e) {
    e.preventDefault();
    setDog({
      ...dog,

      [e.target.name]: e.target.value,
    });

    setError(
      validationForm({
        ...dog,
        [e.target.name]: e.target.value,
      })
    );
    console.log(error);
  }

  function onSubmit(e) {
    e.preventDefault();
    axios.post("http://localhost:3001/api/dogs/new", dog).then(() => {
      history.push("/");
    });
  }
  console.log(dog);
  return (
    <div>
      <Link to="/home">
        <button>Atras</button>
      </Link>
      <h1>CREÁ A TU MEJOR AMIGO</h1>
      <form
        onSubmit={(e) => {
          onSubmit(e);
        }}
      >
        <p htmlFor="">Raza: </p>
        <input
          onChange={(e) => onInputChange(e)}
          name="name"
          type="text"
          value={dog.name}
        />

        {error.name ? <p style={{ color: "red" }}> {error.name} </p> : null}
        <p htmlFor="">Altura Minima: </p>
        <input
          onChange={(e) => onInputChange(e)}
          name="heightMin"
          type="text"
          value={dog.height}
        />
        <p htmlFor="">Altura Máxima: </p>
        <input
          onChange={(e) => onInputChange(e)}
          name="heightMax"
          type="text"
          value={dog.height}
        />
        <p htmlFor="">Peso Minimo: </p>
        <input
          onChange={(e) => onInputChange(e)}
          name="weightMin"
          type="text"
          value={dog.weight}
        />
        <p htmlFor="">Peso Máximo: </p>
        <input
          onChange={(e) => onInputChange(e)}
          name="weightMax"
          type="text"
          value={dog.weight}
        />
        <p htmlFor="">Vida: </p>
        <input
          onChange={(e) => onInputChange(e)}
          name="lifeSpan"
          type="text"
          value={dog.lifeSpan}
        />
        <p htmlFor="">Temperamentos: </p>

        <select multiple onChange={(e) => onSelectChange(e)} name="temperament">
          {temperaments.map((e, i) => (
            <option value={e} key={i}>
              {e}
            </option>
          ))}
        </select>

        <p htmlFor="">Imagen: </p>
        <input
          onChange={(e) => onInputChange(e)}
          name="img"
          type="text"
          value={dog.img}
        />

        <input
          type="submit"
          disabled={Object.keys(error).length === 0 ? false : true}
        />
      </form>
    </div>
  );
}
