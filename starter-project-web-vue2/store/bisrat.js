import axios from 'axios';


export const state = () => {
    return {
		blog: null,
		formOpen: false,
		blogDetail: {
			_id: null,
			title: "",
			content: ""
		},
        blogs: [
            {
                _id: 1,
                title: "State Management in Vuejs",
                content: "jfdskk djkljk; dslkjkjdsf kjljkfdskjlkj dfskjlkjjkfd lkjsjdkjfd l kjdfsjl"
            },
            {
                _id: 2,
                title: "State Management in Vuejs",
                content: "jfdskk djkljk; dslkjkjdsf kjljkfdskjlkj dfskjlkjjkfd lkjsjdkjfd l kjdfsjl"
            },
            {
                _id: 3,
                title: "State Management in Vuejs",
                content: "jfdskk djkljk; dslkjkjdsf kjljkfdskjlkj dfskjlkjjkfd lkjsjdkjfd l kjdfsjl"
            }
        ]
    }
}

export const actions = {
    async getBlogs({ commit }){
		const response = await axios.get(
		  'https://blog-app-backend.onrender.com/api/articles/all'
		)
		console.log(response)
		// if (response.statusCode === 200)
			commit("getBlogs", response.data)
    },
    createBlog({ commit }, blog){
        commit("createBlog", blog)
    },
    updateBlog({ commit }, blog){
        commit("updateBlog", blog)
    },
    deleteBlog({ commit }, blog){
        commit("deleteBlog", blog)
    },
	setBlog({ commit }, blog){
		commit("setBlog", blog)
	},
	setFormOpen({ commit }, newStat){
		commit("setFormOpen", newStat)
	},
	setBlogDetail({ commit }, blog){
		commit("setBlogDetail", blog)
	}
}

export const mutations = {
    getBlogs: (state, blogs) => {
		state.blogs = blogs
		console.log("State.blogs")
		console.log(state.blogs)
	
	},
    createBlog: (state, blog) => {
		blog._id = state.blogs.length
		state.blogs.unshift(blog)},
    updateBlog: (state, blog) => {
        for(let index=0; index < state.blogs.length; index++){
            if (state.blogs[index]._id === blog._id){
                state.blogs[index] = blog
            }
        }
    },
    deleteBlog: (state, blog) => {
		let indexOfBlog=-1;
		for(let index = 0; index < state.blogs.length; index++){
            if (state.blogs[index]._id === blog._id){
				indexOfBlog = index
                break
            }
        }
        if (indexOfBlog !== -1) state.blogs.splice(indexOfBlog, 1)
    },
	setBlog: (state, blog) => {state.blog = blog},
	setFormOpen: (state, newStat) => {state.formOpen = newStat},
	setBlogDetail: (state, blog) => {state.blogDetail = blog}
}

