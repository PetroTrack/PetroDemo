import { createTheme } from "@mui/material/styles";

import { palette } from "./palette";
import { typography } from "./typography";
import { spacing } from "./spacing";
import { shape } from "./shape";
import { breakpoints } from "./breakpoints";
import { components } from "./components";

const theme = createTheme({
  palette,
  typography,
  spacing,
  shape,
  breakpoints,
  components,
});

export default theme;