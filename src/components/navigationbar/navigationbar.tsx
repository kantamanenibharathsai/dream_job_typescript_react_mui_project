import { Component } from "react";
import navigationBarStyle from "./navigationbar.styles";
import { Box, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

interface state {
  isHamburgerIconClicked: boolean;
  isHomeClicked: boolean;
  isCategoryClicked: boolean;
  isPostAJobClicked: boolean;
  isContactClicked: boolean;
  isAboutClicked: boolean;
}

class NavigationBar extends Component<{}, state> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isHamburgerIconClicked: false,
      isHomeClicked: false,
      isCategoryClicked: false,
      isPostAJobClicked: false,
      isContactClicked: false,
      isAboutClicked: false,
    };
  }

  componentDidMount() {
    console.log(window.addEventListener);
    window.addEventListener("scroll", this.handleScroll);
    console.log(window);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY >= 70) {
    } else if (window.scrollY < 70) {
    }
  };

  iconEventHandler = () => {
    this.setState((prevState) => ({
      isHamburgerIconClicked: !prevState.isHamburgerIconClicked,
    }));
  };

  homeEventhandler = () => {
    console.log("dsvjbsdvm ");
    this.setState({
      isHomeClicked: true,
      isCategoryClicked: false,
      isPostAJobClicked: false,
      isContactClicked: false,
      isAboutClicked: false,
    });
  };

  categoryEventhandler = () => {
    this.setState({
      isHomeClicked: false,
      isCategoryClicked: true,
      isPostAJobClicked: false,
      isContactClicked: false,
      isAboutClicked: false,
    });
  };

  postAJobEventhandler = () => {
    this.setState({
      isHomeClicked: false,
      isCategoryClicked: false,
      isPostAJobClicked: true,
      isContactClicked: false,
      isAboutClicked: false,
    });
  };

  contactEventhandler = () => {
    this.setState({
      isHomeClicked: false,
      isCategoryClicked: false,
      isPostAJobClicked: false,
      isContactClicked: true,
      isAboutClicked: false,
    });
  };

  aboutEventhandler = () => {
    this.setState({
      isHomeClicked: false,
      isCategoryClicked: false,
      isPostAJobClicked: false,
      isContactClicked: false,
      isAboutClicked: true,
    });
  };

  render() {
    const {
      isHamburgerIconClicked,
      isHomeClicked,
      isAboutClicked,
      isCategoryClicked,
      isContactClicked,
      isPostAJobClicked,
      // showNavbar,
    } = this.state;

    return (
      <>
        <Box sx={navigationBarStyle.navigationBarParentContainer}>
          <Box sx={navigationBarStyle.upskillLogo}>WorkUp</Box>
          <Box sx={navigationBarStyle.unorderedList}>
            <Box
              sx={{
                ...navigationBarStyle.listItem,
                borderBottom: isHomeClicked ? "#e3204b" : "transparent",
              }}
              onClick={this.homeEventhandler}
            >
              Home
            </Box>
            <Box
              sx={{
                ...navigationBarStyle.listItem,
                borderBottom: isCategoryClicked ? "#e3204b" : "transparent",
              }}
              onClick={this.categoryEventhandler}
            >
              Category
            </Box>
            <Box
              sx={{
                ...navigationBarStyle.listItem,
                borderBottom: isPostAJobClicked ? "#e3204b" : "transparent",
              }}
              onClick={this.postAJobEventhandler}
            >
              Post A Job
            </Box>
            <Box
              sx={{
                ...navigationBarStyle.listItem,
                borderBottom: isAboutClicked ? "#e3204b" : "transparent",
              }}
              onClick={this.aboutEventhandler} // border: "1px solid red" ,
            >
              About
            </Box>
            <Box
              sx={{
                ...navigationBarStyle.listItem,
                borderBottom: isContactClicked ? "#e3204b" : "transparent",
              }}
              onClick={this.contactEventhandler} // border: "1px solid red" ,
            >
              Contact
            </Box>
          </Box>
          <Box sx={navigationBarStyle.buttonsContainer}>
            <Button sx={navigationBarStyle.loginBtn} variant="text">
              Sign in
            </Button>
            <Button sx={navigationBarStyle.signupBtn} variant="contained">
              Sign up
            </Button>
          </Box>
          <Box sx={navigationBarStyle.smallBtnsContainer}>
            {isHamburgerIconClicked === false ? (
              <MenuIcon
                sx={navigationBarStyle.icon}
                onClick={this.iconEventHandler}
              />
            ) : (
              <CloseIcon
                sx={{
                  ...navigationBarStyle.icon,
                }}
                onClick={this.iconEventHandler}
              />
            )}
          </Box>
          {/* {isHamburgerIconClicked && ( */}
          <Box
            sx={{
              ...navigationBarStyle.menuContentParentContainer,
              height: !isHamburgerIconClicked ? "0px" : "370px",
              zIndex: "1"
            }}
          >
            {/* <Box
            sx={{
              ...navigationBarStyle.menuContentParentContainer,
              width: !isHamburgerIconClicked ? "0px" : { xs: "85%", sm: "56%" },
              // border: "1px solid red"
            }} 
          > */}
            {/* <Box sx={navigationBarStyle.closeIconBtnContainer}>
              <CloseIcon
                sx={{
                  ...navigationBarStyle.icon,
                  ...navigationBarStyle.closeIcon,
                }}
                onClick={this.iconEventHandler}
              />
            </Box> */}
            <Box sx={navigationBarStyle.drawerItems}>
              <Box
                sx={{
                  ...navigationBarStyle.listItemSmall,
                  backgroundColor: isHomeClicked ? "#bf6b62" : "transparent",
                }}
                onClick={this.homeEventhandler}
              >
                Home
              </Box>
              <Box
                sx={{
                  ...navigationBarStyle.listItemSmall,
                  backgroundColor: isCategoryClicked
                    ? "#bf6b62"
                    : "transparent",
                }}
                onClick={this.categoryEventhandler}
              >
                Category
              </Box>
              <Box
                sx={{
                  ...navigationBarStyle.listItemSmall,
                  backgroundColor: isPostAJobClicked
                    ? "#bf6b62"
                    : "transparent",
                }}
                onClick={this.postAJobEventhandler}
              >
                Post A Job
              </Box>
              <Box
                sx={{
                  ...navigationBarStyle.listItemSmall,
                  backgroundColor: isAboutClicked ? "#bf6b62" : "transparent",
                }}
                onClick={this.aboutEventhandler}
              >
                About
              </Box>
              <Box
                sx={{
                  ...navigationBarStyle.listItemSmall,
                  backgroundColor: isContactClicked ? "#bf6b62" : "transparent",
                }}
                onClick={this.contactEventhandler}
              >
                Contact
              </Box>
              <Box sx={navigationBarStyle.smallLoginButtonsContainer}>
                <Button sx={navigationBarStyle.loginBtn}>Sign in</Button>
                <Button sx={navigationBarStyle.signupBtn}>Sign up</Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </>
    );
  }
}
export default NavigationBar;
