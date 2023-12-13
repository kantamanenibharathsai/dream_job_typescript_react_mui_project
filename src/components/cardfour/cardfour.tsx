import { Component } from "react";
import { Box, Typography, Button } from "@mui/material";
import CardFourStyles from "./cardfour.styles";
import cardFourStyles from "./cardfour.styles";

class CardFour extends Component {
  render() {
    return (
      <Box sx={CardFourStyles.cardContainer}>
        <Box sx={CardFourStyles.cardChildContainer}>
          <Typography component="h2" sx={cardFourStyles.heading}>
            Starter
          </Typography>
          <Typography component="p" sx={cardFourStyles.paragraph}>
            1 month trial
          </Typography>
          <Box component="hr" sx={cardFourStyles.horizontalLine} />
          <Typography component="h2" sx={cardFourStyles.numberText}>
            $29
          </Typography>
          <Typography component="p" sx={cardFourStyles.monthText}>
            per month
          </Typography>
          <Button sx={cardFourStyles.cardBtn}>Get Started</Button>
        </Box>
      </Box>
    );
  }
}
export default CardFour;
