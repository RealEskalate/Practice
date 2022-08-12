import React, { useEffect, useState } from 'react'
import { Button, Typography } from '@mui/material'
import BlogPostDialog from './blogPostDialog'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

export default function PostBlog(props: any) {
  const [open, setOpen] = useState(false)
  const { data: session } = useSession()
  const router = useRouter()

  const handleClickOpen = () => {
    if (session) {
      setOpen(true)
    } else {
      router.push('/mintesnot/auth/login')
    }
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
