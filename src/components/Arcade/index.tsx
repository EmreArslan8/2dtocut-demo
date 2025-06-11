"use client";

import ArcadePlaceholder from "@/components/ArcadePlaceholder";
import { useDrawer } from "@/context/DrawerContext";
import useScreen from "@/hooks/useScreen";
import { Link } from "@/i18n/routing";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import styles from "./styles";

const Arcade = () => {
  const [selectedFrame, setSelectedFrame] = useState<"dxf" | "image">("dxf");
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const t = useTranslations("Arcade");
  const { isMobile, mdUp } = useScreen();
  const { setDrawerOpen } = useDrawer();

  const handleFrameChange = (frame: "dxf" | "image") => {
    setSelectedFrame(frame);
    if (!iframeLoaded) {
      setIframeLoaded(true);
    }
  };

  return (
    <Stack sx={styles.wrapper}>
      <Container maxWidth="xl" sx={styles.container}>
        <Typography variant="h2" sx={styles.title}>
          {t("title")}
        </Typography>
        <Typography variant="subtitle1" sx={styles.description}>
          {t("description")}
        </Typography>

        <Box sx={styles.sectionWrapper}>
          {!isMobile && (
            <>
              <Typography variant="h2" sx={styles.sectionTitle}>
                {t("section")}
              </Typography>
              <Typography variant="h5" sx={styles.buttonDescription}>
                Click button to learn how it works
              </Typography>
            </>
          )}

          <Stack direction="row" sx={styles.buttonContainer}>
            <Button
              variant="outlined"
              color="primary"
              size="medium"
              onClick={() => handleFrameChange("dxf")}
            >
              {t("button1")}
            </Button>
            <Button
              variant="outlined"
              size="medium"
              color="primary"
              onClick={() => handleFrameChange("image")}
            >
              {t("button2")}
            </Button>
          </Stack>

          <Box sx={styles.frameWrapper} suppressHydrationWarning>
            {!iframeLoaded && <ArcadePlaceholder />}
            {iframeLoaded && selectedFrame === "dxf" && (
              <iframe
                src="https://demo.arcade.software/cprLdNTLy15i72nFanYS?embed&embed_mobile=inline&embed_desktop=inline&show_copy_link=true"
                title="2dtocut.com"
                frameBorder="0"
                loading="lazy"
                allowFullScreen
                allow="clipboard-write"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  colorScheme: "light",
                }}
              />
            )}
            {iframeLoaded && selectedFrame === "image" && (
              <iframe
                src="https://demo.arcade.software/03BAKVkURRqW995ny5B5?embed&embed_mobile=inline&embed_desktop=inline&show_copy_link=true"
                frameBorder="0"
                loading="lazy"
                allowFullScreen
                allow="clipboard-write"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  colorScheme: "light",
                }}
              />
            )}
          </Box>
        </Box>

        {mdUp && (
          <Stack sx={styles.paperWrapper}>
            <Paper elevation={3} sx={styles.paper}>
              <Grid container spacing={2} alignItems="center">
                <Grid size={{ xs: 12, md: 8 }} sx={styles.content}>
                  <Typography variant="h5" sx={styles.title2}>
                    {t("paperTitle")}
                  </Typography>
                  <Stack sx={styles.buttonGroup}>
                    <Button
                      variant="contained"
                      onClick={() => setDrawerOpen(true)}
                      color="primary"
                    >
                      {t("offerButton")}
                    </Button>
                    <Link href="/contact">
                      <Button variant="outlined" color="primary">
                        {t("supportButton")}
                      </Button>
                    </Link>
                  </Stack>
                  <Typography variant="body2" sx={styles.description2}>
                    {t("info")}
                  </Typography>
                </Grid>

                <Grid size={{ xs: 12, md: 4 }} sx={styles.paperImage}>
                  <Image
                    src="/static/images/upload.svg"
                    alt=""
                    width={300}
                    height={200}
                  />
                </Grid>
              </Grid>
            </Paper>
          </Stack>
        )}
      </Container>
    </Stack>
  );
};

export default Arcade;
