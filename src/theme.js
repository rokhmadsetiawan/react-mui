import { createTheme } from "@mui/material/styles";
import { blue, yellow } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: blue[600],
    },
    secondary: {
      main: yellow[600],
    },
  },
});

export default theme;
