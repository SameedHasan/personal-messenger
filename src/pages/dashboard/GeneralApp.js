import { Box, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import Chats from "./Chats";
import Conversation from "../../components/conversation";
import Contact from "../../components/Contact";
import { useSelector } from "react-redux";
import Media from "../../components/SharedMessages";
import StarredMessages from "../../components/StarredMessages";
import { Link, useSearchParams } from "react-router-dom";
import NoChat from "../../assets/Illustration/NoChat";
const GeneralApp = () => {
  const theme = useTheme();
  const { sidebar, room_id, chat_type } = useSelector((store) => store.app);
  // console.log(app);
  return (
    <Stack direction={"row"} sx={{ width: "100%" }}>
      <Chats />

      <Box
        sx={{
          height: "100%",
          // width: `100%`,
          width: sidebar?.open
            ? `calc(100vw - ${740}px)`
            : `calc(100vw - ${420}px)`,
          // width: "calc(100vw-740px)",
          backgroundColor:
            theme.palette.mode === "light"
              ? "#F0F4FA"
              : theme.palette.background.paper,
        }}
      >
        {room_id !== null && chat_type === "individual" ? (
          <Conversation />
        ) : (
          <Stack
            spacing={2}
            sx={{ height: "100%", width: "100%" }}
            alignItems="center"
            justifyContent={"center"}
          >
            <NoChat />
            <Typography variant="subtitle2">
              Select a conversation or start a{" "}
              <Link
                style={{
                  color: theme.palette.primary.main,
                  textDecoration: "none",
                }}
                to="/"
              >
                new one
              </Link>
            </Typography>
          </Stack>
        )}
      </Box>
      {sidebar.open &&
        (() => {
          switch (sidebar.type) {
            case "CONTACT":
              return <Contact />;

            case "STARRED":
              return <StarredMessages />;

            case "SHARED":
              return <Media />;

            default:
              break;
          }
        })()}
    </Stack>
  );
};

export default GeneralApp;
