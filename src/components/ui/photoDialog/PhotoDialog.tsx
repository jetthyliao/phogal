import Dialog from "@mui/material/Dialog";
import type { Photo } from "@/types/photo";
import { Card, DialogContent } from "@mui/material";

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

  return (
    <Dialog onClose={handleClose} open={open} fullScreen>
      <DialogContent style={{ backgroundColor: photo.color_scheme }}>
        <div className="h-[100vh] w-full flex items-center justify-center mb-6">
          <img
            src={photo.path}
            className="max-h-full max-w-full object-contain"
          />
        </div>

        <Card className="mx-auto w-100">
          <div className="p-4">{photo.description}</div>
          <div className="p-4">iso 100</div>
        </Card>
      </DialogContent>
    </Dialog>
  );
}
