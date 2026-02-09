import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';


export interface ImageDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

export default function ImageDialog(props: ImageDialogProps) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog onClose={handleClose} open={open} fullScreen>
      <img src={props.selectedValue} className='max-h-screen object-contain'/>
      <p>info</p>
      <p>info</p>
      <p>info</p>
      <p>info</p>
    </Dialog>
  );
}