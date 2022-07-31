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
        commit("setBlogs")
    },
    createBlog({ commit }){
        commit("createBlog", state.blogs)
    },
    updateBlog({ commit }){
        commit("updateBlog", state.blogs)
    },
    deleteBlog({ commit }){
        commit("deleteBlog", state.blogs)
    }
}

export const mutuations = {
    setBlogs: (state) => null,
    createBlog: (state, blog) => {state.blogs.unshift(blog)},
    updateBlog: (state, blog) => {
        for(let index=0; index < state.blogs.length; index++){
            if (state.blogs[index].id === blog.id){
                state.blogs[index] = blog
            }
        }
    },
    deleteBlog: (state, blog) => {
        const index = state.blogs.indexOf(blog)
        if (index !== -1) state.blogs.splice(index, 1)
    }
}

