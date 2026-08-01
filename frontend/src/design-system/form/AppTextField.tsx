import TextField from "@mui/material/TextField";
import type { TextFieldProps } from "@mui/material/TextField";

export type AppTextFieldProps = Omit<
  TextFieldProps,
  "variant" | "size"
>;

export default function AppTextField({
  label,
  required,
  fullWidth = true,
  ...props
}: AppTextFieldProps) {
  return (
    <TextField
      {...props}
      label={label}
      required={required}
      fullWidth={fullWidth}
      variant="outlined"
      size="small"
      margin="normal"
      slotProps={{
        inputLabel: {
          shrink: true,
        },
      }}
      sx={{
        "& .MuiOutlinedInput-root": {
          height: 44,
          borderRadius: 2,
          backgroundColor: "#fff",

          "& fieldset": {
            borderColor: "#CBD5E1",
          },

          "&:hover fieldset": {
            borderColor: "#2563EB",
          },

          "&.Mui-focused fieldset": {
            borderColor: "#2563EB",
            borderWidth: 2,
          },

          "&.Mui-error fieldset": {
            borderColor: "#DC2626",
          },
        },

        "& .MuiInputLabel-root": {
          fontWeight: 500,
          color: "#334155",
        },

        "& .MuiFormHelperText-root": {
          marginLeft: 0,
        },
      }}
    />
  );
}