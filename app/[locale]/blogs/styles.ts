const styles = {
  wrapper: {
    pb: 10,
    pt: 2,
  },
  subTitle: {
    textAlign: "center",
    mb: 3,
  },
  title: {
    textAlign: "center",
    mb: 2,
    fontWeight: "bold",
    color: "text.secondary",
  },
  cardContainer: {
    overflow: "hidden",
    boxShadow: 3,
    display: "flex",
    flexDirection: "column",
    height: "100%", // Tüm kartların eşit yükseklikte olmasını sağlar
    minHeight: 400, // Kart yüksekliği sabitlenmiş olur
    backgroundColor: "white",
  },
  imageWrapper: {
    width: "100%",
    height: 250, // Resmin boyutu tüm kartlarda aynı olacak
    overflow: "hidden",
    position: "relative",
  },
  cardContent: {
    flexGrow: 1,
    p: 2,
    display: "flex",
    flexDirection: "column",
  },
  cardTitle: {
    fontWeight: "bold",
  },
  cardDesc: {
    mt: 1,
    color: "black",
    flexGrow: 1,
  },
  readMoreButton: {
    mt: 2,
    textAlign: "left",
  },
};

export default styles;
