"use client";

import {
  Box,
  Button,
  Drawer,
  IconButton,
  LinearProgress,
  Stack,
  Typography,
} from "@mui/material";
import { useTranslations } from "next-intl";
import styles from "./styles";

import OrderDetails from "@/components/OrderDetails";
import Stepper from "@/components/Stepper";
import { useDrawer } from "@/context/DrawerContext";
import { truncateText } from "@/utils/truncateText";
import { Upload, X } from "lucide-react";

interface FileUploadDrawerProps {
  files: File[];
  svgData: {
    svg: string;
    width: string;
    height: string;
    contourLength: string;
  } | null;
  loadingSvg: boolean;
  isDragging: boolean;
  setIsDragging: (dragging: boolean) => void;
  handleDrop: (event: React.DragEvent<HTMLDivElement>) => void;
  handleFileSelect: (event: React.ChangeEvent<HTMLInputElement>) => void;
  fileInputRef: React.RefObject<HTMLInputElement>;
}

const FileUploadDrawer = ({
  files,
  svgData,
  loadingSvg,
  isDragging,
  setIsDragging,
  handleDrop,
  handleFileSelect,
  fileInputRef,
}: FileUploadDrawerProps) => {
  const t = useTranslations("File");
  const dxfFile = files.find((file) =>
    file.name.toLowerCase().endsWith(".dxf")
  );
  const uploadedFile = files.length > 0 ? files[0] : null;
  const isLoading = uploadedFile && (loadingSvg || (dxfFile && !svgData));
  const { isDrawerOpen, setDrawerOpen } = useDrawer();

  return (
    <Drawer
      open={isDrawerOpen}
      onClose={() => setDrawerOpen(false)}
      anchor="top"
      PaperProps={{ sx: styles.drawer }}
    >
      <Box sx={styles.drawerContent}>
        <IconButton
          sx={styles.closeButton}
          onClick={() => setDrawerOpen(false)}
        >
          <X size={36} />
        </IconButton>
        {uploadedFile ? (
          isLoading ? (
            <Stack alignItems="center" sx={{ mt: 2 }}>
              <Typography sx={{ mb: 1, fontSize: "1.2rem", fontWeight: 500 }}>
                {truncateText(uploadedFile.name)}
              </Typography>
              <Typography sx={{ color: "#666" }}>{t("analyzing")}</Typography>
              <Typography sx={{ mt: 1, fontWeight: 500 }}>
                {t("loading")}
              </Typography>
              <LinearProgress sx={{ width: "80%", mt: 2 }} />
            </Stack>
          ) : dxfFile ? (
            <Stepper
              svg={svgData?.svg || ""}
              width={svgData?.width || ""}
              height={svgData?.height || ""}
              fileName={uploadedFile.name}
              file={uploadedFile}
            />
          ) : (
            <OrderDetails files={files} onClose={() => setDrawerOpen(false)} />
          )
        ) : (
          <Box sx={{ textAlign: "center", maxWidth: "950px", margin: "auto" }}>
            <Typography variant="h2" sx={{ mb: 1, mt: 6 }}>
              {t("title")}
            </Typography>
            <Typography variant="h6" sx={{ mb: 4 }}>
              {t("description")}
            </Typography>
            <Box
              sx={styles.dropZone(isDragging)}
              onDragOver={(e) => {
                e.preventDefault();
                setIsDragging(true);
              }}
              onDrop={handleDrop}
              onDragLeave={() => setIsDragging(false)}
              onClick={() => fileInputRef.current?.click()}
            >
              <Stack spacing={3} alignItems="center">
                <Typography variant="h6">{t("drawerTitle")}</Typography>
                <Typography variant="body">{t("uploadDescription")}</Typography>
                <Button variant="contained" size="large" sx={{ gap: 1 }}>
                  <Upload />
                  {t("uploadFile")}
                </Button>
              </Stack>
              <Typography
                variant="bodySmall"
                sx={{
                  m: 5,
                }}
              >
                🔒 {t("drawerInfo")}
              </Typography>
            </Box>
          </Box>
        )}

        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          multiple
          onChange={handleFileSelect}
        />
      </Box>
    </Drawer>
  );
};

export default FileUploadDrawer;
