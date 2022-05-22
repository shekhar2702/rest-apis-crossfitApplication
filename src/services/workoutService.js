const db = require("../databases/Workouts");
const { v4: uuid } = require("uuid");

const getAllWorkouts = () => {
  return db.getAllWorkouts();
};

const getOneWorkout = (workoutId) => {
  return db.getOneWorkout(workoutId);
};

const createNewWorkout = async (newWorkout) => {
  const workOutToInsert = {
    ...newWorkout,
    id: uuid(),
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };
  try {
    const insertedWorkout = db.createNewWorkout(workOutToInsert);
    return insertedWorkout;
  } catch (error) {
    console.log(error);
  }
  // console.log(insertedWorkout);
};

const updateOneWorkout = (workoutId, changes) => {
  const updatedWorkout = db.updateOneWorkout(workoutId, changes);
  return updatedWorkout;
};

const deleteOneWorkout = (workoutId) => {
  db.deleteOneWorkout(workoutId);
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  updateOneWorkout,
  deleteOneWorkout,
  createNewWorkout,
};
