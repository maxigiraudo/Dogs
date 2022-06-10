import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDogs, fetchTemperaments } from "../../store/actions";
import Dog from "../Dog/Dog";
import styles from "./Dogs.module.css";

export default function Dogs() {
  let dogs = useSelector((state) => state.filteredDogs);

  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDogs());
    dispatch(fetchTemperaments());
  }, []);

  return (
    <div className={styles.carDog}>
      {dogs.map((e) => {
        return (
          <Dog
            key={e.id}
            id={e.id}
            img={e.img}
            name={e.name}
            temperament={e.temperament}
            weight={e.weight}
          />
        );
      })}
    </div>
  );
}
