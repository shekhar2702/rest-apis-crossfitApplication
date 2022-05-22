const fs = require("fs");
const saveToDatabase = (DB) => {
  console.log("saving new entry......");
  // fs.writeFileSync("db.json", JSON.stringify(DB, null, 2), {
  //   encoding: "utf-8",
  // });
  let json = JSON.stringify(DB);
  // try {
  //   fs.writeFileSync("db.json", json);
  // } catch (err) {
  //   console.log(err);
  // }
  console.log(fs.existsSync("db.json"));
  fs.writeFile("./src/databases/db.json", json, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Data saved");
    }
  });
};

module.exports = { saveToDatabase };
