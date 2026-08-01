// import { useState } from "react";

// import TextField, {
//   type TextFieldProps,
// } from "@mui/material/TextField";

// import IconButton from "@mui/material/IconButton";
// import InputAdornment from "@mui/material/InputAdornment";

// import { Eye, EyeOff } from "lucide-react";

// export type AppPasswordFieldProps =
//   Omit<TextFieldProps, "type">;

// export default function AppPasswordField({
//   fullWidth = true,
//   variant = "outlined",
//   size = "medium",
//   InputProps,
//   ...props
// }: AppPasswordFieldProps) {
//   const [showPassword, setShowPassword] = useState(false);

//   return (
//     <TextField
//       {...props}
//       fullWidth={fullWidth}
//       variant={variant}
//       size={size}
//       type={showPassword ? "text" : "password"}
//       InputProps={{
//         ...InputProps,
//         endAdornment: (
//           <InputAdornment position="end">
//             <IconButton
//               edge="end"
//               onClick={() => setShowPassword((x) => !x)}
//             >
//               {showPassword ? (
//                 <EyeOff size={18} />
//               ) : (
//                 <Eye size={18} />
//               )}
//             </IconButton>
//           </InputAdornment>
//         ),
//       }}
//     />
//   );
// }