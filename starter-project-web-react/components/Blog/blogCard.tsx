import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Box from "@mui/material/Box"
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));
 interface props {
  id:number,
  title:string,
  content:string,
  author:string
}
export default function RecipeReviewCard({
  id,
  title,
  content,
  author
}:props) {
  return (
    <Card   sx={{bgcolor: '#cfe8fc', width: '100%' , my:4, mx :0 }}>
      <Box display="inline-block" sx={{m:3 }}>
      <CardHeader 
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {author.charAt(0).toUpperCase()}
          </Avatar>
        }
        title={ author.charAt(0).toUpperCase() + author.slice(1)}
        subheader="September 14, 2016"
      />
      
      <CardContent>
      <Typography fontWeight="fontWeightBold" gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
    
    
    </Box>
    </Card>
  );
}
