import { Component } from "react";
import sectionSevenStyles from "./sectionseven.styles";
import { Box, Typography } from "@mui/material";
import CardFour from "../cardfour/cardfour";

class SectionSeven extends Component {
  render() {
    return (
      <Box sx={sectionSevenStyles.sectionContainer}>
        <Box sx={sectionSevenStyles.sectionChildContainer}>
          <Box sx={sectionSevenStyles.textContainer}>
            <Typography sx={sectionSevenStyles.headingTwo} component="h2">
              Our Pricing
            </Typography>
            <Typography
              sx={sectionSevenStyles.paragraph}
              component="p"
              paragraph={true}
            >
              Checkout out pricing and make a decision for getting started your
              plan for your job finding
            </Typography>
          </Box>
          <Box sx={sectionSevenStyles.cardsContainer}>
            <CardFour />
            <CardFour />
            <CardFour />
          </Box>
        </Box>
      </Box>
    );
  }
}


export default SectionSeven
