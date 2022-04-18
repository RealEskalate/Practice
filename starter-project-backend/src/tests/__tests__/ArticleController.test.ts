import app from "../../app"
import request from "supertest"
import * as dbHandler from "../setupdb";

const agent = request.agent(app)

let sampleArticle = {
  author:{
    firstName: "gzachew",
    lastName: "demeke",
    bio: "I'm blah blah"
  },

  title: "how I got to do jobs using mars",
  content: "blah blah blah mars blah blah"
}

let wrongArticle = {
  author:{
    wrong_firstName: "gzachew",
    wrong_lastName: "demeke",
    wrong_bio: "I'm blah blah"
  },

  title: "how I got to do jobs using mars",
  content: "blah blah blah mars blah blah"
}

let wrongAuthor= {
  author:{
    firstName: "gzachew",
    lastName: "demeke",
    bio: "I'm blah blah"
  },

  wrong_title: "how I got to do jobs using mars",
  worng_content: "blah blah blah mars blah blah"
}



beforeAll(async () => {
  await dbHandler.connect()
})

afterEach(async () => {
    await dbHandler.clear()
})

afterAll(async () => {
  await dbHandler.disconnect()
})


describe("POST Article ",()=>{

  test("POST article",async()=>{
    const res = await agent.post("/api/articles").send(sampleArticle)
    expect(res.status).toEqual(200)
  });
  
  test("POST article bad request wrong aticle shape",async()=>{
    const res = await agent.post("/api/articles").send(wrongArticle)
    expect(res.status).toEqual(400)
  });
  
  test("POST article bad request wrong author shape",async()=>{
    const res = await agent.post("/api/articles").send(wrongArticle)
    expect(res.status).toEqual(400)
  });


});

describe("GET all Article ",()=>{

  test("GET all articles",async()=>{

    await agent.post("/api/articles").send(sampleArticle)
    const res = await agent.get("/api/articles")
    expect(res.status).toEqual(200)

  });

})

describe("GET Article By ID",()=>{

  test("should return 200 status",async()=>{
    await agent.post("/api/articles").send(sampleArticle)

    const sampleRes = await agent.get("/api/articles")
    let sampleId = sampleRes.body.data[0]._id
    const res = await agent.get("/api/articles/"+sampleId)
    expect(res.status).toEqual(200)

  });


  test("should return 404 status",async()=>{
    await agent.post("/api/articles").send(sampleArticle)
  
    let wrongId = "825d207b5bc4207cc0d80844";

    const res = await agent.get("/api/articles/"+wrongId)
    expect(res.status).toEqual(404)

  });
  
  test("should return 500 status for invalied id",async()=>{
    await agent.post("/api/articles").send(sampleArticle)
  
    let invaliedId= "kdjfkdj";

    const res = await agent.get("/api/articles/" + invaliedId)
    expect(res.status).toEqual(500)

  });

});

describe("PATCH Article API",()=>{

  test("it should be 200",async()=>{
    await agent.post("/api/articles").send(sampleArticle)

    await agent.post("/api/articles").send(sampleArticle)
    const sampleRes = await agent.get("/api/articles")
    let sampleId = sampleRes.body.data[0]._id
    const res = await agent.patch("/api/articles/"+sampleId).send({title:"another"})
    expect(res.status).toEqual(200)
  });

  test("it should be 404 for bad requested id",async()=>{
    await agent.post("/api/articles").send(sampleArticle)
     

    let wrongId = "825d207b5bc4207cc0d80844";
    const res = await agent.patch("/api/articles/"+wrongId).send({title:"another"})
    expect(res.status).toEqual(404)
  });
  
  test("it should be 500 for invalied id",async()=>{
    await agent.post("/api/articles").send(sampleArticle)
    

    let invaliedId = "jjkljdfsdfd";
    const res = await agent.patch("/api/articles/"+invaliedId).send({title:"another"})
    expect(res.status).toEqual(500)
  });

  test("it should be 400 if the body json is wrong",async()=>{
    await agent.post("/api/articles").send(sampleArticle)
     
    await agent.post("/api/articles").send(sampleArticle)
    const sampleRes = await agent.get("/api/articles")
    let sampleId = sampleRes.body.data[0]._id
    const res = await agent.patch("/api/articles/"+sampleId).send({node:"another"})
    expect(res.status).toEqual(400)
  });


});

describe("DELET Article API",()=>{
 
  test("it should be 200",async()=>{
    await agent.post("/api/articles").send(sampleArticle)
     
    await agent.post("/api/articles").send(sampleArticle)
    const sampleRes = await agent.get("/api/articles")
    let sampleId = sampleRes.body.data[0]._id
    const res = await agent.delete("/api/articles/"+sampleId);
    expect(res.status).toEqual(200)
  });
 
  test("it should be 400 for bad request",async()=>{
    await agent.post("/api/articles").send(sampleArticle)
    
   let wrongId = "825d207b5bc4207cc0d80844";
    const res = await agent.delete("/api/articles/"+wrongId);
    expect(res.status).toEqual(400)
  });

  test("it should be 500 for invalied Id",async()=>{
    await agent.post("/api/articles").send(sampleArticle)
    
    let invaliedId = "lksjfklsd"
    const res = await agent.delete("/api/articles/" + invaliedId);
    expect(res.status).toEqual(500)
  });

});
   

