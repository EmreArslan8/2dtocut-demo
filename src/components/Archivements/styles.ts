import { defaultMaxWidth } from "@/theme/theme";

const styles = {
  wrapper: {
    py: 10,
    bgcolor: "white",
    defaultMaxWidth
  },
  title: {
    color: "primary.main",
    textAlign: "center",
    fontWeight: 700,


  },
  subTitle: {
    variant: "h2",
    textAlign: "center",
    fontWeight: 800,
    mb: 1,
  },
  description: {
    textAlign: "center",
    maxWidth: 800,
    fontWeight: 400,
    mx: "auto",
    mb: 6,
    fontSize: 18 ,
  },
  counterValue: {
    component: "div",
    variant: "h4",
    fontWeight: 800,
    color: "primary.main",
    fontSize: { xs: 24, sm: 28, md: 32 },
  },
  counterText: {
    variant: "subtitle1",
    color: "text.primary",
    fontSize: { xs: 14, sm: 16, md: 18 },
  },
};

export default styles;
