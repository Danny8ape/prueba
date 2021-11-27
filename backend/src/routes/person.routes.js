const { Router } = require("express");
const controller = require("../controllers/person.controller");
const router = Router();

router.get("/persons", controller.getPersons);
router.get("/persons/:id", controller.getPersonById)
router.post("/addPerson", controller.addPerson);
router.delete("/persons/:id", controller.updatePerson);
router.put("/persons/:id", controller.updatePerson);

module.exports = router;
