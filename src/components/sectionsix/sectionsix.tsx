import { Component } from "react";
import sectionSixStyles from "./sectionsix.styles";
import { Box, Button, Typography, Card, CardContent } from "@mui/material";
import CardTwo from "../cardtwo/cardtwo";
import CardThree from "../cardthree/cardthree";

class SectionSix extends Component {
  render() {
    return (
      <Box sx={sectionSixStyles.homeSection5}>
        <Box sx={sectionSixStyles.homeSection5ChildContainer}>
          <Card sx={sectionSixStyles.cardContainerFor3Child1}>
            <CardContent>
              <Typography
                component="h3"
                sx={sectionSixStyles.card3HeadingThree}
              >
                What Jobseekar Say
              </Typography>
              <Typography component="p" sx={sectionSixStyles.card3Para}>
                Read and understand what job seekers are saying about our platform and then you can realize the need
              </Typography>
            </CardContent>
          </Card>
          <Box sx={sectionSixStyles.homeSection5ChildContainer2}>
            <CardThree />
            <CardThree />
            <CardThree />
          </Box>
          <Box sx={sectionSixStyles.homeSection5ChildContainer3}>
            <Button variant="outlined" sx={sectionSixStyles.seeMoreBtn}>
              See More
            </Button>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default SectionSix;
