import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';


export default function SingleComment({comment, divider}) {
  return (
    <Box>
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
          divider && <Divider variant="inset" component="li" />
      }
    </Box>
  );
}
