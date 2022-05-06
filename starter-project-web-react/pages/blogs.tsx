import * as React from 'react';
import Box from '@mui/material/Box';

const Bloglist = () => {
    const blogs = [
              {
                "title": "My First Blog",
                "body" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda a rerum quibusdam eligendi doloribus esse aspernatur sit dolorum? Id perferendis excepturi officia quia. Beatae porro natus aliquam deleniti perferendis illum!",
                "author": "mario",
                "id": 1
              },
              {
                "title": "Opening Party!",
                
                "body" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda a rerum quibusdam eligendi doloribus esse aspernatur sit dolorum? Id perferendis excepturi officia quia. Beatae porro natus aliquam deleniti perferendis illum!",
                "author": "yoshi",
                "id": 2
              },
              {
                "title": "Grand kalab",
                "body": "is a truly amazing master of all",
                "author": "Kalab",
                "id": 3
              },
              {
                "title": "good man!",
                "body" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda a rerum quibusdam eligendi doloribus esse aspernatur sit dolorum? Id perferendis excepturi officia quia. Beatae porro natus aliquam deleniti perferendis illum!",
                "author": "yoshi",
                "id": 4
              },      
              {
                "title": "good man!",
                "body" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda a rerum quibusdam eligendi doloribus esse aspernatur sit dolorum? Id perferendis excepturi officia quia. Beatae porro natus aliquam deleniti perferendis illum!",
                "author": "yoshi",
                "id": 5
              }, 
        ]
    return (  
        <div className="blog-list">
            <h2>Blogs </h2>
            {blogs.map((blog) => (
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