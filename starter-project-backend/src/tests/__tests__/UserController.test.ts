import { STATUS_CODES } from "http";
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../../server");
chai.use(chaiHttp);

describe("User API", () => {
  beforeEach(() => {});

  it("It should get all users", async () => {
    let response = await chai.request(server).get("/api/users");

    expect(response.status).toEqual(200);
    expect(response.body).toMatchObject;
    expect(response.body.data.length).toBeGreaterThan(1);
  });
});
