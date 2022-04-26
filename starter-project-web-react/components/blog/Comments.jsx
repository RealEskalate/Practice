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


export default function Comments({blog}) {
  const comments = [
    {
      comment: "this is a comment text that is an example for all", 
      commenter: "this is the guy that comments", 
      img: '/img/trial-avatar.jpg',
      created_at: "Jan 1, 2022"
    },
    {
      comment: "this is a comment text that is an example for all", 
      commenter: "Example Commenter", 
      img: '/img/trial-avatar.jpg',
      created_at: "Jan 1, 2022"
    },
    {
      comment: "this is a comment text that is an example for all", 
      commenter: "Example Commenter", 
      img: '/img/trial-avatar.jpg',
      created_at: "Jan 1, 2022"
    },
    {
      comment: "this is a comment text that is an example for all", 
      commenter: "Example Commenter", 
      img: 'img/trial-avatar.jpg',
      created_at: "Jan 1, 2022"
    },
    {
      comment: "this is a comment text that is an example for all", 
      commenter: "Example Commenter", 
      img: '/img/trial-avatar.jpg',
      created_at: "Jan 1, 2022"
    },
    {
      comment: "this is a comment text that is an example for all", 
      commenter: "Example Commenter", 
      img: 'img/trial-avatar.jpg',
      created_at: "Jan 1, 2022"
    }
  ]
  return (
    <Card sx={{ minWidth: 275 }} variant="outlined">
      <CardContent>
        <Box px={2}>
          <TextField fullWidth label="Leave a comment!" id="commentForm" variant="standard" />
        </Box>
        
        <List className='comment-list' sx={{ width: '100%', maxHeight: 500, overflow: 'auto' }}>
            {comments.map((comment, ind) => (
              <Box key={`comment-${ind}`}>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt={comment.commenter} src={comment.img} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={comment.commenter}
                    secondary={
                      <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            {comment.created_at}
                        </Typography>
                        {' — ' + comment.comment}
                      </React.Fragment>
                  }
                  />
                </ListItem>
                {
                  (ind < comments.length - 1) &&
                    <Divider variant="inset" component="li" />
                }
                
              </Box>
              
            ))}
        </List>
      </CardContent>
    </Card>
  );
}
