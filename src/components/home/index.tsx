"use client";

import AdvantageSection from "@/components/AdvantageSection";
import Arcade from "@/components/Arcade";
import Archivements from "@/components/Archivements";
import Blogs from "@/components/Blogs";
import CustomBanner from "@/components/CustomBanner";
import ExampleSlider from "@/components/ExampleWorks";
import FeatureSection from "@/components/FeatureSection";
import FileUpload from "@/components/FileUpload";
import HeroSection from "@/components/HeroSection";
import MaterialListSection from "@/components/MaterialSection";
import ServicesSection from "@/components/ServiceSection";
import WhatsAppButton from "@/components/WpButton";
import useFileUpload from "@/hooks/useFileUpload";
import Stack from "@mui/material/Stack";

const HomePage = () => {
  const { uploadedFiles, setUploadedFiles } = useFileUpload();
  return (
    <Stack sx={{ backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      <CustomBanner />

      <FileUpload
        onFileUpload={(files) => {
          setUploadedFiles(files);
        }}
        files={uploadedFiles}
        setUploadedFiles={setUploadedFiles}
      />

      <FeatureSection />
      <Arcade />
      <ServicesSection />
      <HeroSection />
      <Archivements />
      <MaterialListSection />
      <AdvantageSection />
      <ExampleSlider />
      <Blogs />
      <WhatsAppButton />
    </Stack>
  );
};

export default HomePage;
