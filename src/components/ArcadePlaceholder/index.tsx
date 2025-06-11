"use client";

import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export default function MacWindowPlaceholder() {
  // Örnek madde listesi
  const steps = [
    "First upload your design file (drag & drop or manual selection).",
    "Check and confirm the product dimensions.",
    "Select the material and thickness. Enter the quantity.",
    "Choose extra services.",
    "Add to cart and complete your order.",
  ];

  return (
    <Box
      sx={{
        width: { xs: "95%", md: "900px" },
        margin: "40px auto",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        position: "relative",
        backgroundColor: "#fff",
      }}
    >
      {/* Mac pencere üst bar */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: "30px",
          backgroundColor: "#f5f5f5",
          px: "10px",
        }}
      >
        {/* Sol taraftaki üç renkli nokta */}
        <Stack direction="row" spacing={1}>
          <Box
            sx={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: "#ff5f56",
            }}
          />
          <Box
            sx={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: "#ffbd2e",
            }}
          />
          <Box
            sx={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: "#27c93f",
            }}
          />
        </Stack>
      </Box>

      {/* Bulanık arkaplan resmi */}
      <Box
        sx={{
          width: "100%",
          height: { xs: 300, sm: 400, md: 470, lg: 550 },
          backgroundImage: 'url("/static/images/placeholder-2.webp")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(4px)",
        }}
      />

      {/* Metin ve maddeler için içerik katmanı */}
      <Box
        sx={{
          position: "absolute",
          top: "30px", // Mac bar’ın hemen altında başlasın
          left: 0,
          width: "100%",
          height: { xs: 300, sm: 400, md: 470, lg: 550 },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center", // Dikeyde ortalama
          alignItems: "center", // Yatayda ortalama
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "#fff",
          px: 2,
        }}
      >
        <Typography variant="h2" alignContent="start" sx={{ mb: 3 }}>
          How to Upload Your Design File
        </Typography>

        <Box sx={{ maxWidth: 600, mb: 2 }}>
          {steps.map((step, index) => (
            <Stack
              key={index}
              direction="row"
              alignItems="center"
              spacing={1}
              sx={{ mb: 1 }}
            >
              <CheckCircleOutlineIcon
                fontSize="small"
                sx={{ color: "limegreen" }}
              />
              <Typography
                variant="body1"
                sx={{
                  fontSize: {
                    xs: "0.8rem",
                    sm: "0.9rem",
                    md: "1.3rem",
                  },
                }}
              >
                {step}
              </Typography>
            </Stack>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
