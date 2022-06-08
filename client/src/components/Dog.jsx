import { Link } from "react-router-dom";

export default function Dog({ id, name, img, temperament, weight }) {
  return (
    <div>
      <Link to={`/${id}`}>
        <h3>{name}</h3>
        <img src={img} alt="imagen" />
        <h5>Temperamento: {temperament}.</h5>
        <h5>Peso: {weight} kg.</h5>
      </Link>
    </div>
  );
}
