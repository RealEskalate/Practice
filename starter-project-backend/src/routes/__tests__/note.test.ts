import Note, { INoteDocument } from "../../models/note";
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

describe("Note", () => {
  it("get note by id", async () => {
    expect.assertions(3);

    // mock data
    const title = "some title";
    const detail = "some detail";

    const note: INoteDocument = new Note();
    note.title = title;
    note.detail = detail;
    const data = await note.save();

    const res = await agent.get(`/api/notes/${data._id}`)
    const savedNote = res.body;
    
    expect(res.statusCode).toEqual(200);
    expect(savedNote?.title).toEqual(title);
    expect(savedNote?.detail).toEqual(detail);
  });

});

describe("Note", () => {
  it("update note by id", async () => {
      expect.assertions(3);
      const sampleNote = new Note({
          title: "Sample Title",
          detail: "Sample detail"
      });
      const data = await sampleNote.save();

      const new_object = {title: "Improved Title", detail: "Improved detail"}
      const res = await agent.put(`/api/notes/${data._id}`).send(new_object);
          
      const newNote = res.body?.data;
      expect(res.statusCode).toEqual(201);
      expect(newNote?.title).toEqual(new_object.title);
      expect(newNote?.detail).toEqual(new_object.detail);
  });
});
