import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import ListItem from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import Moment from 'moment'
import { Comment } from '../../../types/Blog'

export default function SingleComment({
  comment,
  divider,
}: {
  comment: Comment
  divider: boolean
}) {
  console.log(comment)
  const formattedDate = Moment(comment.created_at).fromNow()
  return (
    <Box>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar
            alt={comment.user.fullName}
            src={comment.user.profileId ? comment.user.profileId.imageUrl : ''}
          />
        </ListItemAvatar>
        <ListItemText
          primary={comment.user.fullName}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {formattedDate}
              </Typography>
              {' — ' + comment.text}
            </React.Fragment>
          }
        />
      </ListItem>
      {divider && <Divider variant="inset" component="li" />}
    </Box>
  )
}
