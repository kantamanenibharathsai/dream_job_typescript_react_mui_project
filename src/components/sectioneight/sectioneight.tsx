import { Component } from "react";
import sectionEightStyles from "./sectioneight.styles";
import { Box, Typography, Link } from "@mui/material";
import CardFive from "../cardfive/cardfive";

class SectionEight extends Component {
  render() {
    return (
      <Box sx={sectionEightStyles.sectionContainer}>
        <Box sx={sectionEightStyles.sectionChildContainer}>
          <Box sx={sectionEightStyles.textContainer}>
            <Typography sx={sectionEightStyles.headingTwo} component="h2">
              Read Our Blog
            </Typography>
            <Typography
              sx={sectionEightStyles.paragraph}
              component="p"
              paragraph={true}
            >
              Read Our regular blog about the jobs. You will get the latest news
              and alert of any kind of jobs from our blog
            </Typography>
          </Box>
          <Box sx={sectionEightStyles.cardsContainer}>
            <CardFive />
            <CardFive />
            <CardFive />
          </Box>
          <Box sx={sectionEightStyles.bottomContainer}>
            <Link href="#" sx={sectionEightStyles.linkEl}>Read All Blogs</Link>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default SectionEight;
