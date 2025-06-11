"use client";

import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "../common/Link";
import styles from "./styles";

const BlogPost = () => {
  const t = useTranslations("Blog");

  const posts = t.raw("posts") as Array<{
    title: string;
    slug: string;
    mainImage: string;
    excerpt: string;
    date: string;
  }>;

  return (
    <Box sx={styles.wrapper}>
      <Container>
        <Typography variant="h6" sx={styles.title}>
          {t("title")}
        </Typography>
        <Typography variant="h2" sx={styles.subTitle}>
          {t("subTitle")}
        </Typography>

        {/* Eğer blog postları yoksa, mesaj göster */}
        {posts.length === 0 ? (
          <Typography variant="h5" color="textSecondary" textAlign="center">
            No blog posts available.
          </Typography>
        ) : (
          <Grid container spacing={4}>
            {posts.map((post) => (
              <Grid key={post.slug} size={{ xs: 12, md: 4 }}>
                <Box sx={styles.cardContainer}>
                  <Box sx={styles.imageWrapper}>
                    <Image
                      src={post.mainImage}
                      alt={post.title}
                      fill
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </Box>

                  {/* Kart İçeriği */}
                  <Box sx={styles.cardContent}>
                    <Typography variant="h6" sx={styles.cardTitle}>
                      {post.title}
                    </Typography>
                    <Typography variant="body2" sx={styles.cardDesc}>
                      {post.excerpt}
                    </Typography>
                    <Box sx={styles.readMoreButton}>
                      <Link href={`blog/${post.slug}`}>
                        <Button variant="text" color="primary">
                          Read More →
                        </Button>
                      </Link>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default BlogPost;
