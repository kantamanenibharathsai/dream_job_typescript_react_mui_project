import { Component } from "react";
import sectionTenStyles from "./sectionten.styles";
import { Box, Typography, Button } from "@mui/material";
// import CardTwo from "../cardtwo/cardtwo";

class SectionTen extends Component {
  render() {
    return (
      <Box sx={sectionTenStyles.mainContainer}>
        <Box sx={sectionTenStyles.childContainer}>
            <Typography sx={sectionTenStyles.text1} component="p">
              Subscribe Our Newsletter
            </Typography>

            <Typography sx={sectionTenStyles.text2} component="p">
            Subscribe Our Newsletter for getting further updates
            </Typography>
          
          <Box sx={sectionTenStyles.childContainerSub}>
            <Box component="input" sx={sectionTenStyles.inputElement} placeholder="Enter your email address"/>
            <Button sx={sectionTenStyles.subscribeBtn}>Subscribe</Button>
          </Box>
          </Box>
        </Box>
    
    );
  }
}

export default SectionTen;
