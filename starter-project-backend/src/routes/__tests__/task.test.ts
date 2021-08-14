import Task, {ITask} from "../../models/task";
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

describe("Tasks", () => {
    it("should put task by id", async () => {
        expect.assertions(3);
        const sampleTask = new Task({
            title: "Sample Title",
            isComplete: false
        });
        const data = await sampleTask.save();

        const new_object = {title: "Improved Title", isComplete: true}
        const res = await agent
            .put(`/api/tasks/${data._id}`)
            .send(new_object);
        const newTask = res.body?.data;
        expect(res.statusCode).toEqual(201);
        expect(newTask?.title).toEqual(new_object.title);
        expect(newTask?.isComplete).toEqual(new_object.isComplete);
    });

    it("returns status code 200 if completed tasks are found", async () => {
        expect.assertions(1);
        const res = await agent.get('/api/tasks/Completed-Tasks');
        
        expect(res.statusCode).toEqual(200);
    });

});
