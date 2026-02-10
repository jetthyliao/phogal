import Dialog from "@mui/material/Dialog";
import type { Photo } from "@/types/photo";
import { Card, DialogContent, Divider } from "@mui/material";

import exifr from 'exifr';
import { useEffect, useState } from "react";

const formatShutterSpeed = (exposureTime: number) => {
  if (!exposureTime) return 'N/A';

  // For speeds 1 second or longer
  if (exposureTime >= 1) {
    return `${Math.round(exposureTime * 10) / 10}"`; // e.g. 1.5"
  }

  // For speeds shorter than 1 second (the 1/X format)
  const denominator = Math.round(1 / exposureTime);
  return `1/${denominator}`;
};

export interface PhotoDialogProps {
  open: boolean;
  photo: Photo;
  onClose: () => void;
}

export default function PhotoDialog(props: PhotoDialogProps) {
  const { onClose, photo, open } = props;

  const handleClose = () => {
    onClose();
  };

  const [meta, setMeta] = useState({
    "Model": "NIKON D5100",
    "ISO": "",
    "FNumber": "",
    "ExposureTime": 0
  });

  useEffect(() => {
    if (photo.path) {
      // You can specify exactly which tags you want to save memory
      exifr.parse(photo.path, ['ISO', 'ShutterSpeed', 'ExposureTime', 'FNumber', 'Model'])
        .then(data => {
          setMeta(data);
          console.log(data)
        })
        .catch(err => console.error("Error parsing EXIF:", err));
    }
  }, [photo.path]);

  return (
    <Dialog onClose={handleClose} open={open} fullScreen>
      <DialogContent style={{ backgroundColor: photo.bg_color }}>
        <div className=" w-full flex items-center justify-center mb-6">
          <img
            src={photo.path}
            className="max-h-[100vh] max-w-full object-contain"
          />
        </div>

        <Card className="max-w-100 mx-auto w-5/6 p-3" style={{ backgroundColor: `color-mix(in srgb, ${photo.bg_color}, white 10%)` }}>
          <div className="pb-3">{photo.title}</div>
          <Divider/>
          <div className="pt-3">Model: {meta.Model}</div>
          <div>ISO: {meta.ISO}</div>
          <div>Shutter Speed: {formatShutterSpeed(meta.ExposureTime)}</div>
          <div>F-stop: {meta.FNumber}</div>
        </Card>
      </DialogContent>
    </Dialog>
  );
}
