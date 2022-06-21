import { Link } from "react-router-dom";
import styles from "./Dog.module.css";

export default function Dog({
  id,
  name,
  img,
  temperament,
  temperaments,
  weight,
  weightMin,
  weightMax,
}) {
  function renderTemperaments(temperament) {
    if (temperament) {
      return temperament.join(", ");
    } else if (temperaments) {
      return temperaments.join(", ");
    }
    return "Este error";
  }

  return (
    <div className={styles.card}>
      <Link to={`/${id}`}>
        <h3>{name}</h3>
        <img className={styles.imagen} src={img} alt="imagen" />
        {weightMin && weightMax && !weight ? (
          <h5>
            Peso: {weightMin} - {weightMax} kg.
          </h5>
        ) : (
          <h5>Peso: {weight} kg.</h5>
        )}

        <h5>Temperamento: {renderTemperaments(temperament)}.</h5>
      </Link>
    </div>
  );
}
