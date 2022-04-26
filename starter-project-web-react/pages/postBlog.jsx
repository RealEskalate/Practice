import React, { useState } from 'react';
import { Button} from '@mui/material';
import PostBlogDialog from '../components/blog/postBlogDialog';
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
      <PostBlogDialog open={open} handleClose={handleClose} />
    </div>
  );
}