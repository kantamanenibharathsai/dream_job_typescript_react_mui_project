const sectionTwoStyles = {
  liveContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingTop: "50px",
    paddingBottom: "50px",
    // border: "4px solid green",
  },

  liveCard: {
    display: "flex",
    flexDirection: { xs: "column", sm: "column", md: "row" },
    justifyContent: { sm: "space-between", md: "space-between" },
    // alignItems: "center",
    width: "90%",
    // border: "1px solid red",
  },

  card1: {
    width: { xs: "100%", sm: "65%", md: "50%", lg: "50%" },
    // border: "1px solid green",
    margin : {sm: "auto", md: "0"}
  },

  liveImg: {
    width: "100%",
    height: { xs: "270px", sm: "330px", lg: "440px" },
  },

  card2: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: { xs: "100%", sm: "65%", md: "50%" },
    margin: {sm: "auto", md: "0"},
    marginTop: {xs: "35px", sm: "35px", md: "0"},
    // border: "1px solid pink",
    height: "auto",
  },

  innerCard: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    // border: "1px solid green",
    width: {md:"85%", lg: "80%"},
    gap: { xs: "15px", md: "20px", lg: "30px" },
  },

  learning: {
    color: "#2e2e46",
    fontWeight: "900",
    lineHeight: {xs: "33px", sm: "43px"},
    fontSize: {xs: "22px", sm:"28px"},
    // border: "2px solid red",
    padding: "0",
  },

  best: {
    color: "#b5b5bd",
    lineHeight: {xs: "17px", sm: "19px"},
    fontSize: "13px",
    padding: "0",
    // border: "2px solid red",
  },

  btnsContainer : {
    // border: "1px solid #ff7468",
    padding: "0",
    display: "flex",
    alignItems: "flex-start",
    gap: "20px"
  },

  signUp1: {
    background: "#fff",
    color: "#000000",
    outline: "none",
    border: "1px solid #000000",
    borderRadius: "30px",
    textTransform: "capitalize",
    fontSize: "11px",
    height:"40px",
    width: "100px",
    fontWeight: "900",
    "&:hover": {
      background: "#fff",
      color: "#ff7468",
      border: "1px solid #ff7468",
    },
  },

  signUp: {
    background: "#ff7468",
    color: "#fff",
    outline: "none",
    border: "none",
    fontSize: "11px",
    borderRadius: "30px",
    textTransform: "capitalize",
    height: "40px",
    width:"100px",
    fontWeight: "900",
    "&:hover": {
      background: "#fff",
      color: "#ff7468",
      border: "1px solid #ff7468",
    },
  },
};

export default sectionTwoStyles;
