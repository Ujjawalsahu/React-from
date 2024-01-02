import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import SubmitArrow from "../assets/icons/SubmitArrow";
function Submit() {
  return (
    <Stack>
      <Button
        sx={{ marginTop: "40px", display: "flex", gap: "8px" }}
        variant="contained"
        size="medium"
      >
        SUBMIT
        <SubmitArrow />
      </Button>
      <Box
        sx={{
          marginTop: "24px",
          display: "flex",
          height: "45px",
          padding: "12px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography fontSize={"12px"} fontWeight={400} color={"#666"}>
          powered by @ADB.com
        </Typography>
      </Box>
    </Stack>
  );
}

export default Submit;
