import { palette } from "@/theme/theme";

const styles = {
  wrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    py: { xs: 2, sm: 2, md: 8 },
  },
  badgeTitleContainer: {
    display: { xs: "block", md: "none" },
    textAlign: "center",
    pb: { xs: 3, sm: 4 },
  },
  badge: {
    fontWeight: "bold",
    mb: 1,
    color: {xs: "primary.main", md: "white" }
  },
  title: {
    fontWeight: "bold",
  },
  container: {
    width: "90%",
    maxWidth: "lg",
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    borderRadius: 2,
    overflow: "hidden",
    boxShadow: 3,
    m: "0 auto",
    height: { md: "400px" },
  },
  imageWrapper: {   
    flex: 1,
    position: "relative",
    aspectRatio: { xs: "16 / 9", md: 1},
    height: "100%",
    minWidth: { xs: 300, md: "auto" }, // Mobilde genişlik 300px
    minHeight: { xs: 300, md: "auto" },
    pr: { xs: 0, md: 14 }, // Mobilde padding kaldır
  },
  contentWrapper: {
    flex: 1,
    bgcolor: palette.customPrimary[700],
    color: "white",
    p: { xs: 1, md: 6 },
    display: "flex",
    alignItems: "center", // Metni ortala
    justifyContent: "center",
    textAlign: { xs: "center", md: "left" }, // Mobilde ortala, masaüstünde sola hizala
  },
  gridContainer: {
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    width: "90%",
    alignItems: "center",
    justifyContent: "space-between",
    p: 2,
  },
  textContainer: {
    textAlign: { xs: "center", sm: "left" },
  },
  ctaTitle: {
    fontWeight: 800,
  },
  slogan: {
    fontWeight: 500,
  },
  buttonWrapper: {
    pt: { xs: 1, md: 3 },
    pb: { xs: 3, md: 1 },
    display: "flex",
    justifyContent: { xs: "center", md: "flex-start" }, // Mobilde ortala
  },
  buttonContainer: {
    textAlign: { xs: "center", sm: "right" },
  },
  button: {
    bgcolor: "white",
    color: "primary.main",
    borderRadius: 1,
    mt: 2,
  },
};

export default styles;
