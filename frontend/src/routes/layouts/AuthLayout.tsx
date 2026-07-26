import { Outlet } from "react-router-dom";
import { Box, Paper } from "@mui/material";

export default function AuthLayout() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#f5f7fb",
      }}
    >
      <Paper
        elevation={2}
        sx={{
          width: 450,
          p: 5,
          borderRadius: 3,
        }}
      >
        <Outlet />
      </Paper>
    </Box>
  );
}