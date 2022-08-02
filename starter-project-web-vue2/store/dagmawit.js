

import axios from 'axios';

const state = {
    blogPosts:[]
};
const getters = {
    allBlogPosts: state => state.blogPosts
};
const actions = {
    async fetchBlogPosts({commit}){
      const response = await axios.get('https://blog-app-backend.onrender.com/api/articles/all'); 
      commit('setBlogPosts',response.data); 
    }
};
const mutations = {
    setBlogPosts: (state,blogPosts) => (state.blogPosts=blogPosts)

};

export default{
    state,getters,actions,mutations

};

// Vue.use(Vuex);

// export default new Vuex.Store({
// modules:{
//     blogPosts
// }

// })
