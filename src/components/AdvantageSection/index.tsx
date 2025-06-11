import { Box, Grid, Stack, Typography } from "@mui/material";
import {
  Boxes,
  CheckCircle2,
  FileCheck2,
  Gauge,
  History,
  Layers3,
} from "lucide-react";
import { useTranslations } from "next-intl";
import styles from "./styles";

// İkonları obje halinde tutuyoruz
const icons = {
  highSpeed: <History size={32} />,
  highPrecision: <Gauge size={32} />,
  advancedSurface: <Layers3 size={32} />,
  materialSelection: <Boxes size={32} />,
  qualityControl: <CheckCircle2 size={32} />,
  certificatesReports: <FileCheck2 size={32} />,
};

const AdvantagesSection = () => {
  const t = useTranslations("Advantages");

  // Kartlarda gösterilecek itemlar
  const items = [
    { key: "highSpeed" },
    { key: "highPrecision" },
    { key: "advancedSurface" },
    { key: "materialSelection" },
    { key: "qualityControl" },
    { key: "certificatesReports" },
  ];

  return (
    <Box sx={styles.wrapper}>
      {/* Başlıklar */}
      <Box sx={styles.fadeInUp}>
        <Typography variant="h5" sx={styles.title}>
          {t("whyChooseUs")}
        </Typography>
        <Typography variant="h2" sx={styles.subTitle}>
          {t("subtitle")}
        </Typography>
      </Box>

      {/* Kartların Sarmalayıcısı */}
      <Box sx={styles.container}>
        <Grid container spacing={4} justifyContent="center">
          {items.map(({ key }, index) => (
            <Grid key={key} size={{ xs: 12, sm: 6, md: 4 }}>
              {/* Kart animasyonu */}
              <Box
                sx={[
                  styles.slideLeft,
                  // Stagger efekti → her karta gecikme ekler
                  { animationDelay: `${index * 0.3}s` },
                ]}
              >
                <Stack
                  direction={{ xs: "row", sm: "column" }}
                  sx={styles.gridContainer}
                >
                  {/* İkon (scaleUp animasyonu) */}
                  <Box
                    sx={[
                      styles.scaleUp,
                      { animationDelay: `${index * 0.3 + 0.2}s` },
                    ]}
                  >
                    <Box sx={styles.iconWrapper}>
                      {icons[key as keyof typeof icons]}
                    </Box>
                  </Box>

                  {/* Açıklamalar */}
                  <Stack spacing={1}>
                    <Typography variant="h6" fontWeight="bold">
                      {t(`${key}.title`)}
                    </Typography>
                    <Typography variant="body2">
                      {t(`${key}.description`)}
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default AdvantagesSection;
