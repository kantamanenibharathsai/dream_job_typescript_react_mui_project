const cardThreeStyles = {
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    // border: "2px solid red",
    backgroundColor: "white !important",
    borderRadius: "4px",
    padding: "30px 0px",
    gap: "10px",
    boxSizing: "border-box",
    width: { xs: "94%", sm: "47%", md: "31%", lg: "30.9%", xl: "23%" },
    // maxWidth: {md: '49%'},
    margin: { xs: "auto", sm: "0px" },
    // marginBottom: { xs: "15px", sm: "15px", md: "10px" },
    // marginRight: {md: "10px"},
    // boxShadow: "0.1px 0px 0px",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    // flexGrow: "1"
  },

  cardContainerChild: {
    // border: "2px solid green",
    width: "85%",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "28px",
    // justifyContent: "space-between",
  },

  imageContainer: {
    backgroundColor: "#ffcc99",
    borderRadius: "100%",
    width: { xs: "60px", sm: "60px", md: "40px" },
    height: { xs: "60px", sm: "60px", md: "40px" },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: { xs: "center", sm: "center", md: "center" },
  },

  cardImage: {
    // border: '1px solid orange',
    color: "orange",
    width: { xs: "50px", md: "50px" },
    height: { xs: "50px", md: "50px" },
  },

  textContainer: {
    padding: "0",
    // border: "2px solid red"
  },

  heading: {
    fontSize: "11px",
    fontWeight: "600",
    color: "black",
    fontFamily: "Roboto",
    // marginLeft: "auto",
    // textAlign: "center",
    // paddingLeft: "6px"
    // border: "2px solid red",
    padding: "0",
    margin: "0px",
    opacity: 0.7,
    lineHeight: "25px",
  },

  paragraph: {
    fontSize: "9px",
    fontWeight: "100",
    color: "black",
    fontFamily: "Roboto",
    // textAlign: "center",
    // paddingLeft: "6px"
    // border: "2px solid red",
    padding: "0",
    margin: "0px",
    opacity: 0.5,
  },

  iconContainer: {
    width: "50px",
    height: "50px",
    backgroundColor: "#b431ae",
    borderRadius: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "4px",
  },

  icon: {
    color: "black",
    fontSize: "21px",
  },

  locationIcon: {
    color: "black",
    fontSize: "18px",
  },

  flexContainer : {
    display: "flex",
    flexDirection : "row",
    alignItems: "flex-start",
    gap: "5px",
    // border: "2px solid black",
  },

  flexContainer1: {
    display: "flex",
    flexDirection : "column",
    alignItems: "flex-start",
    // gap: "5px",
    // border: "2px solid black",
  },

  jobBtn: {
    backgroundColor: "#e5f1f9",
    borderRadius: "40px",
    color: "#aed2ec",
    fontSize: "10px",
    outline: "none",
    cursor: "pointer",
    padding: "7px 10px !important",
    textTransform: "capitalize",
  },

  textContainer2: {},

  text1: {
    fontSize: "16px",
    fontWeight: "600",
    color: "black",
    fontFamily: "Roboto",
    // marginLeft: "auto",
    // textAlign: "center",
    // paddingLeft: "6px"
    // border: "2px solid red",
    padding: "0",
    margin: "0px",
    opacity: 0.6,
  },

  text2: {
    fontSize: "12px",
    fontWeight: "200",
    color: "black",
    fontFamily: "Roboto",
    // marginLeft: "auto",
    // textAlign: "center",
    // paddingLeft: "6px"
    // border: "2px solid red",
    padding: "0",
    margin: "0px",
    opacity: 0.7,
  },


  girlsImg : {
    width: "50px",
    height: "50px",
    backgroundColor: "transparent",
    borderRadius: "50%"
  },

  rating : {
    fontSize: "10px"
  }
};

export default cardThreeStyles;
