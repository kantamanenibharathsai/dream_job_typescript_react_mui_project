import { Component } from "react";
import sectionFiveStyles from "./sectionfive.styles";
import { Box, Typography } from "@mui/material";
// import CardTwo from "../cardtwo/cardtwo";

class SectionFive extends Component {
  render() {
    return (
      <Box sx={sectionFiveStyles.mainContainer}>
        <Box sx={sectionFiveStyles.childContainer}>
          <Box sx={sectionFiveStyles.childContainerSub}>
            <Typography sx={sectionFiveStyles.text1} component="p">
              4M
            </Typography>

            <Typography sx={sectionFiveStyles.text2} component="p">
              4 million daily active users
            </Typography>
          </Box>
          <Box sx={sectionFiveStyles.childContainerSub}>
            <Typography sx={sectionFiveStyles.text1} component="p">
              4M
            </Typography>

            <Typography sx={sectionFiveStyles.text2} component="p">
              4 million daily active users
            </Typography>
          </Box>
          <Box sx={sectionFiveStyles.childContainerSub}>
            <Typography sx={sectionFiveStyles.text1} component="p">
              4M
            </Typography>

            <Typography sx={sectionFiveStyles.text2} component="p">
              4 million daily active users
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default SectionFive;
