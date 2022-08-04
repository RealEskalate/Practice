// import axios from 'axios'

const state = {
    blogs: [
        {
            _id: Math.floor(Math.random() * 1000),
            title: "The Big Bang Theory",
            author: "Zerubabel",
            description: "The Big Bang theory describes how the universe expanded from an initial state of high density and temperature.[1] It is the prevailing cosmological model explaining the evolution of the observable universe from the earliest known periods through its subsequent large-scale form.[2][3][4] The model offers a comprehensive explanation for a broad range of observed phenomena, including the abundance of light elements, the cosmic microwave background (CMB) radiation, and large-scale structure.",
            createdAt: Date.now()
        },
        {
            _id: Math.floor(Math.random() * 1000),
            title: "The Big Bang Theory",
            author: "Zerubabel",
            description: "The Big Bang theory describes how the universe expanded from an initial state of high density and temperature.[1] It is the prevailing cosmological model explaining the evolution of the observable universe from the earliest known periods through its subsequent large-scale form.[2][3][4] The model offers a comprehensive explanation for a broad range of observed phenomena, including the abundance of light elements, the cosmic microwave background (CMB) radiation, and large-scale structure.",
            createdAt: Date.now()
        },
        {
            _id: Math.floor(Math.random() * 1000),
            title: "The Big Bang Theory",
            author: "Zerubabel",
            description: "The Big Bang theory describes how the universe expanded from an initial state of high density and temperature.[1] It is the prevailing cosmological model explaining the evolution of the observable universe from the earliest known periods through its subsequent large-scale form.[2][3][4] The model offers a comprehensive explanation for a broad range of observed phenomena, including the abundance of light elements, the cosmic microwave background (CMB) radiation, and large-scale structure.",
            createdAt: Date.now()
        },
        {
            _id: Math.floor(Math.random() * 1000),
            title: "The Big Bang Theory",
            author: "Zerubabel",
            description: "The Big Bang theory describes how the universe expanded from an initial state of high density and temperature.[1] It is the prevailing cosmological model explaining the evolution of the observable universe from the earliest known periods through its subsequent large-scale form.[2][3][4] The model offers a comprehensive explanation for a broad range of observed phenomena, including the abundance of light elements, the cosmic microwave background (CMB) radiation, and large-scale structure.",
            createdAt: Date.now()
        },
        {
            _id: Math.floor(Math.random() * 1000),
            title: "The Big Bang Theory",
            author: "Zerubabel",
            description: "The Big Bang theory describes how the universe expanded from an initial state of high density and temperature.[1] It is the prevailing cosmological model explaining the evolution of the observable universe from the earliest known periods through its subsequent large-scale form.[2][3][4] The model offers a comprehensive explanation for a broad range of observed phenomena, including the abundance of light elements, the cosmic microwave background (CMB) radiation, and large-scale structure.",
            createdAt: Date.now()
        },
        {
            _id: Math.floor(Math.random() * 1000),
            title: "The Big Bang Theory",
            author: "Zerubabel",
            description: "The Big Bang theory describes how the universe expanded from an initial state of high density and temperature.[1] It is the prevailing cosmological model explaining the evolution of the observable universe from the earliest known periods through its subsequent large-scale form.[2][3][4] The model offers a comprehensive explanation for a broad range of observed phenomena, including the abundance of light elements, the cosmic microwave background (CMB) radiation, and large-scale structure.",
            createdAt: Date.now()
        },
        {
            _id: Math.floor(Math.random() * 1000),
            title: "The Big Bang Theory",
            author: "Zerubabel",
            description: "The Big Bang theory describes how the universe expanded from an initial state of high density and temperature.[1] It is the prevailing cosmological model explaining the evolution of the observable universe from the earliest known periods through its subsequent large-scale form.[2][3][4] The model offers a comprehensive explanation for a broad range of observed phenomena, including the abundance of light elements, the cosmic microwave background (CMB) radiation, and large-scale structure.",
            createdAt: Date.now()
        },
        {
            _id: Math.floor(Math.random() * 1000),
            title: "The Big Bang Theory",
            author: "Zerubabel",
            description: "The Big Bang theory describes how the universe expanded from an initial state of high density and temperature.[1] It is the prevailing cosmological model explaining the evolution of the observable universe from the earliest known periods through its subsequent large-scale form.[2][3][4] The model offers a comprehensive explanation for a broad range of observed phenomena, including the abundance of light elements, the cosmic microwave background (CMB) radiation, and large-scale structure.",
            createdAt: Date.now()
        },
        {
            _id: Math.floor(Math.random() * 1000),
            title: "The Big Bang Theory",
            author: "Zerubabel",
            description: "The Big Bang theory describes how the universe expanded from an initial state of high density and temperature.[1] It is the prevailing cosmological model explaining the evolution of the observable universe from the earliest known periods through its subsequent large-scale form.[2][3][4] The model offers a comprehensive explanation for a broad range of observed phenomena, including the abundance of light elements, the cosmic microwave background (CMB) radiation, and large-scale structure.",
            createdAt: Date.now()
        },
        {
            _id: Math.floor(Math.random() * 1000),
            title: "The Big Bang Theory",
            author: "Zerubabel",
            description: "The Big Bang theory describes how the universe expanded from an initial state of high density and temperature.[1] It is the prevailing cosmological model explaining the evolution of the observable universe from the earliest known periods through its subsequent large-scale form.[2][3][4] The model offers a comprehensive explanation for a broad range of observed phenomena, including the abundance of light elements, the cosmic microwave background (CMB) radiation, and large-scale structure.",
            createdAt: Date.now()
        },
        {
            _id: Math.floor(Math.random() * 1000),
            title: "The Big Bang Theory",
            author: "Zerubabel",
            description: "The Big Bang theory describes how the universe expanded from an initial state of high density and temperature.[1] It is the prevailing cosmological model explaining the evolution of the observable universe from the earliest known periods through its subsequent large-scale form.[2][3][4] The model offers a comprehensive explanation for a broad range of observed phenomena, including the abundance of light elements, the cosmic microwave background (CMB) radiation, and large-scale structure.",
            createdAt: Date.now()
        },
        {
            _id: Math.floor(Math.random() * 1000),
            title: "The Big Bang Theory",
            author: "Zerubabel",
            description: "The Big Bang theory describes how the universe expanded from an initial state of high density and temperature.[1] It is the prevailing cosmological model explaining the evolution of the observable universe from the earliest known periods through its subsequent large-scale form.[2][3][4] The model offers a comprehensive explanation for a broad range of observed phenomena, including the abundance of light elements, the cosmic microwave background (CMB) radiation, and large-scale structure.",
            createdAt: Date.now()
        }
    ], 
    user: null
}

const getters = {
    allBlogs: state=>state.blogs,
}
const actions = {
    addBlog({commit}, data){
        commit('addBlog', data)
    },
    deleteBlog({commit}, id){
        commit('deleteBlog', id)
    },
    editBlog({commit}, data){
        commit('editBlog', data)
    }
}
const mutations = {
    setBlogs(state, blogs){
        state.blogs = blogs
    },
    addBlog(state, blog){
        state.blogs.unshift(blog)
    },
    deleteBlog(state, id){
        state.blogs = state.blogs.filter(blog=>blog._id !== id)
    },
    editBlog(state, data){
        for(let i=0; i < state.blogs.length;i++){
            if(state.blogs[i]._id === data._id){
                state.blogs.splice(i, 1, data)
            }
        }
    }
}

export default {
    state, getters, actions, mutations
}
