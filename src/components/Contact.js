import { faker } from "@faker-js/faker";
import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  IconButton,
  Slide,
  Stack,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  Bell,
  CaretRight,
  Phone,
  Prohibit,
  Star,
  Trash,
  VideoCamera,
  X,
} from "phosphor-react";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ToggleSidebar, UpdateSidebarType } from "../redux/slices/app";
import AntSwitch from "./AntSwitch";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const BlockDialog = ({ open, handleClose }) => {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>Block this contact</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Are you sure you want to block this Contact?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Yes</Button>
      </DialogActions>
    </Dialog>
  );
};

const DeleteChatDialog = ({ open, handleClose }) => {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>Delete this chat</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Are you sure you want to delete this chat?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Yes</Button>
      </DialogActions>
    </Dialog>
  );
};

const Contact = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const [openBlock, setOpenBlock] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const handleCloseBlock = () => {
    setOpenBlock(false);
  };
  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  return (
    <Box sx={{ width: 320, height: "100vh" }}>
      <Stack sx={{ height: "100%" }}>
        <Box
          sx={{
            boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
            width: "100%",
            backgroundColor:
              theme.palette.mode === "light"
                ? "#F8FAFF"
                : theme.palette.background,
          }}
        >
          <Stack
            sx={{ height: "100%", p: 2 }}
            direction="row"
            alignItems={"center"}
            justifyContent="space-between"
            spacing={3}
          >
            <Typography variant="subtitle2">Contact Info</Typography>
            <IconButton
              onClick={() => {
                dispatch(ToggleSidebar());
              }}
            >
              <X />
            </IconButton>
          </Stack>
        </Box>
        {/* Body */}
        <Stack
          sx={{
            height: "100%",
            position: "relative",
            flexGrow: 1,
            overflowY: "scroll",
          }}
          spacing={3}
          p={2}
        >
          <Stack direction="row" alignItems={"center"} spacing={2}>
            <Avatar src={faker.image.avatar()} sx={{ height: 64, width: 64 }} />
            <Stack spacing={0.5}>
              <Typography variant="article" fontWeight={600}>
                {faker.name.fullName()}
              </Typography>
              <Typography variant="body2" fontWeight={500}>
                {"+923355520338"}
              </Typography>
            </Stack>
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent={"space-evenly"}
          >
            <Stack alignItems={"center"} spacing={1}>
              <IconButton>
                <Phone />
              </IconButton>

              <Typography variant="overline">Voice</Typography>
            </Stack>
            <Stack alignItems={"center"} spacing={1}>
              <IconButton>
                <VideoCamera />
              </IconButton>

              <Typography variant="overline">Video</Typography>
            </Stack>
          </Stack>
          <Divider />
          <Stack spacing={0.5}>
            <Typography variant="article" fontWeight={600}>
              About
            </Typography>
            <Typography variant="body2" fontWeight={500}>
              {"Imagination is the only limit"}
            </Typography>
          </Stack>
          <Divider />
          <Stack
            direction="row"
            alignItems="center"
            justifyContent={"space-between"}
          >
            <Typography variant="subtitle2">Media, Links & Docs</Typography>
            <Button
              onClick={() => {
                dispatch(UpdateSidebarType("SHARED"));
              }}
              endIcon={<CaretRight />}
            >
              401
            </Button>
          </Stack>
          <Stack direction={"row"} alignItems="center" spacing={2}>
            {[1, 2, 3].map((el, i) => (
              <Box key={i}>
                <img src={faker.image.city()} alt={faker.internet.userName()} />
              </Box>
            ))}
          </Stack>
          <Divider />
          <Stack
            direction="row"
            alignItems="center"
            justifyContent={"space-between"}
          >
            <Stack direction="row" alignItems="center" spacing={2}>
              <Star size={21} />
              <Typography variant="subtitle2">Starred Messages</Typography>
            </Stack>

            <IconButton
              onClick={() => {
                dispatch(UpdateSidebarType("STARRED"));
              }}
            >
              <CaretRight />
            </IconButton>
          </Stack>
          <Divider />
          <Stack
            direction="row"
            alignItems="center"
            justifyContent={"space-between"}
          >
            <Stack direction="row" alignItems="center" spacing={2}>
              <Bell size={21} />
              <Typography variant="subtitle2">Mute Notifications</Typography>
            </Stack>

            <AntSwitch />
          </Stack>
          <Divider />
          <Typography variant="body2">1 group in common</Typography>
          <Stack direction="row" alignItems={"center"} spacing={2}>
            <Avatar src={faker.image.imageUrl()} alt={faker.name.fullName()} />
            <Stack direction="column" spacing={0.5}>
              <Typography variant="subtitle2">Camel’s Gang</Typography>
              <Typography variant="caption">
                Owl, Parrot, Rabbit , You
              </Typography>
            </Stack>
          </Stack>
          <Divider />
          <Stack direction="row" alignItems={"center"} spacing={2}>
            <Button
              onClick={() => {
                setOpenBlock(true);
              }}
              fullWidth
              startIcon={<Prohibit />}
              variant="outlined"
            >
              Block
            </Button>
            <Button
              onClick={() => {
                setOpenDelete(true);
              }}
              fullWidth
              startIcon={<Trash />}
              variant="outlined"
            >
              Delete
            </Button>
          </Stack>
        </Stack>
      </Stack>
      {openBlock && (
        <BlockDialog open={openBlock} handleClose={handleCloseBlock} />
      )}
      {openDelete && (
        <DeleteChatDialog open={openDelete} handleClose={handleCloseDelete} />
      )}
    </Box>
  );
};
export default Contact;
