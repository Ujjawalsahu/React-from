import React from "react";
import { Stack,Typography,Box, } from "@mui/material";
import InputField from "./InputField";

function Form() {
  // const classess = useStyles()
  return (
    <Stack spacing={"40px"} alignItems={"flex-start"}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "self-start",
        }}
      >
        <Typography
          variant="h1"
          color="black"
          align="center"
          fontSize={"24px"}
          fontFamily={"Poppins"}
          fontWeight={700}
          lineHeight={"32px"}
        >
          Welcome to Crown Palace
        </Typography>

        <Typography color="#A5A5A5" fontSize={"14px"} fontWeight={400}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          dolorum distinctio assumenda!
        </Typography>

      </Box>
      <InputField />
    </Stack>
  );
}

export default Form;