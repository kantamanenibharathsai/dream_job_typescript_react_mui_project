const sectionSevenStyles = {
  sectionContainer: {
    width: "100%",
    padding: "60px 0px",
  },

  sectionChildContainer: {
    width: "90%",
    margin: "auto",
    display: "grid",
    gridTemplateColumns : "100%",
    gap: "40px"
    // border: "1px solid pink",
  },

  textContainer: {
    width: "100%",
    textAlign: "center",
    // border: "1px solid orange",
  },

  headingTwo: {
    fontFamily: "Roboto",
    fontSize: "28px",
    color: "black",
    fontWeight: "600",
    lineHeight: "30px",
    // border: "1px solid red",
    opacity: 0.7,
  },

  paragraph: {
    fontFamily: "Roboto",
    fontSize: "13px",
    color: "black",
    fontWeight: "200",
    marginTop: "15px",
    // border: "1px solid red",
    opacity: 0.6,
  },

  cardsContainer: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: { xs: "100%", sm: "60%", md: "repeat(3, 1fr)" },
    gridAutoFlow: { xs: "row", md: "column" },
    gap: {xs: "20px", md: "30px", lg: "140px"},
    justifyContent: { sm: "center", md: "strech" },
  },
};

export default sectionSevenStyles;
