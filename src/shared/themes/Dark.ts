import { createTheme } from "@mui/material";
import { deepPurple, yellow } from "@mui/material/colors";

export const DarkTheme = createTheme({
  palette:{
    primary:{
      main: deepPurple[500],
      dark: deepPurple[900],
      light: deepPurple[200],
      contrastText: "#FFFFFF",
    },
    secondary:{
      main: yellow[500],
      dark: yellow[800],
      light: yellow[300],
      contrastText: "#FFFFFF",
    },
    background:{
      default:"#202124",
      paper:"#303134",
    }
  }

});