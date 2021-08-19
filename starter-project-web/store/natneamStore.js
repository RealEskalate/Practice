import axios from "axios";

export const state = () => ({
  posts: []
});

export const getters = {
  getPosts(state) {
    return state.posts;
  }
};

export const mutations = {
  updatePosts(state, posts) {
    state.posts = posts;
  },
  addPost(state, post) {
    state.posts = [post].concat(state.posts);
  },
  removePost(state, id) {
    state.posts = state.posts.filter(value =>
      value.id !== id ? value : undefined
    );
  }
};

export const actions = {
  async fetchPostsFromApi(context) {
    const data = await axios("https://jsonplaceholder.typicode.com/posts");
    const rawData = data.data.slice(0, 20);
    context.commit("updatePosts", rawData);
  }
};
