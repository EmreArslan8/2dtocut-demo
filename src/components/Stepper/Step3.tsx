"use client";

import { useDrawer } from "@/context/DrawerContext";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  Grid,
  MenuItem,
  Modal,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { CircleCheckBig } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Step3 = ({
  svg,
  onBack,
  onConfirm,
  dispatch,
}: {
  svg: string;
  onBack: () => void;
  onConfirm: () => void;
  dispatch: (payload: { extraServices?: string[]; coating?: string }) => void;
}) => {
  const t = useTranslations("Step3");
  const [isModalOpen, setModalOpen] = useState(false);
  const { setDrawerOpen } = useDrawer();
  const handleGoHome = () => {
    setModalOpen(false);
    setDrawerOpen(false);
  };

  const router = useRouter();
  const locale = useLocale();

  useEffect(() => {
    if (isModalOpen) {
      const timeout = setTimeout(() => {
        router.push(`/${locale}/cart`);
      }, 10000);
      return () => clearTimeout(timeout);
    }
  }, [isModalOpen, router, locale]);

  const handleGoToCart = () => {
    router.push(`/${locale}/cart`);
    setTimeout(() => {
      setDrawerOpen(false); // Sonra Drawer'ı kapat
    }, 50); // Küçük bir gecikme ile ana sayfanın görünmesini engelle
  };

  const handleConfirm = () => setModalOpen(true);

  const extraServices = t.raw("extraServices") as {
    key: string;
    name: string;
    description: string;
  }[];
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [customColor, setCustomColor] = useState<string>("");

  const handleServiceToggle = (serviceKey: string) => {
    const updatedServices = selectedServices.includes(serviceKey)
      ? selectedServices.filter((s) => s !== serviceKey)
      : [...selectedServices, serviceKey];

    setSelectedServices(updatedServices);
    dispatch({ extraServices: updatedServices });

    // Eğer Boya (painting) seçilmişse, özel renk alanlarını sıfırla
    if (serviceKey === "painting") {
      setSelectedColor("");
      setCustomColor("");
    }

    console.log("✅ Seçilen Ek Hizmetler (Key Bazlı):", updatedServices);
  };

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
    setCustomColor("");

    if (color === t("customColor")) {
      dispatch({ coating: "" });
    } else {
      dispatch({ coating: color });
    }
  };

  const handleCustomColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomColor(e.target.value);
    dispatch({ coating: e.target.value });
  };

  return (
    <Box sx={{ mt: 4 }}>
      {/* 🟢 Başlık & Açıklama */}
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 1 }}>
        {t("title")}
      </Typography>
      <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
        {t("description")}
      </Typography>

      <Grid container spacing={4}>
        {/* 📌 DXF Önizleme */}
        <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: "center" }}>
          <Box sx={{ border: "1px solid #ccc", p: 2, borderRadius: "8px" }}>
            <div
              dangerouslySetInnerHTML={{ __html: svg }}
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
        </Grid>

        {/* 📌 Ek Hizmet Seçimi */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {extraServices.map((service: { key: string; name: string }) => (
              <Paper
                key={service.key}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  p: 2,
                  borderRadius: "12px",
                  border: selectedServices.includes(service.key)
                    ? "2px solid #1976D2"
                    : "1px solid #ddd",
                  backgroundColor: selectedServices.includes(service.key)
                    ? "#E3F2FD"
                    : "transparent",
                  cursor: "pointer",
                  transition: "0.3s",
                }}
                onClick={() => handleServiceToggle(service.key)}
              >
                <Typography
                  variant="body1"
                  fontWeight="bold"
                  color={
                    selectedServices.includes(service.key) ? "#1976D2" : "#000"
                  }
                >
                  {service.name}
                </Typography>
                <Checkbox
                  checked={selectedServices.includes(service.key)}
                  color="primary"
                />
              </Paper>
            ))}

            {/* 🟢 Boya Seçilirse Renk Girişi */}

            {selectedServices.includes(extraServices[1]?.key) && (
              <Box sx={{ mt: 2 }}>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  {t("colorSelection")}
                </Typography>
                <FormControl fullWidth>
                  <Select
                    value={selectedColor}
                    onChange={(e) => handleColorChange(e.target.value)}
                    displayEmpty
                  >
                    <MenuItem value="">{t("selectColor")}</MenuItem>
                    <MenuItem value="Black">{t("black")}</MenuItem>
                    <MenuItem value="Blue">{t("blue")}</MenuItem>
                    <MenuItem value="Red">{t("red")}</MenuItem>
                    <MenuItem value={t("customColor")}>
                      {t("customColor")}
                    </MenuItem>
                  </Select>
                </FormControl>

                {/* Kullanıcı özel renk seçerse giriş alanını aç */}
                {selectedColor === t("customColor") && (
                  <TextField
                    label={t("customColor")}
                    fullWidth
                    sx={{ mt: 2 }}
                    value={customColor}
                    onChange={handleCustomColorChange}
                  />
                )}
              </Box>
            )}
          </Box>
        </Grid>
      </Grid>

      {/* 🔹 Geri & Siparişi Tamamla Butonları */}
      <Box sx={{ mt: 3, display: "flex", justifyContent: "flex-end", gap: 2 }}>
        <Button variant="outlined" onClick={onBack}>
          {t("buttons.back")}
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            onConfirm(); // Dışarıdan gelen onConfirm fonksiyonu çağırılır
            handleConfirm(); // Modalı açan fonksiyon çalıştırılır
          }}
        >
          {t("buttons.confirm")}
        </Button>
        <Modal open={isModalOpen} onClose={() => setModalOpen(false)}>
          <Box
            sx={{
              width: { xs: 320, sm: 440 },
              bgcolor: "white",
              p: 4,
              mx: "auto",
              my: "20vh",
              boxShadow: 24,
              textAlign: "center",
              borderRadius: 2,
            }}
          >
            <CircleCheckBig
              size={120}
              color="green"
              style={{ marginBottom: 2 }}
            />

            <Typography variant="h5" fontWeight="bold" sx={{ mb: 1 }}>
              🎉 {t("modalTitle")}
            </Typography>

            <Typography variant="body1" sx={{ color: "text.secondary", mb: 4 }}>
              {t("modalDescription")}
            </Typography>

            <Stack
              direction="row"
              spacing={2}
              justifyContent="center"
              sx={{ mt: 3 }}
            >
              <Button variant="outlined" fullWidth onClick={handleGoHome}>
                {t("homeButton")}
              </Button>

              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleGoToCart}
              >
                {t("cartButton")}
              </Button>
            </Stack>
          </Box>
        </Modal>
      </Box>
    </Box>
  );
};

export default Step3;
