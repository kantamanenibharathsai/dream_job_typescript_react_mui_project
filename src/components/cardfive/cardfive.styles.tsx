const cardStyles = {
  cardContainer: {
    // border: "2px solid green",
    backgroundColor: "white !important",
    borderRadius: "10px",
    // padding: "5px",
    boxSizing: "border-box",
    // width: {md: "100%",  },
    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
    // margin: { xs: "auto", sm: "auto", md: "0px" },
    // marginBottom: { xs: "20px", sm: "20px", md: "10px" },
  },

  dateContainer: {
    width: "90%",
    backgroundColor: "white",
    padding: "10px 0px",
    // border: "1px solid green",
    margin : "auto",
    marginTop: '-38px',
    textAlign: "center",
    // boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'

  },

  dateText: {
    color: "black",
    fontSize: "12px",
    fontWeight: "500",
    fontFamily: "Roboto",
  },

  contentContainer: {
    width: "90%",
    margin: "auto",
    textAlign : "center",
    display : "flex",
    flexDirection : "column",
    justifyContent : "center",
    alignItems : "center",
    gap: "10px",
    // border: "1px solid red",
    marginTop : "50px",
    marginBottom: "20px"
  },

  anchorIconContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: "21px",
    gap: "6px"
  },

  heading: {
    font: "normal 600 18px Roboto",
    opacity: 0.7,
  },

  paragraph: {
    font: "normal 200 12px Roboto",
    opacity: 0.7,
  },

  readMoreText : {
    font: "normal 200 12px Roboto",
    opacity: 0.7,
    color : "black"
  },

  arrowIcon : {
        fontSize: "17px",
        color : "black"
  }
};

export default cardStyles;
