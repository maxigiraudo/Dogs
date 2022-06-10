const getApiInfo = require("./getApiInfo");
const getDbInfo = require("./getDbInfo");

// importo las 2 funciones de los controladores

module.exports = async function getAllDogs() {
  // function async
  const infoApi = await getApiInfo(); // me traigo todo de la funcion de api.
  const infoDb = await getDbInfo(); //  me traigo todo de la funcion de db.
  console.log("INFO DB##", infoDb);
  const allDogs = infoApi.concat(infoDb); // concateno los array de los controladores.

  return allDogs;
};
