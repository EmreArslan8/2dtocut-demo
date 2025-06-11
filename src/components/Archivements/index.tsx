import { Box, Container, Grid, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import Counter from "../common/Counter";
import styles from "./styles";

const achievements = [
  { start: 0, end: 3, suffix: "+" as const, key: "experience" },
  { start: 0, end: 25, suffix: "+" as const, key: "ourWorker" },
  { start: 0, end: 5, suffix: "+" as const, key: "companyPartner" },
  { start: 0, end: 100, suffix: "+" as const, key: "happyClients" },
];

const Archivements = () => {
  const t = useTranslations("Archivements");

  return (
    <Box sx={styles.wrapper}>
      <Container>
        <Typography variant="h6" sx={styles.title}>
          {t("title")}
        </Typography>
        <Typography variant="h2" sx={styles.subTitle}>
          {t("subTitle")}
        </Typography>
        <Typography variant="h6" sx={styles.description}>
          {t("description")}
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {achievements.map((item, index) => (
            <Grid key={index} size={{ xs: 6, md: 3 }} textAlign="center">
              {/* ✅ Sayı Animasyonu */}
              <Counter
                start={item.start}
                end={item.end}
                duration={3000}
                fontSize="2rem"
                color="#1976D2"
                suffix={item.suffix}
              />

              {/* ✅ Açıklamalar */}
              <Typography>{t(item.key)}</Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Archivements;
