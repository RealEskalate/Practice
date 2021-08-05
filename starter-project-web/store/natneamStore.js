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
