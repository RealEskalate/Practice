import axios from 'axios';
export const state = () =>({
    allPosts : [
        
    ],
    blogger : {
        name : "Meti Adane",
        description : "An aspiring third year software engineering student",
        img : '@/assets/meti.jpg',
        stars : '6'
    }
});

export const getters = {
    allPosts : (state) => {return state.allPosts},
    bloggerInfo : (state) => {return state.blogger}
};

export const actions = {

    async fetchTodos({ commit }) {
		const res = await axios.get(
			"https://jsonplaceholder.typicode.com/todos"
		);
        console.log("Fetch called")
		commit("setPosts", res.data);
	},
    async addPost ({ commit }, title) {
        const res = await axios.post("https://jsonplaceholder.typicode.com/todos", {
            title : title, 
            completed : false
        });

        commit('addNewPost', res.data);
    }, 

    async deletePost ({ commit }, id){
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)

        commit('removePost', id)
    },

    searchForPost ({ commit }, searchTerm){
        commit('searchPost', searchTerm.toLowerCase())
    }

};

export const mutations = {
    setPosts: (state, newPosts) => {
        (state.allPosts = newPosts)
        console.log("set state mutation called")
    }
        ,
    addNewPost: (state, newPost) => state.allPosts.unshift(newPost),
    removePost: (state, id) => {
        state.allPosts = state.allPosts.filter(post => post.id !== id)
    },
    searchPost: (state, searchTerm) =>{
        state.allPosts = state.allPosts.filter(post => {
            let postTitle = post.title.toLowerCase();
            
            return postTitle.includes(searchTerm);
        })
    }
};

