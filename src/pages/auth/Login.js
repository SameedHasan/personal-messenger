import { Link, Stack, Typography } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import AuthSocial from "../../sections/auth/AuthSocial";
import LoginForm from "../../sections/auth/LoginForm";

const Login = () => {
  return (
    <>
      <Stack
        spacing={2}
        sx={{ mb: 5, position: "relative" }}
        // justifyContent="center"
        alignItems={"center"}
      >
        <Typography variant="h4">Connect with your favourite people</Typography>
        <Stack direction="row" spacing={0.5}>
          <Typography variant="body2">New user?</Typography>

          <Link
            to={"/auth/register"}
            component={RouterLink}
            variant="subtitle2"
          >
            Create an account
          </Link>
        </Stack>
      </Stack>
      <LoginForm />
      <AuthSocial />
    </>
  );
};

export default Login;
