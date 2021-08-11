import Task, { ITask } from "../../models/task";
import * as dbHandler from "./../../tests/setupdb";
import request from "supertest";
import app from "../../app";

beforeAll(async () => {
    await dbHandler.connect();
});

afterEach(async () => {
  await dbHandler.clear()
});
afterAll(async () => {
  await dbHandler.disconnect()
});

const agent = request.agent(app);

describe("Task", () => {
  it("post note", async () => {
    expect.assertions(3);

    // mock data
    const title = "some title";
    const isComplete = false;

    const task: ITask = new Task();
    task.title = title;
    task.isComplete = isComplete;
    const data = await task.save();

    const res = await agent.get(`/api/tasks/${data._id}`)
    const savedTask = res.body;
    
    expect(res.statusCode).toEqual(200);
    expect(savedTask?.title).toEqual(title);
    expect(savedTask?.detail).toEqual(isComplete);
  });

});
