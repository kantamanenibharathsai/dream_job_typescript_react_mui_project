const cardOneStyles = {
    cardContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      // border: "2px solid red",
      backgroundColor: "white !important",
      borderRadius: "4px",
      padding: "25px 0px",
      gap: "13px",
      boxSizing: "border-box",
      width: { xs: "94%", sm: "46%", md: "23%", lg: "20%" },
      // maxWidth: {md: '49%'},
      margin: { xs: "auto", sm: "0px" },
      // marginBottom: { xs: "15px", sm: "15px", md: "10px" },
      // marginRight: {md: "10px"},
      // boxShadow: "0.1px 0px 0px",
      boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
      // flexGrow: "1"
    },
  
    cardContainerChild: {
      // border: "2px solid green",
      width: "85%",
      margin: "auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "5px",
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
      fontSize: "17px",
      fontWeight: "600",
      color: "black",
      fontFamily: "Roboto",
      // marginLeft: "auto",
      // textAlign: "center",
      // paddingLeft: "6px"
      // border: "2px solid red",
      padding: "0",
      margin: "0px",
      opacity: 0.6
    },
  
    paragraph: {
      fontSize: "15px",
      fontWeight: "100",
      color: "black",
      fontFamily: "Roboto",
      // textAlign: "center",
      // paddingLeft: "6px"
      // border: "2px solid red",
      padding: "0",
      margin: "0px",
      opacity: 0.6
    },

    iconContainer : {
      width: "42px",
      height: "42px",
      backgroundColor: "lightgreen",
      borderRadius: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: "4px"
    },

    icon : {
      color: "black",
      fontSize: "16px"
    }
  };
  
  export default cardOneStyles;
  