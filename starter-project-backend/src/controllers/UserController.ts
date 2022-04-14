// Sigin user
// signup user
const UserI = require("../models/User");

let db = Array<UserI>();
const user1: UserI = {
  firstName: "Abenezer",
  lastName: "Belay",
  username: "aben",
  password: "password",
  userId: 1,
};
const user2: UserI = {
  firstName: "Someone",
  lastName: "GrandParent",
  username: "someone",
  password: "password",
  userId: 2,
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
};

exports.getUserDetail = (req: any, res: any) => {
  let users = db;
  let id = parseInt(req.params.id);
  let result = undefined;
  for (let i = 0; i < users.length; i++) {
    if (users[i].userId === id) {
      result = users[i];
      break;
    }
  }

  let response = {
    data: result,
  };

  try {
    res.send(response);
  } catch (err: any) {
    res.status(500).send(err.toString());
  }
};
