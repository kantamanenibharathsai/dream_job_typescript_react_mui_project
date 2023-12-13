const sectionTenStyles = {
  mainContainer: {
    backgroundColor: "#5c52ba",
    width: "100%",
    //    display: "grid",
    //    gridTemplateColumns : "repeat(3, 1fr)"
    padding: "50px 0px"
  },

  childContainer: {
    width: {xs: "100%", sm: "75%", md: "50%", lg: "31%"},
    margin: "auto",
    // border: "2px solid red",
    display: "grid",
    gridRowGap: "20px",
    textAlign: {xs: "center"}
  },

  text1: {
    fontFamily: "Roboto",
    fontSize: {xs: "27px", sm: "31px"},
    fontWeight: "800",
    color: "white",
    opacity: 0.7,
    // border: "2px solid red",
    
  },

  text2: {
    fontFamily: "Roboto",
    fontSize: "14px",
    fontWeight: "300",
    color: "white",
    opacity: 0.7,
    // border: "2px solid red",
  },

  childContainerSub: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    // border: "2px solid green"
    backgroundColor: "white",
    borderRadius: "35px",
    height: "42px"  
  },

  inputElement : {
    outline: "none",
    // border: '1px solid green',
    cursor: "pointer",
    font : "normal 300 12px Roboto",
    backgroundColor: "transparent",
    color : "black",
    opacity: 0.7,
    height: "42px",
    flexGrow: "1",
    border: "none",
    padding: "0px 26px"


  },

  subscribeBtn : {
    background: "#ff7468",
    color: "#fff",
    outline: "none",
    border: "none",
    fontSize: "12px",
    borderRadius: "30px",
    textTransform: "capitalize",
    height: "42px",
    width:"100px",
    fontWeight: "900",
    "&:hover": {
      background: "#fff",
      color: "#ff7468",
      border: "1px solid #ff7468",
    },
  },

};

export default sectionTenStyles;
