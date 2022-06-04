const { Router } = require("express");
const router = Router();

router.get("/", async (req, res, next) => {
  res.send("Soy get en /temperament");
});

router.post("/", async (req, res, next) => {
  res.send("Soy post en /temperament");
});

router.put("/", async (req, res, next) => {
  res.send("Soy put en /temperament");
});

router.delete("/", async (req, res, next) => {
  res.send("Soy delete en /temperament");
});

module.exports = router;
