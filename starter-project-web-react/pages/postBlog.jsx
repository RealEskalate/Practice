import React, { useState } from 'react';
import { Button} from '@mui/material';
import BlogPostDialog from '../components/blog/blogPostDialog';
export default function CreateBlog() {
  const [open, setOpen] = useState(false);

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