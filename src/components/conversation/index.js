import { Box, Stack, useTheme } from "@mui/material";
import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import Message from "./Message";

const Conversation = () => {
  const theme = useTheme();
  return (
    <Stack sx={{ height: "100%", maxHeight: "100vh", width: "auto" }}>
      <Header />
      <Box
        sx={{
          width: "100%",

          flexGrow: 1,
          height: "100%",
          overflowY: "scroll",
        }}
      >
        <Message />
      </Box>
      <Footer />
    </Stack>
  );
};

export default Conversation;
