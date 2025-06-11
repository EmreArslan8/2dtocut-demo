"use client";

import { Link as I18nLink } from "@/i18n/routing";
import { BlogPost } from "@/types/blog";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import dayjs from "dayjs";
import Image from "next/image";

export function BlogCard({ post, locale }: { post: BlogPost; locale: string }) {
  return (
    <Card
      elevation={3}
      sx={{
        borderRadius: 3,
        overflow: "hidden",
        transition: "transform 0.2s ease-in-out",
        "&:hover": { transform: "translateY(-4px)", boxShadow: 6 },
      }}
    >
      <CardActionArea
        component={I18nLink}
        href={`/blogs/${post.slug}`}
        prefetch={false}
      >
        {/* Görsel */}
        <Box sx={{ position: "relative", width: "100%", height: 200 }}>
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 600px) 100vw, 33vw"
          />
        </Box>

        {/* İçerik */}
        <CardContent>
          {/* Başlık */}
          <Typography
            variant="h6"
            component="h2"
            gutterBottom
            sx={{
              lineClamp: 2,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {post.title}
          </Typography>

          {/* 🆕 Alt başlık / özet */}
          {post.subtitle && (
            <Typography
              variant="body2"
              color="text.secondary"
              gutterBottom
              sx={{
                lineClamp: 2,
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {post.subtitle}
            </Typography>
          )}

          {/* Tarih */}
          <Typography variant="caption" color="text.disabled">
            {dayjs(post.date).format("YYYY-MM-DD")}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
