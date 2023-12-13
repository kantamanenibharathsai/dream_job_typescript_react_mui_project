const sectionFiveStyles = {
  mainContainer: {
    backgroundColor: "#5c52ba",
    width: "100%",
    //    display: "grid",
    //    gridTemplateColumns : "repeat(3, 1fr)"
  },

  childContainer: {
    width: "90%",
    margin: "auto",
    // border: "2px solid red",
    display: "grid",
    gridTemplateColumns : {xs: "1fr", sm: "repeat(3, 1fr)"},
    gridRowGap: {xs: "15px", sm: "0px"},
    padding: "40px 0px"
  },

  childContainerSub : {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // border: "2px solid green"
  },

  text1 : {
    fontFamily : "Roboto",
    fontSize: "21px",
    fontWeight: "800",
    color: "white",
    opacity: 0.7,
  },

  text2 : {
    fontFamily : "Roboto",
    fontSize: "13px",
    fontWeight: "300",
    color: "white",
    opacity: 0.7,
  }


};


export default sectionFiveStyles
