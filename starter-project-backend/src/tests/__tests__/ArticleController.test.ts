import app from "../../app"
import request from "supertest"
import * as dbHandler from "../setupdb";

const agent = request.agent(app)

let sampleArticle = {
  id:"atr_9812",
  author:{
    firstName: "gzachew",
    lastName: "demeke",
    bio: "I'm blah blah"
  },

  title: "how I got to do jobs using mars",
  content: "blah blah blah mars blah blah"
}
let sampleId = sampleArticle.id
let wrongId = "ksjflksdjfkd"

beforeAll(async () => {
  await dbHandler.connect()
})

afterEach(async () => {
    await dbHandler.clear()
})

afterAll(async () => {
  await dbHandler.disconnect()
})

describe("GET all Article ",()=>{

  test("GET all articles",async()=>{
    const res = await agent.get("/api/articles")
    console.log("after agent")
    expect(res.status).toEqual(200)
  });

})
describe("POST Article ",()=>{

  test("POST article",async()=>{
    const res = await agent.post("/api/articles").send(sampleArticle)
    console.log("after agent")
    expect(res.status).toEqual(200)
  });


});

describe("GET Article By ID",()=>{

  test("should return 200 status",async()=>{
    await agent.post("/api/articles").send(sampleArticle)
      
    const res = await agent.get("/api/articles/"+sampleId)
    console.log("after agent")
    expect(res.status).toEqual(200)
  });

  test("should return 404 status",async()=>{
    await agent.post("/api/articles").send(sampleArticle)
      
    const res = await agent.get("/api/articles/"+wrongId)
    console.log("after agent")
    expect(res.status).toEqual(404)

  });

});
describe("PATCH Article API",()=>{

  test("it should be 200",async()=>{
    await agent.post("/api/articles").send(sampleArticle)
      
    const res = await agent.patch("/api/articles/"+sampleId).send({title:"another"})
    console.log("after agent")
    expect(res.status).toEqual(200)
  });

  test("it should be 404",async()=>{
    await agent.post("/api/articles").send(sampleArticle)
      
    const res = await agent.patch("/api/articles/"+wrongId).send({title:"another"})
    console.log("after agent")
    expect(res.status).toEqual(404)
  });

  test("it should be 400 if the body json is wrong",async()=>{
    await agent.post("/api/articles").send(sampleArticle)
      
    const res = await agent.patch("/api/articles/"+sampleId).send({node:"another"})
    console.log("after agent")
    expect(res.status).toEqual(400)
  });


});
describe("DELET Article API",()=>{
  
  test("it should be 200",async()=>{
    await agent.post("/api/articles").send(sampleArticle)
      
    const res = await agent.delete("/api/articles/"+sampleId);
    console.log("after agent")
    expect(res.status).toEqual(200)
  });
});
  
