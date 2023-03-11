import React from "react";
import { MoreVert, Share, Favorite, FavoriteBorder } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";

function Post() {
  return (
    
      <Card sx={{margin:5}}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="John Doe"
          subheader="September 14, 2022"
        />

        <CardMedia
          component="img"
          height="20%"
          image="https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg"
          alt="pixels"
        />

        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive image is a perfect nature taken by me!
          </Typography>
        </CardContent>

        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>
  );
}

export default Post;
