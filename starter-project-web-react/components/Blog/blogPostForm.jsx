import React from 'react'
import { Box, TextField, Button } from '@mui/material'
export default function BlogPostForm({
  handleClose
}) {
  return (
    <Box mb={5} mx={3}>
      <form>
        <Box pb={4} >
          <TextField fullWidth label="Title" id="fullWidth" />
        </Box>
        <Box pb={4} >
          <TextField
            fullWidth
            id="outlined-multiline-static"
            label="Content"
            multiline
            rows={4}
          />
        </Box>
        <Button size='large' fullWidth variant="outlined" onClick={handleClose} autoFocus >
          Post
        </Button>
      </form>

    </Box>
  )
}
