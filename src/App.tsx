import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import FullLayout from './layout/FullLayout';
import { makeStyles, createStyles, Theme } from '@material-ui/core';
import { Router, useLocation, useParams } from '@reach/router';
import LoginLayout from './layout/LoginLayout';
import LoginPage from './auth/LoginPage';
import { useAppContext } from './AppContext';
import { useAuth } from './AuthContext';
import CuentasPage from './cuentas/CuentasPage';
import ApoderadosPage from './apoderados/ApoderadosPage';
import CuentaPage from './cuentas/CuentaPage';
import BienesPage from './cuentas/BienesPage';
import LicenciasPage from './cuentas/LicenciasPage';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    layout: {
        padding: 0,
    }
  }),
);

function Copyright() {
  const appContext = useAppContext();
  if (!appContext.layout.showCopyright) {
    return (<span></span>);
  }

  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright ©'}
      <Link color="inherit" href="https://material-ui.com/">
        PIC
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function App() {
  const classes = useStyles();
  const [logged] = useAuth();
    
  const full =
      <FullLayout className={classes.layout}>
        <Router>
          <CuentasPage     path="/cuentas"/>
          <BienesPage      path="/bienes"/>
          <LicenciasPage   path="/licencias"/>

          <CuentaPage       path="/objeto"/>
          <ApoderadosPage   path="/apoderados"/>
        </Router>
        <Box my={4}>
          <Copyright />
        </Box>
    </FullLayout>

  const login =
    <LoginLayout>
        <Router>
          <LoginPage default path="/auth/login"/>
        </Router>
    </LoginLayout>

  if (logged) {
    return full;
  } else {
    return login;
  }
}
