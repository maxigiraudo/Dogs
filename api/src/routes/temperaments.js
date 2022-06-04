const { Router } = require("express");
const router = Router(); // importo router
const apiInfo = require("../controllers/getApiInfo"); // me traigo el controlador de api.
const { Temperament } = require("../db"); // me traigo la tabla temperamento.

router.get("/", async (req, res) => {
  // ACA ME TRAIGO LA INFO DE TEMP

  const dogsApi = await apiInfo(); // ACA ME TRAIGO LA INFO DE LA API(CONTROLADOR).
  const dogsDb = dogsApi
    .map((dog) => dog.temperament)
    .join()
    .split(","); // ACA LO UNO Y LO SEPARO POR COMAS.
  const dogsDbTrim = dogsDb.map((dog) => dog.trim()); // ACA LE ELIMINO LOS ESPACIOS EN BLANCO

  dogsDbTrim.forEach((dog) => {
    //LO RECORRO CON UN FOR EACH.
    if (dog !== "") {
      // SI ES DIFERENTE AL STRING VACIO QUE BUSQUE O CREE. SI NO LO ENCUENTRA LO CREA.
      Temperament.findOrCreate({
        where: {
          name: dog,
        },
      });
    }
  });

  const allTemperaments = await Temperament.findAll(); // TRAEME TODOS LOS TEMP.

  return res.status(200).send(allTemperaments); // RETORNAME EL ESTADO OK
});

module.exports = router;
