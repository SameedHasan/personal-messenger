import { Box, Stack } from "@mui/material";
import React from "react";
import { Chat_History } from "../../data";
import Menu from "../../theme/overrides/Menu";
import {
  DocMsg,
  LinkMsg,
  MediaMsg,
  ReplyMsg,
  TextMsg,
  Timeline,
} from "./MsgTypes";

const Message = ({ menu }) => {
  return (
    <Box p={3}>
      <Stack spacing={3}>
        {Chat_History.map((el, i) => {
          switch (el.type) {
            case "divider":
              return <Timeline el={el} key={i} />;
            case "msg":
              switch (el.subtype) {
                case "img":
                  return <MediaMsg el={el} menu={menu} key={i} />;
                case "doc":
                  return <DocMsg el={el} menu={menu} key={i} />;
                case "link":
                  return <LinkMsg el={el} menu={menu} key={i} />;
                case "reply":
                  return <ReplyMsg el={el} menu={menu} key={i} />;

                default:
                  return <TextMsg el={el} menu={menu} key={i} />;
              }
            default:
              return <></>;
          }
        })}
      </Stack>
    </Box>
  );
};

export default Message;
