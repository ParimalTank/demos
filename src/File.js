// ** React Imports
import { useState } from "react";

// ** Next Import

// ** MUI Imports
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

// ** Third Party Imports
import { useDropzone } from "react-dropzone";
import { Link } from "@mui/icons-material";
import { ProgressBar } from "react-bootstrap";

import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import logo from "./logo.svg"

// Styled component for the upload image inside the dropzone area
const Img = styled("img")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    marginRight: theme.spacing(10),
  },
  [theme.breakpoints.down("md")]: {
    marginBottom: theme.spacing(4),
  },
  [theme.breakpoints.down("sm")]: {
    width: 250,
  },
}));

// Styled component for the heading inside the dropzone area
const HeadingTypography = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(5),
  [theme.breakpoints.down("sm")]: {
    marginBottom: theme.spacing(4),
  },
}));

const FileUploaderSingle = () => {
  // ** State
  const [files, setFiles] = useState([]);

  // ** Hook
  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    accept: {
      "image/*": [".png", ".jpg", ".jpeg", ".gif"],
      "audio/*": [".mp3"],
    },
    onDrop: (acceptedFiles) => {
      setFiles(acceptedFiles.map((file) => Object.assign(file)));
      const temp = acceptedFiles.map((file) => Object.assign(file));
      console.log("this is temp", files);
    },
  });

  // const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  //   height: 10,
  //   borderRadius: 5,
  //   [`&.${linearProgressClasses.colorPrimary}`]: {
  //     backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  //   },
  //   [`& .${linearProgressClasses.bar}`]: {
  //     borderRadius: 5,
  //     backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  //   },
  // }));

  const img = files.map((file) => (
    <>
      <img
        key={file.name}
        alt={file.name}
        className="single-file-image"
        src={URL.createObjectURL(file)}
      />
      <ProgressBar className="progress" striped={false} variant="custom" now={50} label={"50%"} animated style={{ height : "46px" , width : "648px" }} />

      {/* <BorderLinearProgress variant="determinate" sx={{ backgroundImage : {logo} }} value={50} /> */}
    </>
  ));

  return (
    <Box
      {...getRootProps({ className: "dropzone" })}
      sx={files.length ? { height: 250, width: 450, textAlign: "center" } : {}}
    >
      <input {...getInputProps()} />
      {files.length ? (
        img
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: ["column", "column", "row"],
            alignItems: "center",
          }}
        >
          <Img width={300} alt="Upload img" src="/images/misc/upload.png" />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              textAlign: ["center", "center", "inherit"],
            }}
          >
            <HeadingTypography variant="h5">
              Drop files here or click to upload.
            </HeadingTypography>
            <Typography
              color="textSecondary"
              sx={{ "& a": { color: "primary.main", textDecoration: "none" } }}
            >
              Drop files here or click{" "}
              <Link href="/" onClick={(e) => e.preventDefault()}>
                browse
              </Link>{" "}
              thorough your machine
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default FileUploaderSingle;
