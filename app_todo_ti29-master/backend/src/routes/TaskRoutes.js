const express = require("express");
const router = express.Router();

const TaskValidation = require("../middlewares/TaskValidation");
const MacaddressValidation = require("../middlewares/MacaddressValidation");
const TaskController = require("../controller/TaskController");

router.post("/", TaskValidation, TaskController.create);

router.put("/:id", TaskValidation, TaskController.update);
router.put("/:id/:done", TaskController.done);

router.get('/:id', TaskController.show);
router.get('/filter/all',   MacaddressValidation, TaskController.all);
router.get('/filter/late',  MacaddressValidation, TaskController.late);
router.get('/filter/today', MacaddressValidation, TaskController.today);
router.get('/filter/week',  MacaddressValidation, TaskController.week);
router.get('/filter/month', MacaddressValidation, TaskController.month);
router.get('/filter/year', MacaddressValidation, TaskController);

router.delete('/:id', TaskController.delete);

module.exports = router;