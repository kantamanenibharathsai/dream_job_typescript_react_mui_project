import { Component } from "react";
import { Box, Typography, Select, MenuItem, Button } from "@mui/material";
import sectionOneStyles from "./sectionone.styles";
import NavigationBar from "../navigationbar/navigationbar";
import EmailIcon from "@mui/icons-material/Email";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { SelectChangeEvent } from "@mui/material/Select";
import girlsImage from "../../assets/image1girl.png";

interface state {
  optionValue: string;
}

class SectionOne extends Component<{}, state> {
  constructor(props: {}) {
    super(props);
    this.state = { optionValue: "Option 1" };
  }

  handleChange = (event: SelectChangeEvent) => {
    this.setState({ optionValue: event.target.value });
  };

  render() {
    const { optionValue } = this.state;

    return (
      <Box sx={sectionOneStyles.mainContainer}>
        <NavigationBar />
        <Box sx={sectionOneStyles.childContainer}>
          <Box sx={sectionOneStyles.childContainerS1}>
            <Box sx={sectionOneStyles.iconBox}>
              <EmailIcon sx={sectionOneStyles.icon} />
            </Box>
            <Box sx={sectionOneStyles.childContainerS2}>
              <Typography component="h1" sx={sectionOneStyles.dreamJobHead}>
                Find Your Dream Job Here
              </Typography>

              <Typography component="p" sx={sectionOneStyles.dreamJobPara}>
                Find your dream job very easily here by searching the job name.
                We are providing high demands job for all the job seekars
              </Typography>

              <Box sx={sectionOneStyles.childContainerS2S1}>
                <Box sx={sectionOneStyles.inputsContainer}>
                  <Box sx={sectionOneStyles.iconInputContainer}>
                    <SearchIcon sx={sectionOneStyles.icon2} />
                    <Box
                      sx={sectionOneStyles.inputEl}
                      component="input"
                      placeholder="Job Title or keyword"
                    />
                  </Box>

                  <Box sx={sectionOneStyles.iconInputContainer}>
                    <LocationOnIcon sx={sectionOneStyles.icon2} />
                    <Box
                      sx={sectionOneStyles.inputEl}
                      component="input"
                      placeholder="Location"
                    />
                  </Box>
                  <Select
                    value={optionValue}
                    label="options"
                    onChange={this.handleChange}
                    sx={sectionOneStyles.selectEl}
                  >
                    <MenuItem sx={sectionOneStyles.optionEl} value="Option 1">
                      Remotely
                    </MenuItem>
                    <MenuItem sx={sectionOneStyles.optionEl} value="Option 2">
                      Option 2
                    </MenuItem>
                    <MenuItem sx={sectionOneStyles.optionEl} value="Option 3">
                      Option 3
                    </MenuItem>
                  </Select>
                </Box>
                <Button sx={sectionOneStyles.button}>Search job</Button>
              </Box>

              <Box sx={sectionOneStyles.childContainerS2S2}>
                <Typography sx={sectionOneStyles.popularKeyText}>
                  Popular keyword:
                </Typography>
                <Box sx={sectionOneStyles.buttonsContainer}>
                  <Button sx={sectionOneStyles.buttonOne}>UI/UX Design</Button>
                  <Button sx={sectionOneStyles.buttonOne}>Marketing</Button>
                  <Button sx={sectionOneStyles.buttonOne}>Development</Button>
                </Box>
              </Box>
            </Box>
            <Box sx={sectionOneStyles.iconBox}>
              <EmailIcon sx={sectionOneStyles.icon} />
            </Box>
          </Box>
          <Box sx={sectionOneStyles.childContainer1}>
            <Box sx={sectionOneStyles.imageCardContainer}>
              <Box
                component="img"
                src={girlsImage}
                alt="girls-image"
                sx={sectionOneStyles.image}
              />
              <Box sx={sectionOneStyles.whiteBox}>
                <Box sx={sectionOneStyles.whiteBoxChild}>
                  <Box sx={sectionOneStyles.iconBox1}>
                    <EmailIcon sx={sectionOneStyles.icon1} />
                  </Box>

                  <Typography
                    component="p"
                    sx={sectionOneStyles.noOfVacanciesText}
                  >
                    10.4K
                  </Typography>
                  <Typography component="p" sx={sectionOneStyles.vacancyText}>
                    Job Vacancy
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box sx={sectionOneStyles.imageCardContainer}>
              <Box sx={{...sectionOneStyles.whiteBox, alignSelf: "flex-end"}}>
                <Box sx={{...sectionOneStyles.whiteBoxChild, flexDirection: {xs: "column", md: "row"}, gap: "10px"}}>
                  <Box sx={sectionOneStyles.iconBox1}>
                    <EmailIcon sx={sectionOneStyles.icon1} />
                  </Box>
                    <Box sx={{...sectionOneStyles.textContainer, textAlign: {xs: "center", md: "left"}}}>
                  <Typography
                    component="p"
                    sx={{...sectionOneStyles.noOfVacanciesText, lineHeight: "16px"}}
                  >
                    Hiring Web Designer
                  </Typography>
                  <Typography component="p" sx={sectionOneStyles.vacancyText}>
                    2 days ago
                  </Typography>
                </Box>
                </Box>
              </Box>
              <Box
                component="img"
                src={girlsImage}
                alt="girls-image"
                sx={{...sectionOneStyles.image, top: "0"}}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default SectionOne;
