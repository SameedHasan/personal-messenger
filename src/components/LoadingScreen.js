import { Stack } from "@mui/material";
import React from "react";
import { Discuss } from "react-loader-spinner";

const LoadingScreen = () => {
  return (
    <Stack alignItems={"center"} justifyContent="center" width={"100%"}>
      <Discuss
        visible={true}
        height="70"
        width="70"
        ariaLabel="comment-loading"
        wrapperStyle={{}}
        wrapperClass="comment-wrapper"
        colors={["#0162c4", "#0162c4"]}
      />
    </Stack>
  );
};

export default LoadingScreen;
