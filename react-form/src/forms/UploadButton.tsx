import { Button, Stack, Typography, useTheme } from "@mui/material";

function UploadButton() {
  const theme = useTheme();
  return (
    <Button
      component="label"
      sx={{
        border: "1px solid #BAC4DE",
        width: "100%",
        height: "45px",
        color: "#666",
      }}
    >
      <Stack>
        <Typography fontSize={"12px"} fontWeight={400}>
          Upload File
        </Typography>
      </Stack>
      <input type="file" hidden />
    </Button>
  );
}

export default UploadButton;
