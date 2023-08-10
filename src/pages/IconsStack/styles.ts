export const style = {
  fixedIcons: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  centeredIcons: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
    gridGap: "25px",
    border: "5px solid #8F82FF",
    padding: "22px",
    borderRadius: "5px",
  },
  iconWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "50px",
    height: "50px",
  },
  imgMain: {
    margin: "30px 0",
    width: "800px",
  },
  sectionContainer: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    overflowY: "auto",
  },
  stickyIcons: {
    position: "sticky",
    top: "50%",
    transform: "translateY(-50%)",
  },
  centeredContent: {
    display: "flex",
    color: "white",
    backgroundColor: "black",
    justifyContent: "center",
    width: "100%",
  },
};
