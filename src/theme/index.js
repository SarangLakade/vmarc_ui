import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import typography from "./typography";
const theme = createTheme({
  palette: {
    primary: {
      main: "#EF3F3C", // "#7cc152", //78BE20//45BE51
      contrastText: "#fff",
    },
    secondary: {
      main: "#4456B0",
    },
    textPrimary: {
      main: "#ffff",
    },
    textGray: {
      main: "#8E989F",
      main2: "#37474F", // darker than main
      main3: "#8C8C8C", //lighter than main
      main4: "#D9D9D9", //Input boxes
    },
    bgGray: {
      main: "#4B4D58",
    },

    border: {
      main: " rgba(182, 182, 182, 0.34)",
    },
    bgPink: {
      main: "#FF92B0",
    },
    bgWhite: {
      main: "#FFFFFF",
    },
  },
  typography,
});

export default theme;
