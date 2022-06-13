import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import styles from "./DogDetail.module.css";

export default function DogDetail() {
  const [dog, setDog] = useState(null);

  let { id } = useParams();

  useEffect(() => {
    axios.get("http://localhost:3001/api/dogs/" + id).then((response) => {
      setDog(response.data);
    });

    return () => {
      setDog(null);
    };
  }, []);
  console.log(dog);
  return (
    <div>
      {dog ? (
        <>
          <Link to="/home">
            <button>Atras</button>
          </Link>
          <h3>{dog["0"]["name"]}</h3>
          <img className={styles.imagen} src={dog["0"]["img"]} alt="imagen" />
          <h4>Temperamento: {dog["0"]["temperament"].join(", ")}.</h4>
          {dog["0"]["heightMin"] &&
          dog["0"]["heightMax"] &&
          !dog["0"]["height"] ? (
            <h4>
              Altura: {`${dog["0"]["heightMin"]} - ${dog["0"]["heightMax"]}`}{" "}
              cm.
            </h4>
          ) : (
            <h4>Altura: {dog["0"]["height"]} cm.</h4>
          )}

          {dog["0"]["weightMin"] &&
          dog["0"]["weightMax"] &&
          !dog["0"]["weight"] ? (
            <h4>
              Peso: {`${dog["0"]["weightMin"]} - ${dog["0"]["weightMax"]}`} kg.
            </h4>
          ) : (
            <h4>Peso: {dog["0"]["weight"]} cm.</h4>
          )}
          {dog["0"]["lifeSpanMin"] &&
          dog["0"]["lifeSpanMax"] &&
          !dog["0"]["lifeSpan"] ? (
            <h4>
              Vda Aproximada:{" "}
              {`${dog["0"]["lifeSpanMin"]} a ${dog["0"]["lifeSpanMax"]}`} años.
            </h4>
          ) : (
            <h4>Vida Aproximada: {dog["0"]["lifeSpan"]}</h4>
          )}
        </>
      ) : (
        <div>Cargando</div>
      )}
    </div>
  );
}
