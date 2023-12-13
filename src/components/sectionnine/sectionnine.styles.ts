const sectionNineStyles = {
  sectionContainer: {
    width: "100%",
    padding: "60px 0px",
  },

  sectionChildContainer: {
    width: "90%",
    margin: "auto",
    display: "grid",
    gridTemplateColumns: { xs: "100%", sm: "100%", md: "repeat(2, 50%)" },
    gap: { xs: "40px", md: "0px" },
    // justifyContent : {md : "space-between"},
    // border: "1px solid pink",
  },

  phoneImage: {
    height: "630px",
    justifySelf: "center",

    width: "300px",
  },

  textContainer: {
    display: "grid",
    alignItems: "center",
    gridTemplateColumns : {sm : "50%", md: "50%"},
    // border: "1px solid red",
    // gridAutoRows : "100px"
    justifyContent : {sm : "center", md: "flex-start"}


  },

  textChildContainer: {
    display: "grid",
    // alignItems: "center",
    gridRowGap : "30px",
    // border: "1px solid red",
    // gridAutoRows : "100px"
    // justifyContent: "center"
    // justifySelf : "center",
    // textAlign : {sm: "center", md: "left"},

  },

  headingTwo: {
    fontFamily: "Roboto",
    fontSize: "28px",
    color: "black",
    fontWeight: "600",
    // lineHeight: "30px",
    // border: "1px solid red",
    opacity: 0.7,
  },

  paragraph: {
    fontFamily: "Roboto",
    fontSize: "13px",
    color: "black",
    fontWeight: "200",
    // marginTop: "15px",
    // border: "1px solid red",
    opacity: 0.6,
    marginBottom : "0"
  },

  btnsContainer: {
    display: "flex",
    flexDirection: "row",
    gap: "15px",
    // border: "1px solid red",
    marginTop : "0",
    // justifyContent: {sm: "center", md: "flex-start"}
  },

  cardBtn: {
    background: "#fff",
    color: "#000000",
    outline: "none",
    border: "1px solid #000000",
    borderRadius: "30px",
    textTransform: "capitalize",
    fontSize: "11px",
    height: "40px",
    width: "115px",
    fontWeight: "900",
    "&:hover": {
      background: "#fff",
      color: "#ff7468",
      border: "1px solid #ff7468",
    },
  },
};

export default sectionNineStyles;
