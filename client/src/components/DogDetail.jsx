import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

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
          <h3>{dog["0"]["name"]}</h3>
          <img src={dog["0"]["img"]} alt="imagen" />
        </>
      ) : (
        <div>Cargando</div>
      )}
    </div>
  );
}
