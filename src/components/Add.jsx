import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import ImageIcon from "@mui/icons-material/Image";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import DateRange from "@mui/icons-material/DateRange";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "10px",
});

const Add = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Tooltip
        title="Delete"
        sx={{
          position: "fixed",
          bottom: 20,
          left: {
            xs: "calc(50% - 25px)",
            sm: 30,
          },
        }}
      >
        <Fab color="primary" aria-label="add" onClick={(e) => setOpen(true)}>
          <AddIcon />
        </Fab>
      </Tooltip>

      {/* modal */}
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={280}
          sx={{ backgroundColor: "background.default", color: "text.primary" }}
          p={3}
          borderRadius={5}
        >
          <Typography variant="h6" color="gray" textAlign={"center"}>
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              alt="Trevor Henderson"
              src="https://material-ui.com/static/images/avatar/6.jpg"
            />
            <Typography fontWeight={700} component="span">
              John Doe
            </Typography>
          </UserBox>
          <TextField
            id="standard-multiline-static"
            multiline
            fullWidth
            rows={3}
            value=""
            placeholder="Whats on your mind"
            variant="standard"
          />
          <Stack direction={"row"} gap={1} mt={2} mb={3}>
            <SentimentSatisfiedIcon color="primary" />
            <ImageIcon color="secondary" />
            <VideoCameraBackIcon color="success" />
            <PersonAddIcon color="error" />
          </Stack>
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
            fullWidth
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
