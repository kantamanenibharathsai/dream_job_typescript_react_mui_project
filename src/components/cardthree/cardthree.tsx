import { Component } from "react";
import { Box, Typography, Button, Rating } from "@mui/material";
import cardThreeStyles from "./cardthree.styles";
import girlsimage from "../../assets/image1girl.png"





class CardThree extends Component {
  render() {
    return (
      <Box sx={cardThreeStyles.cardContainer}>
        <Box sx={cardThreeStyles.cardContainerChild}>
          <Box sx={cardThreeStyles.flexContainer}>
            <Box sx={cardThreeStyles.girlsImg} alt="" component="img" src={girlsimage}/>
            <Box sx={cardThreeStyles.flexContainer1}>
              <Typography component="h2" sx={cardThreeStyles.heading}>
                Trend Boult
              </Typography>
              <Typography component="p" sx={cardThreeStyles.paragraph}>
                Designer
              </Typography>
              <Rating name="half-rating" defaultValue={2.5} precision={0.5} sx={cardThreeStyles.rating}/>
            </Box>
          </Box>
          {/* <Button sx={cardThreeStyles.jobBtn}>Part-Time</Button> */}
          <Typography sx={{...cardThreeStyles.paragraph, fontSize: "11px"}}>This is really a great platform for the job seekers to get a well and good suitable dream job very easily. I found here my job!</Typography>
        </Box>
      </Box>
    );
  }
}

export default CardThree;
