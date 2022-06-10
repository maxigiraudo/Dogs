const { Router } = require("express");
const router = Router(); // importo router
const apiInfo = require("../controllers/getApiInfo"); // me traigo el controlador de api.
const { Temperament } = require("../db"); // me traigo la tabla temperamento.

router.get("/", async (req, res) => {
  // ACA ME TRAIGO LA INFO DE TEMP
  let allTemperaments = await Temperament.findAll(); // TRAEME TODOS LOS TEMP.

  // SI ES LA PRIMERA VEZ Y NO TENGO NADA, LOS CREO DESDE LA API
  if (allTemperaments.length === 0) {
    let temperamentsRepeated = [];
    const dogsApi = await apiInfo(); // ACA ME TRAIGO LA INFO DE LA API(CONTROLADOR).

    dogsApi.forEach((dog) => {
      temperamentsRepeated = temperamentsRepeated.concat(dog.temperament);
    });

    const uniqueTemperaments = temperamentsRepeated.filter((temp, index) => {
      return temperamentsRepeated.indexOf(temp) === index;
    });

    const temperamentsToInsert = uniqueTemperaments.map((temp) => {
      // temperamentsToInsert = [{ name: 'Curious' }, { name: 'Funny' }, ...]
      return {
        name: temp,
      };
    });

    allTemperaments = await Temperament.bulkCreate(temperamentsToInsert);
  }

  return res.status(200).send(allTemperaments); // RETORNAME EL ESTADO OK
});

module.exports = router;
