import { Component } from "react";
import sectionThreeStyles from "./sectionthree.styles";
import { Box, Button, Typography, Card, CardContent } from "@mui/material";
import CardOne from "../cardone/cardone";

class SectionThree extends Component {
  render() {
    return (
      <Box sx={sectionThreeStyles.homeSection5}>
        <Box sx={sectionThreeStyles.homeSection5ChildContainer}>
          <Card sx={sectionThreeStyles.cardContainerFor3Child1}>
            <CardContent>
              <Typography
                component="h3"
                sx={sectionThreeStyles.card3HeadingThree}
              >
                Explore By Category
              </Typography>
              <Typography component="p" sx={sectionThreeStyles.card3Para}>
                Explore all the jobs by category and find your perfect and
                suitable job that you badly need
              </Typography>
            </CardContent>
          </Card>
          <Box sx={sectionThreeStyles.homeSection5ChildContainer2}>
            <CardOne />
            <CardOne />
            <CardOne />
            <CardOne />
            <CardOne />
            <CardOne />
            <CardOne />
            <CardOne />
          </Box>
          <Box sx={sectionThreeStyles.homeSection5ChildContainer3}>
            <Button variant="outlined" sx={sectionThreeStyles.seeMoreBtn}>
              See More
            </Button>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default SectionThree;
