import { useDispatch } from "react-redux";
import { ASCENDENTE, DESCENDENTE } from "../constantes/sort";
import { sort, sort_weight } from "../store/actions";

export default function Order() {
  const dispatch = useDispatch();

  function onSelectChange(e) {
    dispatch(sort(e.target.value));
  }

  function onSelectChanges(e) {
    dispatch(sort_weight(e.target.value));
  }

  return (
    <div>
      <div>
        Ordenar alfabeticamente
        <select name="select" onChange={onSelectChange}>
          <option value={ASCENDENTE}>A - Z</option>
          <option value={DESCENDENTE}>Z - A</option>
        </select>
      </div>
      <div>
        Ordenar por peso
        <select name="select" onChange={onSelectChanges}>
          <option value={ASCENDENTE}>Ascendente</option>
          <option value={DESCENDENTE}>Descendente</option>
        </select>
      </div>
    </div>
  );
}
