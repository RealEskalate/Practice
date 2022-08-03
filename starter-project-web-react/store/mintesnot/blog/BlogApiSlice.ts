import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


interface Blog
    {
        _id: "",
        authorUserId: {
          fullName: "",
          email: "",
          __v: 0
        },
        title: "",
        content: "",
        imageUrls: [],
        rating: {},
        description: "",
        createdAt: "",
        updatedAt: "",
        __v: 0
      
}

export const blogApiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://blog-app-backend.onrender.com/api'
    }),
    endpoints(builder){
        return {
            fetchBlogs: builder.query<Blog[], number|void>({
                query(limit = 10){
                    return `/articles/all`
                }
            }),
            fetchSinglBlog: builder.query<Blog, string|void>({
                query(id) {
                    return `/articles/${id}`
                },
            })
        }
    }
})

export const {useFetchBlogsQuery, useFetchSinglBlogQuery} = blogApiSlice