const workOutService = require("../services/workoutService");

const getAllWorkouts = (req, res) => {
  const allWorkOuts = workOutService.getAllWorkouts();
  //   console.log(allWorkOuts);
  res.send({ status: "ok", data: allWorkOuts });
};

const getOneWorkout = (req, res) => {
  const {
    params: { workoutId },
  } = req;
  // console.log(workoutId);
  const workoutFoundById = workOutService.getOneWorkout(workoutId);
  res.status(200).send({ status: "ok", data: workoutFoundById });
};

const createNewWorkout = async (req, res) => {
  const body = req.body;
  // console.log("data from client", req.body);
  if (
    !body.name ||
    !body.mode ||
    !body.equipment ||
    !body.exercises ||
    !body.trainerTips
  ) {
    res.status(404).send({ status: "error in data" });
    // res.send({ status: "error in data" }).status(404);
  }
  const newWorkout = {
    name: body.name,
    mode: body.mode,
    equipment: body.equipment,
    exercises: body.exercises,
    trainerTips: body.trainerTips,
  };
  try {
    const createdWorkout = await workOutService.createNewWorkout(newWorkout);
    res.status(201).send({ status: "created", data: createdWorkout });
  } catch (error) {
    console.log(error);
  }
};

const updateOneWorkout = (req, res) => {
  const {
    body,
    params: { workoutId },
  } = req;
  if (!workoutId) {
    return;
  }
  const updatedWorkout = workOutService.updateOneWorkout(workoutId, body);
  res.send({ status: "OK", data: updatedWorkout });
};

const deleteOneWorkout = (req, res) => {
  const {
    params: { workoutId },
  } = req;
  if (!workoutId) {
    return;
  }
  workOutService.deleteOneWorkout(workoutId);
  res.status(204).send({ status: "OK" });
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
