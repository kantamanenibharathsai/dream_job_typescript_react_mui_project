import { Component } from "react";
import { Box, Typography, Button } from "@mui/material";
import cardTwoStyles from "./cardtwo.styles";
import GoogleIcon from '@mui/icons-material/Google';
import AddLocationIcon from '@mui/icons-material/AddLocation';


class CardTwo extends Component {
  render() {
    return (
      <Box sx={cardTwoStyles.cardContainer}>
        <Box sx={cardTwoStyles.cardContainerChild}>
          <Typography component="h2" sx={cardTwoStyles.heading}>
            Frontend Developer for Google
          </Typography>
          <Box sx={cardTwoStyles.flexContainer}>
          <Box sx={cardTwoStyles.locationTextContainer}>
            <AddLocationIcon sx={cardTwoStyles.locationIcon}/>
          <Typography component="p" sx={cardTwoStyles.paragraph}>
            New York
          </Typography>
          </Box>
          <Button sx={cardTwoStyles.jobBtn}>Part-Time</Button>
          </Box>
          <Box sx={cardTwoStyles.flexContainer}>
          <Box sx={cardTwoStyles.iconContainer}>
            <GoogleIcon sx={cardTwoStyles.icon} />
          </Box>
          <Box sx={cardTwoStyles.textContainer2}>
                <Typography sx={cardTwoStyles.text1}>Google</Typography>
                <Typography sx={cardTwoStyles.text2}>5 Day ago</Typography>
          </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default CardTwo;
