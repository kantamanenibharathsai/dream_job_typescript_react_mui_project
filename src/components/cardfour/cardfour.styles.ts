const cardFourStyles = {
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    // border: "2px solid red",
    backgroundColor: "white !important",
    borderRadius: "10px",
    padding: "25px 0px",
    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
  },

  cardChildContainer: {
    // border: "2px solid green",
    width: "90%",
    margin: "auto",
    textAlign: "center",
  },

  heading: {
    font: "normal 600 20px Roboto",
    opacity: 0.7,
  },

  paragraph: {
    font: "normal 200 14px Roboto",
    opacity: 0.7,
  },

  horizontalLine: {
    border: "1px solid black",
    width: "50%",
    margin: "auto",
    marginTop: "30px",
    marginBottom: "30px",
  },

  numberText: {
    font: "normal 600 20px Roboto",
    opacity: 0.7,
  },

  monthText: {
    font: "normal 100 14px Roboto",
    opacity: 0.7,
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
    marginTop: "30px",
  },
};

export default cardFourStyles;
