import { Component } from "react";
import sectionTwoStyles from "./sectiontwo.styles";
import {Box, Button, Typography } from "@mui/material";
import man from "../../assets/sectiontwo.png";



class SectionTwo extends Component {



  render() {
    return (
      <Box sx={sectionTwoStyles.liveContainer}>
        <Box sx={sectionTwoStyles.liveCard}>
          <Box sx={sectionTwoStyles.card1}>
              <Box component="img" src={man} sx={sectionTwoStyles.liveImg} />
          </Box>
          <Box sx={sectionTwoStyles.card2}>
            <Box sx={sectionTwoStyles.innerCard}>
              <Typography variant="h4" sx={sectionTwoStyles.learning}>
                Trusted & Popular Job Portal.
              </Typography>
              <Typography sx={sectionTwoStyles.best} variant="subtitle2">
                We are the trusted and popular job finding platform in the
                world. We are providing so many jobs from the different company
                across the globe.
              </Typography>
              <Box sx={sectionTwoStyles.btnsContainer}>
                <Button variant="outlined" sx={sectionTwoStyles.signUp1}>
                  Post a Job
                </Button>
                <Button variant="outlined" sx={sectionTwoStyles.signUp}>
                  Apply Now
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}


export default SectionTwo