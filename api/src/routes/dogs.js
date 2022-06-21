const { Router } = require("express");
const { Dog, Temperament } = require("../db");
const getAllDogs = require("../controllers/getAllDogs");
const router = Router();

router.get("/", async (req, res) => {
  try {
    const { name } = req.query;
    const allDogs = await getAllDogs();

    if (name) {
      const filtrado = allDogs.filter((dog) =>
        dog.name.toLowerCase().includes(name.toLowerCase())
      );
      if (filtrado.length) return res.status(200).send(filtrado);
      return res.status(404).send("La raza ingresada no ha sido encontrada");
    }
    return res.status(200).send(allDogs);
  } catch (e) {
    return res.status(404).json(e);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (id) {
      const allDogs = await getAllDogs();
      const filtered = allDogs.filter((dog) => dog.id == id);
      if (filtered.length > 0) return res.status(200).send(filtered);
      return res.status(404).send("The ID was not found");
    }
  } catch (e) {
    console.log(e);
    return res.status(404).json(e);
  }
});

router.post("/new", async (req, res) => {
  try {
    const {
      name,
      heightMin,
      heightMax,
      weightMin,
      weightMax,
      lifeSpanMin,
      lifeSpanMax,
      temperament,
      img,
    } = req.body;

    const createdDog = await Dog.create({
      name,
      heightMin,
      heightMax,
      weightMin,
      weightMax,
      lifeSpanMin,
      lifeSpanMax,
      img,
    });

    let temperamentDB = await Temperament.findAll({
      where: { name: temperament },
    });

    createdDog.addTemperament(temperamentDB);

    return res.status(201).send("Se creo correctaemtnte");
  } catch (err) {
    console.log("ERROR", err);
    res.status(404).json(err);
  }
});

// router.put("/:id", async (req, res) => {
//   try {
//     let { id } = req.params;
//     let { name } = req.body;
//     await Dog.update(
//       { name },
//       {
//         where: {
//           id,
//         },
//       }
//     );
//     res.status(200).send("Usuario actualizado");
//   } catch (error) {
//     res.status(400).send("No se pudo hacer ni bosta");
//   }
// });

module.exports = router;
