import { faker } from "@faker-js/faker";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Divider,
  IconButton,
  InputBase,
  Stack,
  Typography,
} from "@mui/material";
import { styled, alpha, useTheme } from "@mui/material/styles";
import { ArchiveBox, CircleDashed, MagnifyingGlass } from "phosphor-react";
import React from "react";
import { ChatList } from "../../data";
import { SimpleBarStyle } from "../../components/Scrollbar";
import { Scrollbars } from "react-custom-scrollbars-2";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../components/search";
import ChatElement from "../../components/ChatElement";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const Chats = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: "relative",
        width: 320,
        // minWidth: 320,
        backgroundColor:
          theme.palette.mode === "light"
            ? "#F8FAFF"
            : theme.palette.background.default,
        boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
      }}
    >
      <Stack p={2} spacing={2} sx={{ height: "100vh" }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h5">Chats</Typography>
          <IconButton>
            <CircleDashed />
          </IconButton>
        </Stack>
        <Stack sx={{ width: "100%" }}>
          <Search>
            <SearchIconWrapper>
              <MagnifyingGlass color="#709CE6" />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="search..."
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Stack>
        <Stack spacing={1}>
          <Stack direction="row" alignItems="center" spacing={1.5}>
            <ArchiveBox size={24} />
            <Button>Archive</Button>
          </Stack>
          <Divider sx={{ width: "100%" }} />
        </Stack>
        <Stack>
          {/* <Stack sx={{ flexGrow: 1, overflow: "scroll", height: "100%" }}>*/}
          {/* <SimpleBarStyle timeout={500} clickOnTrack={false}> */}
          <Scrollbars
            style={{ height: "65vh" }}
            autoHide
            autoHideTimeout={500}
            autoHideDuration={100}
          >
            <Stack spacing={2.4}>
              <Typography variant="subtitle2" sx={{ color: "#676767" }}>
                Pinned
              </Typography>
              {ChatList.filter((el) => el.pinned).map((el, idx) => {
                return <ChatElement {...el} key={idx} />;
              })}
              <Typography variant="subtitle2" sx={{ color: "#676667" }}>
                All Chats
              </Typography>
              {ChatList.filter((el) => !el.pinned).map((el, idx) => {
                return <ChatElement {...el} key={idx} />;
              })}
            </Stack>
          </Scrollbars>
          {/* </SimpleBarStyle> */}
        </Stack>
      </Stack>
    </Box>
  );
};

export default Chats;
