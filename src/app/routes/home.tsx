import { useState } from "react";
import MainLayout from "@/components/layouts/MainLayout";

import image1 from "@/assets/2026-01-16_0134_02.jpg";
import image2 from "@/assets/2026-01-16_0135.jpg";
import image3 from "@/assets/2026-01-17_0018.jpg";
import image4 from "@/assets/2026-01-17_0062.jpg";
import image5 from "@/assets/2026-01-17_0121.jpg";
import image6 from "@/assets/2026-01-17_0224.jpg";

import ImageDialog from "@/components/ui/imageDialog/ImageDialog";
import { ImageList, ImageListItem } from "@mui/material";

const HomeRoute = () => {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const handleClickOpen = (imageSource: string) => {
    setOpen(true);
    setSelectedValue(imageSource)
  };
  const handleClose = (value: string) => {
    setOpen(false);
  };

  // TODO: dictionary of image objects (defined in readme...)

  // TODO: use dict to render all images here
  // TODO: create pages for each month (or tabs)

  const image_objs = [
    { "path": "/assets/2026-01-16_0134_02.jpg", },
    { "path": "/assets/2026-01-16_0135.jpg", },
    { "path": "/assets/2026-01-17_0018.jpg", },
    { "path": "/assets/2026-01-17_0062.jpg", },
    { "path": "/assets/2026-01-17_0121.jpg", },
    { "path": "/assets/2026-01-17_0224.jpg", },
  ]

  return (
    <MainLayout>
      <ImageList variant="quilted">
        {image_objs.map((image, index) => (
          <ImageListItem key={index}>
            <img
              src={image.path}
              alt={`Gallery item ${index}`}
              onClick={() => handleClickOpen(image.path)}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>

      <ImageDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />

    </MainLayout >

  );
};

export default HomeRoute;
