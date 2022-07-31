export const state = () => {
    return {
        blogs: [
            {
                id: 1,
                title: "State Management in Vuejs",
                content: "jfdskk djkljk; dslkjkjdsf kjljkfdskjlkj dfskjlkjjkfd lkjsjdkjfd l kjdfsjl"
            },
            {
                id: 2,
                title: "State Management in Vuejs",
                content: "jfdskk djkljk; dslkjkjdsf kjljkfdskjlkj dfskjlkjjkfd lkjsjdkjfd l kjdfsjl"
            },
            {
                id: 3,
                title: "State Management in Vuejs",
                content: "jfdskk djkljk; dslkjkjdsf kjljkfdskjlkj dfskjlkjjkfd lkjsjdkjfd l kjdfsjl"
            }
        ]
    }
}

export const actions = {
    getBlogs({ commit }){
        commit("getBlogs")
    },
    createBlog({ commit }, blog){
        commit("createBlog", blog)
    },
    updateBlog({ commit }, blog){
        commit("updateBlog", blog)
    },
    deleteBlog({ commit }, blog){
        commit("deleteBlog", blog)
    }
}

export const mutations = {
    getBlogs: (state) => state.blogs,
    createBlog: (state, blog) => {state.blogs.unshift(blog)},
    updateBlog: (state, blog) => {
        for(let index=0; index < state.blogs.length; index++){
            if (state.blogs[index].id === blog.id){
                state.blogs[index] = blog
            }
        }
    },
    deleteBlog: (state, blog) => {
		let indexOfBlog=-1;
		for(let index = 0; index < state.blogs.length; index++){
            if (state.blogs[index].id === blog.id){
				indexOfBlog = index
                break
            }
        }
        if (indexOfBlog !== -1) state.blogs.splice(indexOfBlog, 1)
    }
}

