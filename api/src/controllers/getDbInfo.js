const { Dog } = require("../db");
const { Temperament } = require("../db");

module.exports = async function getDbInfo() {
  // funcion async para traerme la base datos
  return await Dog.findAll({
    // func sequelize que me traiga todo
    include: {
      // incluyendo tabla temperamento, con el atrributo nombre,
      model: Temperament,
      attributes: ["name"],
      through: {
        // tabla intermedia que me traiga todos los atributos.
        attributes: [],
      },
    },
  });
};
