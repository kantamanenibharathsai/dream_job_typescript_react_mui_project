import { Component } from "react";
import { Box, Typography, Button } from "@mui/material";
import sectionNineStyles from "./sectionnine.styles";
import phoneImg from "../../assets/phoneImage.png";

class SectionNine extends Component {
  render() {
    return (
      <Box sx={sectionNineStyles.sectionContainer}>
        <Box sx={sectionNineStyles.sectionChildContainer}>
          <Box
            sx={sectionNineStyles.phoneImage}
            src={phoneImg}
            component="img"
            alt=""
          />
          <Box sx={sectionNineStyles.textContainer}>
            <Box sx={sectionNineStyles.textChildContainer}>
            <Typography sx={sectionNineStyles.headingTwo} component="h2">
              Download Our Mobile Job App.
            </Typography>
            <Typography
              sx={sectionNineStyles.paragraph}
              component="p"
              paragraph={true}
            >
              Download our mobile app so that you can easily search job or find
              job from anywhere. Our mobile app is so easy, flexible and its
              very much user friendly.
            </Typography>
            <Box sx={sectionNineStyles.btnsContainer}>
              <Button sx={sectionNineStyles.cardBtn}>Google Play</Button>
              <Button sx={sectionNineStyles.cardBtn}>App Store</Button>
            </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default SectionNine;
