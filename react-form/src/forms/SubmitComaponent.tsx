import { Stack, Typography } from "@mui/material";
import React from "react";

interface Props{
    name : string,
    phone : string,
    email : string
}

function SubmitComaponent({ name, phone, email } : Props) {
  return (
    <Stack>
      <Typography variant="h6">User Data</Typography>
      <Typography>
        {" "}
        <b>Name: </b> {name}
      </Typography>
      <Typography>
        {" "}
        <b>Phone Number:</b> {phone}
      </Typography>
      <Typography>
        {" "}
        <b>Emai:</b> {email}{" "}
      </Typography>
    </Stack>
  );
}

export default SubmitComaponent;
