import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

export default function AddDog() {
  const [dog, setDog] = useState({});
  let history = useHistory();

  function onInputChange(e) {
    e.preventDefault();
    setDog({
      ...dog,
      [e.target.name]: e.target.value,
    });
  }

  function onSubmit(e) {
    e.preventDefault();
    axios.post("http://localhost:3001/api/dogs/new", dog).then(() => {
      history.push("/");
    });
  }
  return (
    <div>
      <Link to="/home">
        <button>Atras</button>
      </Link>
      <h1>CREÁ A TU MEJOR AMIGO</h1>
      <form
        onSubmit={(e) => {
          onSubmit(e);
        }}
      >
        <label htmlFor="">Nombre: </label>
        <input
          onChange={onInputChange}
          name="name"
          type="text"
          value={dog.name}
        />
        <label htmlFor="">Imagen: </label>
        <input
          onChange={onInputChange}
          name="img"
          type="text"
          value={dog.img}
        />
        <label htmlFor="">Peso Minimo: </label>
        <input
          onChange={onInputChange}
          name="weight"
          type="text"
          value={dog.weight}
        />

        <label htmlFor="">Altura Minima: </label>
        <input
          onChange={onInputChange}
          name="height"
          type="text"
          value={dog.height}
        />
        <label htmlFor="">Vida: </label>
        <input
          onChange={onInputChange}
          name="lifeSpan"
          type="text"
          value={dog.lifeSpan}
        />

        <input type="submit" />
      </form>
    </div>
  );
}

// export default function AddDog() {
//   return (
//     <div>
//       <Link to="/home">
//         <button>Atras</button>
//       </Link>
//       <h1>CREÁ A TU MEJOR AMIGO</h1>
//       <form onSubmit={onSubmit}>
//         <label htmlFor="">Nombre: </label>
//         <input
//           onChange={onInputChange}
//           name="name"
//           type="text"
//           value={dog.name}
//         />
//         <label htmlFor="">Imagen: </label>
//         <input
//           onChange={onInputChange}
//           name="img"
//           type="text"
//           value={dog.img}
//         />
//         <label htmlFor="">Peso Minimo: </label>
//         <input
//           onChange={onInputChange}
//           name="weight"
//           type="text"
//           value={dog.weight}
//         />

//         <label htmlFor="">Altura Minima: </label>
//         <input
//           onChange={onInputChange}
//           name="height"
//           type="text"
//           value={dog.height}
//         />
//         <label htmlFor="">Vida: </label>
//         <input
//           onChange={onInputChange}
//           name="lifeSpan"
//           type="text"
//           value={dog.lifeSpan}
//         />

//         <input type="submit" />
//       </form>
//     </div>
//   );
// }
