import { keyframes } from "@emotion/react";
import { palette } from "@/theme/theme";

// Fade-in yukarı doğru
const fadeInUp = keyframes`
  0% {
    opacity: 0.2;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Soldan sağa kayarak görünme
const slideLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-40px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

// Hafif ölçek büyümesi
const scaleUp = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.85);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const styles = {
  wrapper: {
    py: 8,
    background: palette.customPrimary[700], // Renk örneği
    color: "white",
  },
  fadeInUp: {
    animation: `${fadeInUp} 1.5s ease-in-out forwards`,
  },
  slideLeft: {
    animation: `${slideLeft} 1.5s ease-in-out forwards`,
  },
  scaleUp: {
    animation: `${scaleUp} 1.5s ease-in-out forwards`,
  },
  container: {
    // Kartların ana sarmalayıcısı
    // İsteğe göre ek stil
  },

  title: {
    textAlign: "center",
    mb: 2,
  },
  subTitle: {
    textAlign: "center",
    mb: 4,
  },

  gridContainer: {
    direction: { xs: "row", sm: "column" },
    gap: 2,
    alignItems: { xs: "center", sm: "flex-start" },
    p: 3,
    height: "100%",
  },

  card: {
    height: "100%",
    p: 4,
    display: "flex",
    flexDirection: { xs: "row", sm: "column" },
    alignItems: { xs: "center", sm: "center", md: "flex-start" },
    gap: 2,
    // Eğer kartlara da animasyon eklemek istersen:
    // animation: `${fadeInUp} 1.5s ease-in-out forwards`,
  },

  iconWrapper: {
    width: 64,
    height: 64,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "12px",
    background: "linear-gradient(135deg, #016fbf, #3f8efc, #00c6ff)",
    flexShrink: 0,
  },
};

export default styles;
