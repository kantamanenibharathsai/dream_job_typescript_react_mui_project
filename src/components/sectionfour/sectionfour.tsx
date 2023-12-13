import { Component } from "react";
import sectionFourStyles from "./sectionfour.styles";
import { Box, Button, Typography, Card, CardContent } from "@mui/material";
import CardTwo from "../cardtwo/cardtwo";

class SectionFour extends Component {
  render() {
    return (
      <Box sx={sectionFourStyles.homeSection5}>
        <Box sx={sectionFourStyles.homeSection5ChildContainer}>
          <Card sx={sectionFourStyles.cardContainerFor3Child1}>
            <CardContent>
              <Typography
                component="h3"
                sx={sectionFourStyles.card3HeadingThree}
              >
                Explore Featured Jobs
              </Typography>
              <Typography component="p" sx={sectionFourStyles.card3Para}>
                Explore all the jobs by category and find your perfect and
                suitable job that you badly need
              </Typography>
            </CardContent>
          </Card>
          <Box sx={sectionFourStyles.homeSection5ChildContainer2}>
            <CardTwo />
            <CardTwo />
            <CardTwo />
            <CardTwo />
            <CardTwo />
            <CardTwo />
            <CardTwo />
            <CardTwo />
          </Box>
          <Box sx={sectionFourStyles.homeSection5ChildContainer3}>
            <Button variant="outlined" sx={sectionFourStyles.seeMoreBtn}>
              See More
            </Button>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default SectionFour;
