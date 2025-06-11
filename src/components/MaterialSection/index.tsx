"use client";

import useScreen from "@/hooks/useScreen";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { CheckCircle, Play } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import Link from "../common/Link";
import styles from "./styles";

const MaterialSection = () => {
  const t = useTranslations("MaterialSection");
  const [videoLoaded, setVideoLoaded] = useState(false);
  const { isMobile, mdUp } = useScreen();
  const thumbnailHeight = mdUp ? 400 : 200;

  const materials = Object.keys(t.raw("materials")).map((key) =>
    t(`materials.${key}`)
  );

  const handleVideoLoad = () => setVideoLoaded(true);

  return (
    <Box sx={styles.wrapper}>
      <Grid container spacing={isMobile ? 0 : 4} alignItems="center">
        <Grid size={{ xs: 12, md: 6 }} sx={{ position: "relative" }}>
          {!videoLoaded ? (
            <Box
              sx={{ position: "relative", cursor: "pointer" }}
              onClick={handleVideoLoad}
            >
              <Image
                src="/static/images/banner2.webp"
                alt="Video Thumbnail"
                width={570}
                height={thumbnailHeight}
                style={{ width: "100%", height: "auto", borderRadius: 8 }}
              />
              <Play
                fontSize={30}
                style={{
                  position: "absolute",
                  bottom: 16,
                  left: 16,
                  color: "#fff",
                }}
              />
            </Box>
          ) : (
            <Box
              component="video"
              src="https://cdn.shopify.com/videos/c/o/v/658e2511bd5447d993fe3505c670fa24.mp4"
              autoPlay
              loop
              muted
              playsInline
              sx={styles.video}
            />
          )}
        </Grid>

        {/* Text Content */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Stack spacing={3} sx={styles.textContent}>
            <Typography variant="h3" sx={styles.title}>
              {t("title")}
            </Typography>
            <Typography variant="h2">{t("subtitle")}</Typography>
            <Typography sx={styles.description}>{t("description")}</Typography>
            {materials.length > 0 ? (
              <Grid container spacing={2}>
                {materials.map((item, index) => (
                  <Grid size={{ xs: 6 }} key={index}>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <CheckCircle size={30} color="#006FBF" />
                      <Typography variant="body2">{item}</Typography>
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            ) : (
              <Typography color="error">Materials data is missing!</Typography>
            )}
            <Link href="contact">
              <Button variant="contained" sx={styles.button}>
                {t("button")}
              </Button>
            </Link>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MaterialSection;
