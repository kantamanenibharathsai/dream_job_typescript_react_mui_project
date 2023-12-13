const sectionFourStyles = {
  homeSection5: {
    width: "100%",
    // border: "1px solid red",
    paddingTop: { xs: "50px", md: "40px" },
    paddingBottom: { xs: "50px", md: "70px" },
    backgroundColor: "f4f4f7"
  },

  homeSection5ChildContainer: {
    width: "90%",
    margin: "auto",
    // border: "1px solid yellow",
  },

  homeSection5ChildContainerTop: {
    width: { xs: "100%", md: "auto" },
    // border : "1px solid pink"
  },

  homeSection5ChildContainer2: {
    width: "100%",
    // border: "1px solid orange",
    display: "flex",
    flexDirection: { xs: "column", sm: "row", md: "row" },
    flexWrap: "wrap",
    justifyContent: {
      xs: "flex-start",
      sm: "space-between",
      md: "space-between",
      lg: "space-between",
    },
    marginTop: "50px",
    gap: { xs: "30px", md: "20px", lg: "35px" },
  },

  homeSection5ChildContainer3: {
    // width: {xs:"100%", md:""},
    // margin : "auto",
    textAlign: { xs: "right", sm: "right", md: "center" },
    width: {xs: "95.4%", sm: "100%"},
    // border: "2px solid green",
    margin: {xs: "auto", sm: "auto", md: "0" },
    marginTop: { xs: "20px", sm: "20px", md: "50px" },
  },

  cardContainerFor3Child1: {
    width: { xs: "95%", md: "29%" },
    margin: { xs: "auto !important" },
    // border: "2px solid red",
    boxShadow: "none !important",
    textAlign: "center",
  },

  card3HeadingTwo: {
    fontFamily: "Roboto",
    fontSize: { xs: "12px", md: "12px" },
    color: "#ff5c33",
    fontWeight: "600",
    //border: "2px solid red",
    // marginTop: "10px",
    marginBottom: "10px",
  },

  card3HeadingThree: {
    fontFamily: "Roboto",
    fontSize: { xs: "26px", md: "28px" },
    color: "black",
    fontWeight: "600",
    lineHeight: "30px",
    marginTop: "10px !important",
    // marginBottom: "10px"
  },

  card3Para: {
    fontFamily: "Roboto",
    fontSize: { xs: "12px", md: "12px" },
    color: "black",
    fontWeight: "200",
    marginTop: "12px",
  },

  cardButton: {
    color: "white !important",
    backgroundColor: "#ff5c33 !important",
    outline: "none",
    cursor: "pointer",
    padding: { xs: "4px 21px", md: "4px 21px" },
    border: "none",
    textTransform: "capitalize",
    fontSize: "12px",
    fontWeight: "500",
    fontFamily: "Roboto",
    borderRadius: "1px",
    // margin: {sm: "auto", md: "auto"},
    // alignSelf: "center"
  },

  seeMoreBtn: {
    background: "#ff7468",
    color: "#fff",
    outline: "none",
    border: "none",
    fontSize: "11px",
    borderRadius: "30px",
    textTransform: "capitalize",
    height: "40px",
    width: "100px",
    fontWeight: "900",
    "&:hover": {
      background: "#fff",
      color: "#ff7468",
      border: "1px solid #ff7468",
    },
  },
};

export default sectionFourStyles;
