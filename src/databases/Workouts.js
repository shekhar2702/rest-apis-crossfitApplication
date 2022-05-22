const DB = require("./db.json");
const { saveToDatabase } = require("./util");

const getAllWorkouts = () => {
  return DB.workouts;
};

const createNewWorkout = async (newWorkout) => {
  // console.log(newWorkout);
  // const isAdded =
  //   DB.workouts.findIndex((workout) => {
  //     workout.name == newWorkout.name;
  //   }) > -1;
  let isAdded = false;
  DB.workouts.forEach((workout) => {
    if (workout.name === newWorkout.name) {
      isAdded = true;
      return;
    }
  });

  if (isAdded) {
    console.log("Already present");
    return;
  }
  DB.workouts.push(newWorkout);
  console.log("befor saving", DB);
  try {
    await saveToDatabase(DB);
    console.log("after saving", DB);
    return newWorkout;
  } catch (err) {
    console.log(err);
  }
};

const getOneWorkout = (workoutId) => {
  let foundObject = {};
  DB.workouts.forEach((workout) => {
    if (workout.id === workoutId) {
      foundObject = workout;
      return;
    }
  });
  return foundObject;
};

const updateOneWorkout = (workoutId, changes) => {
  const indexForUpdate = DB.workouts.findIndex(
    (workout) => workout.id === workoutId
  );
  if (indexForUpdate === -1) {
    return;
  }
  const updatedWorkout = {
    ...DB.workouts[indexForUpdate],
    ...changes,
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };
  DB.workouts[indexForUpdate] = updatedWorkout;
  saveToDatabase(DB);
  return updatedWorkout;
};

const deleteOneWorkout = (workoutId) => {
  const indexForDeletion = DB.workouts.findIndex(
    (workout) => workout.id === workoutId
  );
  if (indexForDeletion === -1) {
    return;
  }
  DB.workouts.splice(indexForDeletion, 1);
  saveToDatabase(DB);
};

module.exports = {
  getAllWorkouts,
  createNewWorkout,
  getOneWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
