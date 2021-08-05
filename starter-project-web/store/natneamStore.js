import axios from "axios";

export const state = () => ({
  posts: []
});

export const mutations = {
  updatePosts(state, posts) {
    state.posts = posts;
  },
  addPost(state, post) {
    state.posts = post.concat(state.posts);
  },
  removePost(state, id) {
    state.posts = state.posts.filter(value =>
      value.id !== id ? value : undefined
    );
  }
};

export const actions = {
  async fetchPostsFromApi(context) {
    let data = await axios("https://jsonplaceholder.typicode.com/posts");
    let rawData = data.data.slice(0, 20);

    rawData.forEach(post => {
      post.show = false;
      post.comments = [];
    });

    context.commit("updatePosts", rawData);
  }
};
