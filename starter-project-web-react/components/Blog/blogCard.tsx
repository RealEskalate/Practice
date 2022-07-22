import * as React from 'react';
import Card from '@mui/material/Card';
import Box from "@mui/material/Box"
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import Link from 'next/link';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';


interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

interface props {
  _id: number,
  title: string,
  content: string,
  authorUserId: any
}
export default function BlogCard({
  blog
}: any) {
  const {
    _id,
    title,
    content,
    authorUserId } = blog
  const author = authorUserId.fullName
  return (
    <Link
      href={{
        pathname: '/blog/[id]',
        query: { id:_id },
      }} passHref as={`/blog/${_id}`}>

      <Card sx={{ bgcolor: '#cfe8fc', maxWidth: '345', my: 4, mx: 0 }}>
        <Box display="inline-block" sx={{ m: 3 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                {author.charAt(0).toUpperCase()}
              </Avatar>
            }
            title={author.charAt(0).toUpperCase() + author.slice(1)}
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
          <CardActions>
            <a>
            <Button size="small">Read More</Button>
            </a>
          </CardActions>
        </Box>
      </Card>
    </Link>

  );
}
