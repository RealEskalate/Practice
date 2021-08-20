import axios from "axios";

jest.mock("axios", () => ({
  get: jest.fn(_url => {
    return new Promise(resolve => {
      if (mockError) throw Error("Mock error");
      resolve(true);
    });
  })
}));

describe("store/natneamStore", () => {
  let NuxtStore;
  let store;

  let posts = [
    {
      userId: 1,
      id: 2,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body:
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      userId: 1,
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body:
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      userId: 1,
      id: 3,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body:
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }
  ];

  let post = {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body:
      "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  };

  beforeAll(async () => {
    const storePath = `${process.env.buildDir}/store.js`;
    NuxtStore = await import(storePath);
  });

  beforeEach(async () => {
    store = await NuxtStore.createStore();
  });

  describe("getters", () => {
    it("at start data shall be empty array", () => {
      let data = store.getters["natneamStore/getPosts"];
      expect(data.length).toBe(0);
    });
  });

  describe("mutations", () => {
    it("updating posts using updatePosts mutation", () => {
      expect(store.getters["natneamStore/getPosts"].length).toBe(0);
      store.commit("natneamStore/updatePosts", posts);
      expect(store.getters["natneamStore/getPosts"]).toBe(posts);
    });

    it("adding post using addPost mutation", () => {
      expect(store.getters["natneamStore/getPosts"].length).toBe(0);
      store.commit("natneamStore/addPost", post);
      expect(store.getters["natneamStore/getPosts"]).toStrictEqual([post]);
    });

    it("removing post using removePost mutation", () => {
      // first adding posts
      store.commit("natneamStore/updatePosts", posts);
      expect(store.getters["natneamStore/getPosts"]).toStrictEqual(posts);
      //remove a post with id 1
      store.commit("natneamStore/removePost", 1);
      expect(store.getters["natneamStore/getPosts"]).toStrictEqual(
        posts.filter(value => (value.id !== 1 ? value : undefined))
      );
    });
  });

  describe("actions", () => {
    describe("fetchPostsFromApi when successful", () => {
      axios.get.mockResolvedValueOnce({ data: posts });

      it("fetchPostsFromApi should update posts state in the store", async () => {
        await store.dispatch("natneamStore/fetchPostsFromApi");
        expect(store.getters["natneamStore/getPosts"]).toStrictEqual(posts);
      });
    });

    describe("fetchPostsFromApi when failed", () => {
      axios.get.mockRejectedValue(new Error("api error"));

      it("should update posts state in the store with empty array", async () => {
        await store.dispatch("natneamStore/fetchPostsFromApi");
        expect(store.getters["natneamStore/getPosts"]).toStrictEqual([]);
      });
    });
  });
});
