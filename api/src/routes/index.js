const { Router } = require("express");
const dogsRoute = require("./dogs");
const temperamentRoute = require("./temperament");

const router = Router();

router.use("/dogs", dogsRoute);
router.use("/temperament", temperamentRoute);

module.exports = router;
