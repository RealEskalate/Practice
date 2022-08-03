import * as React from 'react'
import {
  Box,
  Card,
  CardContent,
  TextField,
  List,
  InputAdornment,
} from '@mui/material/Box'
import AddCommentOutlined from '@mui/icons-material/AddCommentOutlined'

export default function Comments({ blog }) {
  return (
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
        ></List>
      </CardContent>
    </Card>
  )
}
