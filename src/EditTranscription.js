// ** React Imports
import { useState } from "react";

// ** MUI Imports
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

import close from "./ButtonClose.svg";
import Edit from "./Edit.svg";

// ** Icon Imports
// import Icon from "src/@core/components/icon";

const EditTranscribe = () => {
  // ** State
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Edit Transcribe
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" sx={{ p: 4 }}>
          <div>
            <img src={Edit} alt="Edit" />
          </div>

          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{ top: 10, right: 10, position: "absolute", color: "grey.500" }}
          >
            {/* <Icon icon="mdi:close" /> */}
            <img src={close} alt="close" />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ p: 4, maxWidth: "400px !important" }}>
          <div>
            <Typography
              sx={{ fontSize: "18px", lineHeight: "28px" }}
              fontWeight={600}
            >
              Delete Transcribe
            </Typography>
            <Typography
              sx={{ fontSize: "14px", lineHeight: "20px" }}
              fontWeight={400}
            >
              Are you sure you want to delete this transcribe?
            </Typography>
            <Typography>This action cannot be undone</Typography>
          </div>
        </DialogContent>
        <DialogActions
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            m: "24px",
          }}
        >
          <Button
            variant="outlined"
            size="large"
            onClick={handleClose}
            sx={{ maxWidth: "170px", minHeight: "44px" }}
          >
            Cancel
          </Button>
          <Button variant="contained" size="large" onClick={handleClose}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EditTranscribe;
