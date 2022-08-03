import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" whidth={300}>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar
            alt="Onodera Kosaki"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkTv26np5wySBxHHLbsuefsJqYfoDJWggTtQ&usqp=CAU"
          />
          <Avatar
            alt="Rem"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWjleZ8iv3PiAk7P7W1uehaPx9PWCSUw4Kyw&usqp=CAU"
          />
          <Avatar
            alt="Travis Howard"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSyohX02wR13TVZYFPgNJWz77i_4HwNN7I-Q&usqp=CAU"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnCwkjSatD-g9dIZa1hBwidhlpg7jXM1DxnA&usqp=CAU"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9_DOdRvYpdN1Yu9TYP3kTt_RltLqwxsFzag&usqp=CAU"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdt3lFnDXw7tVY3QnpQaTRq6APkBzWX_h8xw&usqp=CAU"
          />
          <Avatar
            alt="Remy Sharp"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkhIIQbAnli6i5A-I8jCgokK5NpxzsZrPJgQ&usqp=CAU"
          />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>

        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>

        <ImageList cols={3} rowHeight={100} gab={5}>
          <ImageListItem>
            <img
              sx={{ height: "100px" }}
              src="https://media.tenor.com/images/d075ce485421acfc51e61d6dcbb39a91/raw"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              sx={{ height: "100px" }}
              src="https://ae01.alicdn.com/kf/HTB1_9pKIXXXXXcmXpXXq6xXFXXXY.jpg_640x640Q90.jpg_.webp"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              sx={{ height: "100px" }}
              src="https://i.pinimg.com/736x/a6/0a/6f/a60a6fddaf1cf668ee5b3263e8ae757d--anime-couples-manga-anime.jpg"
              alt=""
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2}>
          Latest Conversations
        </Typography>

        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="data:image/jpeg;base64,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"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Travis Howard"
                src="https://i.pinimg.com/originals/1e/59/60/1e596023f320e36af6466a7c1214c3e8.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Cindy Baker"
                src="https://m.media-amazon.com/images/M/MV5BMTNmMTQwMTctMzNhYi00ZDZhLWJmNmMtNTZiZGM1Y2E0NWYyXkEyXkFqcGdeQXVyNzI2MzA2OTE@._V1_.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
