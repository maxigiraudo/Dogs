import { useDispatch, useSelector } from "react-redux";
import { filterxTemperaments } from "../../store/actions";

export default function Filter() {
  let dispatch = useDispatch();
  let dogs = useSelector((state) => state.dogs);

  let temperament = dogs.map((e) => e.temperament.join());
  let newTemperament = temperament.join();
  let letnew2temperament = newTemperament.split(",");
  let allTemperaments = letnew2temperament.filter((item, index) => {
    return letnew2temperament.indexOf(item) === index;
  });

  const cambio = (e) => {
    e.preventDefault();
    const valor = e.target.value;
    let fil = dogs.filter((e) => {
      return e.temperament.includes(valor);
    });

    dispatch(filterxTemperaments(fil));
  };

  return (
    <div>
      <div>
        Filtrar por temperamento
        <select name="select" onChange={cambio}>
          {allTemperaments.map((e) => {
            return <option>{e}</option>;
          })}
        </select>
      </div>
    </div>
  );
}
