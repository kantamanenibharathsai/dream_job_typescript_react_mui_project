import { Component } from "react";
import { Box, Typography } from "@mui/material";
import cardOneStyles from "./cardone.styles";
import DesignServicesIcon from "@mui/icons-material/DesignServices";

class CardOne extends Component {
  render() {
    return (
      <Box sx={cardOneStyles.cardContainer}>
        <Box sx={cardOneStyles.cardContainerChild}>
          <Box sx={cardOneStyles.iconContainer}>
            <DesignServicesIcon sx={cardOneStyles.icon}/>
          </Box>

          <Typography component="h2" sx={cardOneStyles.heading}>
            Design & Development
          </Typography>
          <Typography component="p" sx={cardOneStyles.paragraph}>
            15k+ Post Jobs
          </Typography>
        </Box>
      </Box>
    );
  }
}

export default CardOne;
