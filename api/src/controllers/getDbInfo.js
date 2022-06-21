const { Dog } = require("../db");
const { Temperament } = require("../db");

module.exports = async function getDbInfo() {
  const infoDb = await Dog.findAll({
    include: {
      model: Temperament,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
  // console.log("INFO DB", infoDb);
  // if (infoDb.length) {
  //   infoDb = infoDb.map((dog) => {
  //     if (dog.dataValues && dog.dataValues.temperaments) {
  //       const temperament = dog.dataValues.temperaments;
  //     }
  //     return {
  //       ...dog,
  //       temperament,
  //     };
  //   });
  // }
  return infoDb;
};
