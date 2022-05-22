const express = require("express");
const router = express.Router();
const workOutController = require("../../controller/workoutController");
const apicache = require("apicache");
const cache = apicache.middleware;

router.get("/", cache("2 minutes"), workOutController.getAllWorkouts);

router.get("/:workoutId", workOutController.getOneWorkout);

router.post("/", workOutController.createNewWorkout);

router.patch("/:workoutId", workOutController.updateOneWorkout);

router.delete("/:workoutId", workOutController.deleteOneWorkout);

module.exports = router;
