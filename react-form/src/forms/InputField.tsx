import { Stack, TextField, Typography, colors } from "@mui/material";
import React from "react";
import UploadButton from "./UploadButton";

function InputField() {
  return (
    <Stack width={"100%"} spacing={"16px"}>
      {/* Name textField */}
      <Stack>
        <Typography fontSize={"14px"} fontWeight={500}>
          Name <span style={{ color: "red" }}>*</span>
        </Typography>
        <TextField
          placeholder="eg: 'John Doe'"
          variant="outlined"
          type="text"
        />
      </Stack>
      {/* Phone Number textField */}
      <Stack>
        <Typography fontSize={"14px"} fontWeight={500}>
          Phone Number <span style={{ color: "red" }}>*</span>
        </Typography>
        <TextField
          placeholder="eg: +9174798989888"
          variant="outlined"
          type="text"
        />
      </Stack>
      {/* Email textField */}
      <Stack>
        <Typography fontSize={"14px"} fontWeight={500}>
          Email
        </Typography>
        <TextField
          placeholder="eg: 'example@gmail.com'"
          variant="outlined"
          type="text"
        />
      </Stack>
      <Stack>
        {/* Id Proof */}
        <Typography fontSize={"14px"} fontWeight={500}>
          Id Proof
        </Typography>
        <UploadButton />
      </Stack>
      {/* Date input Field */}
      <Stack>
        <Typography fontSize={"14px"} fontWeight={500}>
          Checkout Date
        </Typography>
        <label htmlFor="date">
          <input
            style={{
              width: "100%",
              height: "40px",
              border: "1px solid #BAC4DE",
              borderRadius: "4px",
              padding: "12px",
              color: "#A5A5A5",
            }}
            title="date"
            type="date"
            name="date"
            id="date"
          />
        </label>
      </Stack>
    </Stack>
  );
}

export default InputField;
