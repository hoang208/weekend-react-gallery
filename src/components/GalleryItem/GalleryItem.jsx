import { useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from "@mui/icons-material/Delete";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import Grid from '@mui/material/Unstable_Grid2';

function GalleryItem(props) {
  const [clicked, setClicked] = useState(true);

  return (
    <Grid xs={6}>
      <Card sx={{ maxWidth: 345 }}>
        {clicked ? (
            <CardMedia
            component="img"
            alt={props.description} 
            height="140"
            image={props.path}
            onClick={() => setClicked(false)}
          />
          ) : (
            <CardMedia
            component="img"
            alt={props.description} 
            height="200"
            onClick={() => setClicked(true)}
          />
          )}
      <CardContent>
        <Typography variant="body1" color="text.secondary">
        {props.likes} People liked this
        </Typography>
      </CardContent>
      <CardActions>
            <Button
              onClick={() => props.updateGallery(props.id, props.likes)}
              variant="outlined"
              color="primary"
              endIcon={<ThumbUpIcon />}
            >
              Like
            </Button>
            <Button
              onClick={() => props.deleteGallery(props.id)}
              variant="outlined"
              color="error"
              endIcon={<DeleteIcon />}
            >
              Delete
            </Button>
      </CardActions>
    </Card>
     </Grid>
  );
}

export default GalleryItem;
