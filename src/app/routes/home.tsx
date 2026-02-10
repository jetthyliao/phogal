import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import MainLayout from "@/components/layouts/MainLayout";

import PhotoDialog from "@/components/ui/photoDialog/PhotoDialog";
import { ImageList, ImageListItem } from "@mui/material";
import type { PhotoData, Photo } from "@/types/photo";

const fetchConfig = async () => {
  const response = await fetch(`${import.meta.env.BASE_URL}config.json`); // Path relative to the public folder
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json(); // Parses the JSON data into a JavaScript object
};

const HomeRoute = () => {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<Photo>({
    title: "",
    description: "",
    metadata: {},
    path: "",
    bg_color: "",
    card_color: ""
  });
  const handleClickOpen = (photo: Photo) => {
    setOpen(true);
    setSelectedValue(photo);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["config"], // Unique key for the query
    queryFn: fetchConfig, // The fetching function
  });

  if (isLoading) {
    return <p>Loading configuration...</p>;
  }

  if (error) {
    return <p>Error loading config: {error.message}</p>;
  }

  const photoData: PhotoData = data;

  return (
    <MainLayout>
      <ImageList variant="quilted">
        {photoData.map((photo, index) => (
          <ImageListItem key={index}>
            <img
              src={photo.path}
              alt={`Gallery item ${index}`}
              onClick={() => handleClickOpen(photo)}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>

      <PhotoDialog
        photo={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </MainLayout>
  );
};

export default HomeRoute;
