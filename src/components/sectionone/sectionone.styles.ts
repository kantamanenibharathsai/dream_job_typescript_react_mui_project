const sectionOneStyles = {
  mainContainer: {
    width: "100%",
    backgroundColor: "#5c52ba",
    paddingTop:"50px",
    paddingBottom: "70px"
  },

  childContainer: {
    margin: "auto",
    marginTop: "50px",
    // border: "1px solid red",
    width: "90%",
  },

  childContainerS1: {
    display: "flex",
    justifyContent: "space-between",
    //    border: "1px solid orange",
    width: "100%",
    alignItems: "center",
    flexDirection: { xs: "column", md: "row" },
    gap: { xs: "30px", md: "0px" },
  },

  iconBox: {
    width: "40px",
    height: "40px",
    backgroundColor: "#28aced",
    borderRadius: "6px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  icon: {
    fontSize: "22px",
    color: "white",
  },

  childContainerS2: {
    // border: "1px solid white",
    width: { xs: "100%", md: "82%", lg: "55%" },
    textAlign: "center",
  },

  dreamJobHead: {
    fontFamily: "Roboto",
    fontSize: { xs: "30px", sm: "35px" },
    fontWeight: "700",
    color: "white",
    // border: "4px solid white",
    lineHeight: { xs: "35px" },
    padding: "0",
  },

  dreamJobPara: {
    fontFamily: "Roboto",
    fontSize: "13px",
    fontWeight: "200",
    color: "white",
    opacity: 0.7,
    marginTop: { xs: "13px", sm: "8px" },
  },

  childContainerS2S1: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    justifyContent: { md: "center" },
    alignItems: { md: "center" },
    gap: "20px",
    // border: "8px solid black",

    width: { xs: "100%", md: "auto" },
    margin: "auto",
    marginTop: "15px",
  },

  inputsContainer: {
    // border: "4px solid pink",
    borderRadius: { xs: "3px", md: "50px" },
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    justifyContent: "center",
    alignItems: { xs: "strech", md: "center" },
    gap: { xs: "15px", md: "5px" },
    height: { md: "42px" },
    backgroundColor: { md: "white" },
    padding: { md: "0px 12px" },
    width: "100%",
  },

  iconInputContainer: {
    display: "flex",
    alignItems: "center",
    gap: { xs: "10px", md: "6px" },
    // border: "1px solid black",
    height: {xs: "40px", sm:"37px"},
    backgroundColor: "white",
    width: "100%",
  },

  icon2: {
    fontSize: { xs: "15px", md: "12px" },
    color: "black",
  },

  inputEl: {
    // border: "1px solid red",
    cursor: "pointer",
    outline: "none",
    // flexGrow: "1",
    fontFamily: "Roboto",
    fontSize: { xs: "15px", md: "12px" },
    fontWeight: "200",
    color: "black",
    opacity: 0.7,
    height: {xs: "40px", sm:"37px"},
    border: "none",
  },

  selectEl: {
    // border: "1px solid red",
    // width: "29%",
    height: "40px",
    fontFamily: "Roboto",
    fontWeight: "200",
    color: "black",
    fontSize: { xs: "15px", md: "12px" },
    // border: '0px',
    "&:fieldSet": {
      border: "none",
    },
  },

  optionEl: {
    fontFamily: "Roboto",
    fontWeight: "200",
    color: "black",
    fontSize: { xs: "15px", md: "12px" },
  },

  button: {
    border: "none",
    cursor: "pointer",
    outline: "none",
    fontFamily: "Roboto",
    fontSize: "11px",
    fontWeight: "200",
    color: "white",
    opacity: 0.7,
    height: "42px",
    padding: "0px 22px",
    width: { md: "110px" },
    backgroundColor: "#b54619 !important",
    textTransform: "capitalize",
    borderRadius: "40px",
  },

  childContainerS2S2: {
    display: "flex",
    alignItems: "center",
    // border: "2px solid black",
    gap: { xs: "5px", sm: "20px" },
    justifyContent: "center",
    marginTop: "15px",
  },

  popularKeyText: {
    fontFamily: "Roboto",
    fontWeight: "500",
    color: "white",
    fontSize: "10px",
  },

  buttonsContainer: {
    display: "flex",
    alignItems: "center",
    gap: { xs: "8px", sm: "20px" },
    // border: "2px solid black",
  },

  buttonOne: {
    border: "1px solid white",
    cursor: "pointer",
    outline: "none",
    fontFamily: "Roboto",
    fontSize: "9px",
    fontWeight: "200",
    color: "white",
    opacity: 0.7,
    height: {xs:"30px", sm:"23px"},
    padding: "0px 8px",
    backgroundColor: "transparent",
    textTransform: "capitalize",
    borderRadius: "40px",
    lineHeight: {xs:"12px"}
  },

  childContainer1 : {
    display : "flex",
    flexDirection: {xs: "column", md: "row"},
    justifyContent: {md: "space-between"},
    // border: "1px solid red",
    width: "100%",
    // height : "600px",
    marginTop: "50px",
    alignItems: {xs: "flex-start", sm: "center", md: "flex-start"},
    
  },

  imageCardContainer : {
    display: "flex",
    alignItems: "center",
    // border: "2px solid green",
    gap: {xs:"13px", sm:"30px"},
    width: {xs:"100%", sm: "70%", md: "48%"},
    justifyContent: {xs:"space-between", sm: ""},
    // margin: {sm: "auto", md: "0"}
  },

  image : {
    width: {xs: "55%", sm:"60%", md: "200px", lg:"250px"},
    height: {xs:"auto",sm: "auto", md: "auto", lg:"auto"},
    backgroundColor: "transparent",
    // position: "relative",
    // top: "20px"
  },

  whiteBox : {
    backgroundColor :"#ffffff",
    borderRadius: "10px",
    display: "flex",
    flexDirection:"column",
    justifyContent: "center",
    alignItems: "center",
    padding: "14px",
    flexGrow: {xs:"1", sm: "1", md: ""}
  },

  whiteBoxChild : {
    width: "100%",
    // border: "1px solid green",
    display: "flex",
    flexDirection:"column",
    justifyContent: "center",
    alignItems: "center",

  },

  iconBox1 : {
    width: "40px",
    height: "40px",
    backgroundColor: "lightgreen",
    borderRadius: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "4px"
    // border: "2px solid green"
  },

  icon1 : {
    fontSize: "17px",
    color: "white"
  },

  noOfVacanciesText : {
    fontFamily : "Roboto",
    fontSize: "14px",
    fontWeight: "500",
    color: "black",
    opacity: 0.8,
    marginBottom: "0"
  },

  vacancyText : {
    fontFamily : "Roboto",
    fontSize: "12px",
    fontWeight: "500",
    color: "black",
    opacity: 0.6,
    padding: "0",
    marginTop: "0"
  },

  textContainer : {
    // border: "1px solid red",
    textAlign: "left",
    width: "80%"
  }
};

export default sectionOneStyles;
