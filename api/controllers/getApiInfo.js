const axios = require("axios");

module.exports = async function getApiInfo() {
  const apiInfo = await axios.get("https://api.thedogapi.com/v1/breeds"); // me traigo datos de la api, aca espero la data de axios (data)
  const list = await apiInfo.data.map((dog) => {
    // hago listo de lo que necesito con map.
    return {
      name: dog.name, //devuelvo todos los elementos que necesito.
      lifeSpan: dog.life_span,
      id: dog.id,
      height: dog.height.metric,
      weight: dog.weight.metric,
      temperament: [dog.temperament]
        .join() // aca los uno.
        .split(",") //  separo por coma
        .map((dog) => dog.trim()), // elimine los espacios en blanco del string
      img: dog.image.url,
    };
  });
  return list;
};
