import User, { UserI } from "../../models/User";
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../../server");
chai.use(chaiHttp);
let mongoose = require("mongoose");
import * as dbHandler from "../setupdb";

beforeAll(async () => {
  await dbHandler.connect();
});

beforeEach(async () => {
  user = new User({
    _id: mongoose.Types.ObjectId(),
    username: `${Date.now().toString()} ${Math.random()}`,
    password: "$2a$10$efmxm5o1v.inI.eStGGxgO1zHk.L6UoA9LEyYrRPhWkmTQPX8.NKO",
    firstName: "Abenezer",
    lastName: "Belay",
  });
  await user.save();

  user2 = new User({
    _id: mongoose.Types.ObjectId(),
    username: `${Date.now().toString()} ${Math.random()}`,
    password: "$2a$10$efmxm5o1v.inI.eStGGxgO1zHk.L6UoA9LEyYrRPhWkmTQPX8.NKO",
    firstName: "Kebede",
    lastName: "Abebe",
  });

  await user2.save();
});

afterEach(async () => {
  await User.findByIdAndDelete(user._id);
  await User.findByIdAndDelete(user2._id);
});

describe("User API", () => {
  let user: UserI;
  let user2: UserI;

  it("It should get all users", async () => {
    let response = await chai.request(server).get("/api/users");
    expect(response.status).toEqual(200);
    expect(response.body).toMatchObject;
    expect(response.body.data.length).toBeGreaterThan(1);
  });

  it("It should get user details", async () => {
    let response = await chai.request(server).get("/api/users/" + user._id);

    expect(response.status).toEqual(200);
    expect(response.body).toMatchObject;
    expect(response.body.data).toMatchObject;
    expect(response.body.data[0]._id).toEqual("" + user.id);
  });

  it("It should create user", async () => {
    let response = await chai
      .request(server)
      .post("/api/users/signup")
      .send({
        username: "test" + Date.now(),
        password: "testings",
        firstName: "testFirst" + Date.now(),
        lastName: "testLast" + Date.now(),
      });

    expect(response.status).toEqual(200);
    expect(response.body).toHaveProperty("username");
    expect(response.body).toHaveProperty("password");
    expect(response.body).toHaveProperty("firstName");
    expect(response.body).toHaveProperty("lastName");
  });

  it("It should not allow password length less than 8", async () => {
    let response = await chai
      .request(server)
      .post("/api/users/signup")
      .send({
        username: "test" + Date.now(),
        password: "test",
        firstName: "testFirst" + Date.now(),
        lastName: "testLast" + Date.now(),
      });
    console.log("response.message " + response.message);
    expect(response.status).toEqual(422);
  });

  it("It should update user", async () => {
    let response = await chai
      .request(server)
      .patch("/api/users")
      .send({
        id: user._id,
        username: "Testing " + Date.now(),
        password: "88888888",
        lastName: "lastName",
        firstName: "firstName",
      });

    console.log("response.data" + response.data);
    expect(response.status).toEqual(200);
    expect(response.body).toHaveProperty("username");
    expect(response.body).toHaveProperty("password");
    expect(response.body).toHaveProperty("lastName");
    expect(response.body).toHaveProperty("firstName");
  });

  it("It should delete user", async () => {
    let toBeDeleted = await chai
      .request(server)
      .post("/api/users/signup")
      .send({
        username: "test" + Date.now(),
        password: "testings",
        firstName: "testFirst" + Date.now(),
        lastName: "testLast" + Date.now(),
      });

    let response = await chai.request(server).delete("/api/users/").send({
      _id: toBeDeleted.body._id,
    });

    expect(response.status).toEqual(201);
  });
});
