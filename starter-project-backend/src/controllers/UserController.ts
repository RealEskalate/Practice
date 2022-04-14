// Sigin user
// signup user
const UserI = require("../models/User");

let db = Array<UserI>();
const user1: UserI = {
  firstName: "Abenezer",
  lastName: "Belay",
  username: "aben",
  password: "password",
};
const user2: UserI = {
  firstName: "Someone",
  lastName: "GrandParent",
  username: "someone",
  password: "password",
};

db.push(user1, user2);

exports.getAllUsers = (req: any, res: any) => {
  let users = db;
  let response = {
    data: users,
  };

  try {
    res.send(response);
  } catch (err: any) {
    res.status(500).send(err.toString());
  }
  return users;
};
