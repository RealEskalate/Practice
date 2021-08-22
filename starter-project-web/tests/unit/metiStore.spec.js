import axios from "axios";

jest.mock("axios", () => ({
  get: jest.fn(_url => {
    return new Promise(resolve => {
      if (mockError) throw Error("Axios mock Error");
      resolve(true);
    });
  })
}));

describe("Meti store", () => {
  let NuxtStore;
  let store;
  
  let todos = [{
    id: 1,
    title:
      "post 1",
    completed:true
  },
  {
    id: 2,
    title:
      "post 2",
    completed:true
  }
]

  let todo_item1 = {
    id: 1,
    title:
      "post 1",
    completed:true
  };

  let todo_item2 = {
    id: 2,
    title:
      "post 2",
    completed:true
  };

  beforeAll(async () => {
    const storePath = `${process.env.buildDir}/store.js`;
    NuxtStore = await import(storePath);
  });

  beforeEach(async () => {
    store = await NuxtStore.createStore();
  });

  describe("getters", () => {
    it("starts with empty array for posts", () => {
      let data = store.getters["meti/allPosts"];
      expect(data.length).toBe(0);
    });

    it("loads blogger information", ()=>{
        let bloggerData = store.getters["meti/bloggerInfo"];
        console.log(bloggerData)
        expect(Object.keys(bloggerData).length).toBe(4);
    })
  });

  describe("mutations", () => {
    it("Sets posts to Store ", () => {
      expect(store.getters["meti/allPosts"].length).toBe(0);
      store.commit("meti/setPosts", todos);
      expect(store.getters["meti/allPosts"]).toStrictEqual(todos);
    });

    it("Add new post", () => {
      expect(store.getters["meti/allPosts"].length).toBe(0);
      store.commit("meti/addNewPost", todo_item1);
      expect(store.getters["meti/allPosts"]).toStrictEqual([todo_item1]);
    });

    it("Remove to do with an id", () => {
      store.commit("meti/addNewPost", todo_item1);
      expect(store.getters["meti/allPosts"]).toStrictEqual([todo_item1]);

      store.commit("meti/removePost", 1);
      expect(store.getters["meti/allPosts"]).toStrictEqual([]);
    });

    it("search /filter out to do with an id", () => {
        store.commit("meti/addNewPost", todo_item1);
        store.commit("meti/addNewPost", todo_item2);
        expect(store.getters["meti/allPosts"].length).toBe(2);
  
        store.commit("meti/searchPost", 1);
        expect(store.getters["meti/allPosts"].length).toBe(1)
      });
  });

  describe("actions", () => {
    describe("fetch todos list", () => {
      
      it("fetch todos list", async () => {
      axios.get.mockResolvedValueOnce({data:todos});
      expect(store.getters["meti/allPosts"]).toStrictEqual([]);

        await store.dispatch("meti/fetchTodos");
        expect(store.getters["meti/allPosts"]).toStrictEqual(todos);
      });
    });

    describe("API Error on fetch todos", () => {
      axios.get.mockRejectedValue(new Error("Couldnt fetch"));

      it("contain empty array on API error for posts", async () => {
        await store.dispatch("meti/fetchTodos");
        expect(store.getters["meti/allPosts"]).toStrictEqual([]);
      });
    });
  });
});