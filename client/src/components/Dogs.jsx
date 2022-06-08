import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDogs } from "../store/actions";
import Dog from "./Dog";

export default function Dogs() {
  let dogs = useSelector((state) => state.filteredDogs);

  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDogs());
  }, []);

  return (
    <div>
      {dogs.map((e) => {
        return (
          <Dog
            key={e.id}
            id={e.id}
            img={e.img}
            name={e.name}
            temperament={e.temperament.join(", ")}
            weight={e.weight}
          />
        );
      })}
    </div>
  );
}
