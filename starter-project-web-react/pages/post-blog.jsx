import React, { useState } from 'react';
import { Button } from '@mui/material';
import BlogPostDialog from '../components/blog/BlogPostDialog';
import { addBlog } from '../store/slices/blogs'
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { getBlogs } from '../store/slices/blogs';

export default function CreateBlog(props) {
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
      <Button variant="outlined" onClick={handleClickOpen}>
        Post
      </Button>
      <BlogPostDialog open={open} handleClose={handleClose} />
    </div>
  );
}


