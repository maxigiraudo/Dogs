const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("temperament", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};

// ACA ME CREE LAS TABLAS, TIPO DE DATOS Y SUS ARGUMENTOS.
// ESQUEMA PARA VALIDAR DATOS.
// EL ID SE CREA AUTOMATICAMENTE.
// SE RELACIONAN. POR ESO SE CREA 1 TABLA X RELACION.
// SE ASOCIA CON TABLA INTERMEDIA, POR SEQUELIEZE.
