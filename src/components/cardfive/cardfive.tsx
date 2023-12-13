import { Component } from "react";
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  Box,
  Link,
} from "@mui/material";
import cardStyles from "./cardfive.styles";
// import userExperienceDesign from "../../assets/userexperiencedesign.png";
import blogImage from "../../assets/blogsimage.jpg";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';



class CardFive extends Component {
  render() {
    return (
      <Card sx={cardStyles.cardContainer}>
        <CardMedia
          sx={{
            height: { xs: "195px", sm: "200px", md: "193px", lg: "200px" },
            // borderRadius: "6px",
            padding: "0",
          }}
          image={blogImage}
          title="blog"
        />
        <CardContent sx={{ padding : "0"}}>
            <Box sx={cardStyles.dateContainer}>
                <Typography sx={cardStyles.dateText}>March 29, 2021 | 2 comments</Typography>
            </Box>
          <Box sx={cardStyles.contentContainer}>
            <Typography component="h2" sx={cardStyles.heading}>
              Handle the work meeting
            </Typography>
            <Typography component="p" sx={cardStyles.paragraph}>
              We make job finding is more earlier for the jobseekerto find jobs.
            </Typography>
            <Box sx={cardStyles.anchorIconContainer}>
              <Link href="#" underline="none" sx={cardStyles.readMoreText}>
                Read More 
              </Link>
              <ArrowRightAltIcon sx={cardStyles.arrowIcon}/>
            </Box>
          </Box>
        </CardContent>
      </Card>
    );
  }
}

export default CardFive;
