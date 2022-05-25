import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';
import BlogPostDialog from './BlogPostDialog';
import { addBlog } from '../../store/slices/blogs'
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { getBlogs } from '../../store/slices/blogs';

export default function PostBlog(props) {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false);
  const blogs = useSelector((state) => getBlogs(state))
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button fontWeight="fontWeightBold"  variant="outlined" onClick={handleClickOpen}>
      <Typography fontWeight="fontWeightBold"  color="text.secondary">
          Post Blog
        </Typography>
      </Button>

      <BlogPostDialog open={open} handleClose={handleClose} />
    </div>
  );
}