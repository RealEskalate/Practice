import React, { useState } from 'react'
import { Button, Typography } from '@mui/material'
import BlogPostDialog from './BlogPostDialog'

export default function PostBlog(props: any) {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        <Typography fontWeight="fontWeightBold" color="text.secondary">
          Post Blog
        </Typography>
      </Button>
      <BlogPostDialog open={open} handleClose={handleClose} />
    </div>
  )
}
