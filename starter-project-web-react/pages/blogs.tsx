import * as React from 'react';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Link from 'next/link';

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
                "id": 12
              },
              {
                "title": "good man!",
                "body" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda a rerum quibusdam eligendi doloribus esse aspernatur sit dolorum? Id perferendis excepturi officia quia. Beatae porro natus aliquam deleniti perferendis illum!",
                "author": "yoshi",
                "id": 2
              },      
              {
                "title": "good man!",
                "body" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda a rerum quibusdam eligendi doloribus esse aspernatur sit dolorum? Id perferendis excepturi officia quia. Beatae porro natus aliquam deleniti perferendis illum!",
                "author": "yoshi",
                "id": 2
              }, 
        ]
    return (  
        <div className="blog-list">
            <p></p>
            <p></p>
           
              <Stack spacing={2} direction="row">
                  <a href="#sports"><Button variant="outlined">Sports</Button></a>
                  <a href="#business"><Button variant="outlined">Business</Button></a>
                  <a href="#enviroment"><Button variant="outlined">Enviroment</Button></a>
              </Stack>
             
            <h2 id="sports">Sports </h2>
            {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
            <Box
              sx={{
                width: 500,
                height: 260,
                '&:hover': {
                  boxShadow: 1,
                  backgroundColor: '',
                  opacity: [0.9, 0.8, 0.7],
                  borderBottom: 1,
                },
              }}
            >
                <h2>{blog.title}</h2>
                <div className="logo">
                  <Image src="/aot.png" width={128} height={77} />
                </div> 
                <p>{blog.body}</p>
                <h1>{blog.author}</h1>  
            </Box> 
            </div>
        ))}
        &nbsp;
        
        <h2 id="business">Business </h2>
            {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
            <Box
              sx={{
                width: 500,
                height: 260,
                '&:hover': {
                  boxShadow: 1,
                  backgroundColor: '',
                  opacity: [0.9, 0.8, 0.7],
                  borderBottom: 1,
                },
              }}
            >
                <h2>{blog.title}</h2>
                <div className="logo">
                  <Image src="/aot.png" width={128} height={77} />
                </div> 
                <p>{blog.body}</p>
                <h1>{blog.author}</h1>  
            </Box> 
            </div>
        ))}
        <h2 id = "enviroment">Enviroment </h2>
            {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
            <Box
              sx={{
                width: 500,
                height: 260,
                '&:hover': {
                  boxShadow: 1,
                  backgroundColor: '',
                  opacity: [0.9, 0.8, 0.7],
                  borderBottom: 1,
                },
              }}
            >
                <h2>{blog.title}</h2>
                <div className="logo">
                  <Image src="/aot.png" width={128} height={77} />
                </div> 
                <p>{blog.body}</p>
                <h1>{blog.author}</h1>  
            </Box> 
            </div>
        ))}
        </div>
    );
}
 
export default Bloglist;