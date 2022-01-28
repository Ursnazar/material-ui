import React from "react";

import {
  makeStyles,
  Container,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(5),
  },
  media: {
    height: "250px",
    [theme.breakpoints.down("sm")]: {
      height: 150,
    },
  },
}));

function Post() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://cdn.pixabay.com/photo/2022/01/17/11/22/sea-6944490_960_720.jpg"
          title="My Post"
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            My First Post
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
            tempora molestias modi animi, ab esse. Laboriosam est inventore
            numquam sint voluptas nulla nam iste expedita! Ipsa autem
            perferendis repudiandae quaerat?
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}

export default Post;
