import * as React from 'react'
import {
  Box,
  Card,
  CardContent,
  TextField,
  List,
  InputAdornment,
  CircularProgress,
} from '@mui/material'
import AddCommentOutlined from '@mui/icons-material/AddCommentOutlined'
import { Comment } from '../../../types/Blog'
import { useFetchCommentsQuery } from '../../../store/mintesnot/blog/BlogApiSlice'
import SingleComment from './SingleComment'

export default function Comments({ id }: { id: string }) {
  const { data = [], isFetching } = useFetchCommentsQuery(id)

  return (
    <>
      {!isFetching ? (
        <Card sx={{ minWidth: 275 }} variant="outlined">
          <CardContent>
            <Box px={2}>
              <TextField
                fullWidth
                label="Leave a comment!"
                id="commentForm"
                variant="standard"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <AddCommentOutlined />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            <List
              className="comment-list"
              sx={{ width: '100%', maxHeight: 500, overflow: 'auto' }}
            >
              {data.map((comment: Comment, ind: number) => {
                console.log(ind)
                return (
                  <SingleComment
                    comment={comment}
                    key={`comment-${ind}`}
                    divider={ind < data.length - 1}
                  />
                )
              })}
            </List>
          </CardContent>
        </Card>
      ) : (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ display: 'flex', mt: 5 }}
        >
          <CircularProgress size="40%" sx={{ m: 5, p: 6 }} />
        </Box>
      )}
    </>
  )
}
