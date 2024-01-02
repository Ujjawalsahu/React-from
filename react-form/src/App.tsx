import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Form from "./forms/Form";
import InputField from "./forms/InputField";
import Submit from "./forms/Submit";
import { Container, Stack, Typography } from "@mui/material";
import Logo from "./assets/icons/Logo";

function App() {
  return (
    <>
      <Container
        sx={{
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <Stack spacing={"24px"}>
          <Logo />
          <Form />
        </Stack>
        <Submit />
      </Container>
    </>
  );
}

export default App;
