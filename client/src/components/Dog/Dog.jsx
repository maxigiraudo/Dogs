import { Link } from "react-router-dom";
import styles from "./Dog.module.css";

export default function Dog({ id, name, img, temperament, weight }) {
  function renderTemperaments(temperament) {
    if (temperament && temperament.length > 0) {
      return temperament.join(", ");
    }
    return "";
  }

  return (
    <div className={styles.card}>
      <Link to={`/${id}`}>
        <h3>{name}</h3>
        <img className={styles.imagen} src={img} alt="imagen" />
        <h5>Peso: {weight} kg.</h5>
        <h5>Temperamento: {renderTemperaments(temperament)}.</h5>
      </Link>
    </div>
  );
}
