import red from '@material-ui/core/colors/red';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  props: {
    MuiPaper: {
      elevation: 0,
    },
  },
  typography: {
    h1: {
      fontFamily: "Montserrat",
      color: "#3a3a3a",
    },
    h2: {
      fontFamily: "Montserrat",
      color: "#3a3a3a",
    },
    h3: {
      fontFamily: "Montserrat",
      fontSize: "20pt",
      fontWeight: "bold",
      color: "#3a3a3a",
    },
    h4: {
      fontFamily: "Montserrat",
      fontSize: "18pt",
      fontWeight: "bold",
      color: "#3a3a3a",
    },
    h5: {
      fontFamily: "Montserrat",
      color: "#3a3a3a",
      fontWeight: "bold",
      fontSize: "16pt",
    },
    h6: {
      fontFamily: "Montserrat",
      fontWeight: "bold",
      color: "#3a3a3a",
    },
    button: {
      textTransform: 'none'
    }
  },
  palette: {
    primary: {
      main: '#0066cc',
    },
    secondary: {
      main: '#0a0a50',
      /*main: '#edbd3e',*/
    },
    error: {
      main: red.A400,
    },
    background: {
      /*default: '#e1e2e1',*/
      /*default: '#f5f5f6',*/
      default: 'fff',
    },
  },
});

export default theme;
