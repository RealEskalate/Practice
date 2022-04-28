import React from 'react'
import Typography from '@mui/material/Typography';
import Image from 'next/image'

const Details = ({blog}) => {
  return (
    <div>
        <Typography variant="h2" component="div">
            {blog.title}
        </Typography>
        <Typography variant="subtitle1" gutterBottom component="div" mb={2}>
            Posted on <em>`{blog.created_at}`</em> by <b>{blog.author}</b>
        </Typography>
        <Image 
            src={blog.img} 
            layout='responsive'
            width={'100%'}
            height={'50%'}
            objectFit='cover' />
        
        <Typography variant="body1" gutterBottom mt={4}>
            {blog.content}
        </Typography>
    </div>
  )
}

export default Details