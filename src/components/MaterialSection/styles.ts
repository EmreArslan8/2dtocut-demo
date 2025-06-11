const styles = {
  wrapper: {
    maxWidth: "lg",
    mx: "auto",
    py: { xs: 6, md: 10 },
    px: { xs: 2, md: 4 },
  },
  video: {
    width: "100%",
    height: { xs: 300, md: 400 },
    objectFit: "cover",
  },
  textContent: {
    pl: { md: 4 },
    pt: { xs: 4, md: 0 },
  },
  title: {
    color: "primary.main",
    fontWeight: 700,
  },
  subtitle: {
    variant: "h2",
    fontWeight: 800,
  },
  description: {
    color: "text.secondary",
  },
  materialGrid: {
    spacing: 2,
  },
  materialItem: {
    direction: "row",
    spacing: 1,
    alignItems: "center",
  },
  button: {
    bgcolor: "primary",
    width: "fit-content",
    px: 4,
    borderRadius: 0,
  },
};

export default styles;
