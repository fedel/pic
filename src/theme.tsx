import red from '@material-ui/core/colors/red';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  typography: {
    button: {
      textTransform: 'none'
    }
  },
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#0066cc',
      /*main: '#edbd3e',*/
    },
    error: {
      main: red.A400,
    },
    background: {
      /*default: '#e1e2e1',*/
      default: '#f5f5f6',

    },
  },
});

export default theme;
