import React from "react";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  IconButton,
  Stack,
  Typography,
  Tabs,
  Tab,
  Grid,
} from "@mui/material";
import { ArrowLeft } from "phosphor-react";
// import useResponsive from "../../hooks/useResponsive";
import { useDispatch } from "react-redux";
import { UpdateSidebarType } from "../redux/slices/app";
import { faker } from "@faker-js/faker";
import { DocMsg, LinkMsg } from "./conversation/MsgTypes";
import { Shared_docs, Shared_links } from "../data";
import Message from "./conversation/Message";

const StarredMessages = () => {
  const dispatch = useDispatch();

  const theme = useTheme();

  //   const isDesktop = useResponsive("up", "md");

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 320, maxHeight: "100vh" }}>
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
            spacing={3}
          >
            <IconButton
              onClick={() => {
                dispatch(UpdateSidebarType("CONTACT"));
              }}
            >
              <ArrowLeft />
            </IconButton>
            <Typography variant="subtitle2">Starred Messages</Typography>
          </Stack>
        </Box>

        <Stack
          sx={{
            height: "100%",
            position: "relative",
            flexGrow: 1,
            overflow: "scroll",
          }}
          spacing={3}
          p={3}
        >
          {/* <Conversation starred={true} /> */}
          <Message />
        </Stack>
      </Stack>
    </Box>
  );
};

export default StarredMessages;
