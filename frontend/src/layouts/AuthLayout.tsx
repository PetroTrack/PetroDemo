import { Outlet } from "react-router-dom";
import { Box, Paper, Typography } from "@mui/material";

export default function AuthLayout() {
  return (
    <Box className="min-h-screen flex bg-slate-100">

      {/* Left Side */}
      <Box
        className="
          hidden
          lg:flex
          w-1/2
          bg-gradient-to-br
          from-blue-900
          via-blue-700
          to-cyan-600
          text-white
          items-center
          justify-center
          px-16
        "
      >
        <Box className="max-w-lg">

          <Typography
            component="h1"
            variant="h3"
            sx={{
              fontWeight: 700,
              mb: 2,
            }}
          >
            PetroTrack
          </Typography>

          <Typography
            component="h2"
            variant="h5"
            sx={{
              fontWeight: 500,
              mb: 4,
            }}
          >
            Petroleum Transport Compliance Management System
          </Typography>

          <Typography
            component="p"
            variant="body1"
            sx={{
              opacity: 0.9,
              lineHeight: 1.8,
            }}
          >
            Streamline fleet operations, driver compliance,
            petroleum transportation and regulatory reporting
            from one secure platform.
          </Typography>

        </Box>
      </Box>

      {/* Right Side */}
      <Box className="flex flex-1 items-center justify-center p-6">

        <Paper
          elevation={0}
          className="
            w-full
            max-w-md
            rounded-3xl
            bg-white
            p-8
            shadow-xl
            sm:p-10
          "
        >
          <Outlet />
        </Paper>

      </Box>

    </Box>
  );
}