import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterxTemperaments } from "../../store/actions";

export default function Filter() {
  let dispatch = useDispatch();
  let { dogs, temperaments } = useSelector((state) => state);

  const cambio = (e) => {
    e.preventDefault();
    const valor = e.target.value;
    let fil = dogs.filter((e) => {
      if (!e.temperament) {
        console.log(e);

        return false;
      }
      return e.temperament.includes(valor);
    });

    dispatch(filterxTemperaments(fil));
  };

  return (
    <div>
      <div>
        Filtrar por temperamento
        <select name="select" onChange={(e) => cambio(e)}>
          {temperaments.map((e, i) => (
            <option key={i}>{e}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
