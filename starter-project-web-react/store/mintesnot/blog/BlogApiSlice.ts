import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {Blog, Comment} from '../../../types/Blog'

interface CreateBlog {
    token: string,
    body: {
        title: string,
        content: string
    }
}

export const blogApiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://blog-app-backend.onrender.com/api'
    }),
    tagTypes: ['Blog','Comment'],
    endpoints(builder){
        return {
            fetchBlogs: builder.query<Blog[], number|void>({
                query(limit = 10){
                    return `/articles/all`
                },
                providesTags: (result) =>
                    result
                    ? 
                        [
                        ...result.map(({ _id }) => ({ type: 'Blog', _id } as const)),
                        { type: 'Blog', id: 'LIST' },
                        ]
                    : 
                        [{ type: 'Blog', id: 'LIST' }],
                
            }),
            fetchSinglBlog: builder.query<Blog, string|void>({
                query(id) {
                    return `/articles/${id}`
                },
            }),
            createPost: builder.mutation<{}, CreateBlog>({
                query(param){
                    return {
                        url: '/articles',
                        method: 'POST',
                        headers: {'authorization': `Bearer ${param.token}`},
                        body:param.body,
                    }
                },
                invalidatesTags: [{ type: 'Blog', id:  'LIST' }],
            }),
            fetchComments: builder.query<Comment[], string|void>({
                query(id){
                    console.log(id)
                    return `/comments/${id}`
                },
                providesTags: (result) =>
                    result
                    ? 
                        [
                        ...result.map(({ _id }) => ({ type: 'Comment', _id } as const)),
                        { type: 'Comment', id: 'LIST' },
                        ]
                    : 
                        [{ type: 'Comment', id: 'LIST' }],
            })
        }
    }
})

export const {useFetchBlogsQuery, useFetchSinglBlogQuery, useCreatePostMutation, useFetchCommentsQuery} = blogApiSlice