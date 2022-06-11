import * as React from 'react';
import Box from '@mui/material/Box';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import SingleComment from './SingleComment';
import InputAdornment from '@mui/material/InputAdornment';
import AddCommentOutlined from '@mui/icons-material/AddCommentOutlined';


import { getComments, isCommentLoading, addComment } from '../../store/slices/blogs';
import { useSelector, useDispatch } from 'react-redux'
import { useSession } from 'next-auth/react'


export default function Comments({blog}) {
  const dispatch = useDispatch()
  const { data: session } = useSession()
  const onComment = (event) => {
    if (event.keyCode == 13) {
      const payload = {id: blog._id, text: event.target.value, token: session.access_token}
      if (payload.text.length > 3) {
        dispatch(addComment(payload))
        event.target.value = null
      }
      else console.log("not enough length")
    }
    
  };

  const comments = useSelector((state) => getComments(state))

  return (
    <Card sx={{ minWidth: 275 }} variant="outlined">
      <CardContent>
        <Box px={2}>
          <TextField 
            fullWidth 
            label="Leave a comment!" 
            id="commentForm"
            variant="standard" 
            onKeyUp={onComment}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <AddCommentOutlined />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        
        <List className='comment-list' sx={{ width: '100%', maxHeight: 500, overflow: 'auto' }}>
            {comments.map((comment, ind) => (
              <SingleComment 
                comment={comment} 
                key={`comment-${ind}`}
                divider={ind < comments.length - 1} 
              />
            ))}
        </List>
      </CardContent>
    </Card>
  );
}
