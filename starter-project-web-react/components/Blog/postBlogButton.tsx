import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';
import BlogPostDialog from './blogPostDialog';
import { useSelector, useDispatch } from 'react-redux';
import { getBlogs } from '../../store/slices/blogs';

export default function PostBlog(props:any) {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false);
  const blogs = useSelector((state) => getBlogs(state as any))
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button    variant="outlined" onClick={handleClickOpen}>
      <Typography fontWeight="fontWeightBold"  color="text.secondary">
          Post Blog
        </Typography>
      </Button>
      <BlogPostDialog open={open} handleClose={handleClose} />
    </div>
  );
}