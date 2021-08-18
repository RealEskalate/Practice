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

/**
 * test getAllNotes function
 */

 describe("GET /api/posts", () => {
  it("get all notes", async () => {
    expect.assertions(3);

    // mock data
    const note1: INoteDocument = new Note(
      {
        title: 'title1',
        detail: 'detail1',
      }
    );

    const note2: INoteDocument = new Note(
      {
        title: 'title2',
        detail: 'detail2',
      }
    );

    // save test post to in-memory db
    await note1.save();
    await note2.save();

    const res = await agent.get('/api/notes');
    const notes = res.body;

    expect(res.statusCode).toEqual(200);
    expect(res.headers['content-type']).toEqual('application/json; charset=utf-8');
    expect(notes.length).toEqual(2);
  });
});

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


describe('delete /delete/:id', () => {

  it("delete note by id", async()=>{
    // mock data
    const note1: INoteDocument = new Note(
      {
        title: 'note1',
        detail: 'detail1',
      }
    );

    const note = await note1.save();
    const response = await agent.delete(`/api/notes/delete/${note._id}`);
    expect(response.statusCode).toEqual(200);
    

  });
  
});

