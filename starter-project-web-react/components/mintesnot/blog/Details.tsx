import React from 'react'
import Moment from 'moment'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import { Blog } from '../../../types/Blog'

const Details = ({ ...blog }: Blog) => {
  const formattedDate = Moment(blog.createdAt).format('MMMM DD, YYYY')
  return (
    <div>
      <Typography variant="h2" component="div">
        {blog.title}
      </Typography>
      <Typography variant="subtitle1" gutterBottom component="div" mb={2}>
        Posted on <em>`{formattedDate}`</em> by{' '}
        <b>{blog.authorUserId.fullName}</b>
      </Typography>

      <Typography variant="body1" gutterBottom mt={4}>
        {blog.content}
      </Typography>

      {blog.imageUrls ? (
        blog.imageUrls.map((url, index) => (
          <Image
            key={index}
            src={url}
            layout="responsive"
            width={'100%'}
            height={'50%'}
            objectFit="cover"
            alt="alternative"
          />
        ))
      ) : (
        <></>
      )}
    </div>
  )
}

export default Details
