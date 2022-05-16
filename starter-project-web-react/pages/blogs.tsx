import * as React from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import {getBlogs} from '../store/slices/blogs'
const Bloglist = () => {
    const blogs = useSelector((state) => getBlogs(state))
    return (  
        <div className="blog-list">
            <h2>Blogs </h2>
            {blogs.map((blog:{id :number, author:string, title:string, body:string}) => (
            <div className="blog-preview" key={blog.id}>        
            <Box
              sx={{
                width: 500,
                height: 180,
                '&:hover': {
                  boxShadow: 1,
                  backgroundColor: '',
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            >
                <h2>{blog.title}</h2>
                <p>{blog.body}</p>
                <h1>{blog.author}</h1>  
            </Box> 
            </div>
        ))}
        </div>
    );
}
 
export default Bloglist;