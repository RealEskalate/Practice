import React from 'react'
import {
  Box,
  DialogActions,
  Dialog,
  DialogContent,
  DialogTitle,
  useMediaQuery,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import BlogPostForm from './blogPostForm'

export default function BlogPostDialog({ open, handleClose }: any) {
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
      fullWidth
    >
      <DialogTitle id="responsive-dialog-title">
        <Box ml={3}>
          <h3>Blog Post</h3>
        </Box>
      </DialogTitle>
      <DialogContent>
        <BlogPostForm handleClose={handleClose} />
      </DialogContent>
      <DialogActions></DialogActions>
    </Dialog>
  )
}
