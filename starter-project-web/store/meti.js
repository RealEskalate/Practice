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

    async fetchTodos(context) {
        try{
            const res = await this.$axios.get(
                "https://jsonplaceholder.typicode.com/todos"
            );
            context.commit("setPosts", res.data);
        }catch (e){
            context.commit("setPosts", []);
        }
		
	},
    async addPost ({ commit }, title) {
        const res = await this.$axios.post("https://jsonplaceholder.typicode.com/todos", {
            title : title, 
            completed : false
        });

        commit('addNewPost', res.data);
    }, 

    async deletePost ({ commit }, id){
        await this.$axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)

        commit('removePost', id)
    },

    searchForPost ({ commit }, searchTerm){
        commit('searchPost', searchTerm.toLowerCase())
    }

};

export const mutations = {
    setPosts: (state, newPosts) => {
        (state.allPosts = newPosts)
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

