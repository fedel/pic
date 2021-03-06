import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import FullLayout from './layout/FullLayout';
import { makeStyles, createStyles, Theme } from '@material-ui/core';
import { navigate, Router, useLocation, useParams } from '@reach/router';
import LoginLayout from './layout/LoginLayout';
import LoginPage from './auth/LoginPage';
import { useAppContext } from './AppContext';
import { useAuth } from './AuthContext';
import CuentasPage from './cuentas/CuentasPage';
import ApoderadosPage from './apoderados/ApoderadosPage';
import CuentaPage from './cuentas/CuentaPage';
import BienesPage from './cuentas/BienesPage';
import LicenciasPage from './cuentas/LicenciasPage';
import WebLayout from './layout/WebLayout';
import WebHomePage from './web/WebHomePage';
import WebHomePage2 from './web/WebHomePage2';
import WebBuscarPage from './web/WebBuscarPage';
import WebTramitePage1 from './web/WebTramitePage1';
import WebTramitePage2 from './web/WebTramitePage2';
import WebRequisitoPage1 from './web/WebRequisitoPage1';
import WebRequisitoPage2 from './web/WebRequisitoPage2';
import WebLoginPage from './web/WebLoginPage';
import Tramite1InicioTitularPage from './tramites/tramite-1/TramiteInicioTitularPage';
import Tramite1InicioFamiliarPage from './tramites/tramite-1/TramiteInicioFamiliarPage';
import Tramite1InicioChequeo1Page from './tramites/tramite-1/TramiteInicioChequeo1Page';
import Tramite1InicioChequeo2Page from './tramites/tramite-1/TramiteInicioChequeo2Page';
import Tramite1InicioDatosPage from './tramites/tramite-1/TramiteInicioDatosPage';
import Tramite1InicioDestinatarioPage from './tramites/tramite-1/TramiteInicioDestinatarioPage';
import Tramite1InicioExitoPage from './tramites/tramite-1/TramiteInicioExitoPage';
import Tramite1DocumentoCduPage from './tramites/tramite-1/TramiteDocumentoCduPage';
import TramiteSelladoPage from './tramites/tramite-1/TramiteSelladoPage';
import TramiteGestion1Page from './tramites/tramite-1/TramiteGestion1Page';
import TramiteGestion2Page from './tramites/tramite-1/TramiteGestion2Page';
import TramiteGestion3Page from './tramites/tramite-1/TramiteGestion3Page';
import TramiteGestion4Page from './tramites/tramite-1/TramiteGestion4Page';
import TramiteEnvioPage from './tramites/tramite-1/TramiteEnvioPage';
import TramiteInicioTitularDniPage1 from './tramites/tramite-1/TramiteInicioTitularDniPage copy';
import Tramite1InicioConfirmacionPage from './tramites/tramite-1/Tramite1ConfirmacionPage';
import TramiteDocumentoSubsanarPage from './tramites/tramite-1/TramiteDocumentoSubsanarPage';

import Tramite2InicioDatosPage from './tramites/tramite-2/TramiteInicioDatosPage';
import Tramite2InicioExitoPage from './tramites/tramite-2/TramiteInicioExitoPage';
import Tramite2InicioConfirmacionPage from './tramites/tramite-2/Tramite1ConfirmacionPage';
import Tramite2Gestion1Page from './tramites/tramite-2/TramiteGestion1Page';
import Tramite2Gestion2Page from './tramites/tramite-2/TramiteGestion2Page';
import Tramite2Gestion3Page from './tramites/tramite-2/TramiteGestion3Page';
import Tramite2Gestion4Page from './tramites/tramite-2/TramiteGestion4Page';
import Tramite2EnvioPage from './tramites/tramite-2/TramiteEnvioPage';

import WebNotificacionPage from './noti/WebNotificacion';
import WebMensajePage from './noti/WebMensaje';


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

export default function App(props: any) {
  const classes = useStyles();
  const [logged] = useAuth();
  // const location = useLocation();
    
  const full =
      <FullLayout className={classes.layout}>
        <Router basepath={process.env.PUBLIC_URL}>
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
        <Router basepath={process.env.PUBLIC_URL}>
          <LoginPage default path="/auth/login"/>
        </Router>
    </LoginLayout>

  //const isWeb = window.location.href.indexOf("/web/") > 0;
  const isWeb = window.sessionStorage.getItem("mode") === "web";

  const [isLogged, setIsLogged] = React.useState(false);
  const toggleLogin = () => {
    setIsLogged(!isLogged);
  } 

  const [covid, setCovid] = React.useState(true);
  const toggleCovid = () => {
    setCovid(!covid);
  } 

  const web =
    <div>
      <WebLayout logged={isLogged} covid={covid}>
        <Router basepath={process.env.PUBLIC_URL}>
          <WebHomePage default path="/web/home" logged={isLogged}/>
          <WebHomePage2 path="/web/home2" logged={isLogged}/>
          <WebBuscarPage path="/web/buscar"/>
          <WebTramitePage1 path="/web/tramite-1"/>
          <WebTramitePage2 path="/web/tramite-2"/>
          <WebRequisitoPage1 path="/web/requisito-1"/>
          <WebRequisitoPage2 path="/web/requisito-2"/>
          <WebLoginPage path="/web/login"/>
          
          <WebNotificacionPage path="/noti/notificacion/noti1" logged={isLogged}/>
          <WebMensajePage path="/noti/mensaje/msg1" logged={isLogged}/>

          <Tramite1InicioTitularPage path="/tramites/tramite-1/inicio-titular"/>
          <TramiteInicioTitularDniPage1 path="/tramites/tramite-1/inicio-titular-dni"/>
          <Tramite1InicioFamiliarPage path="/tramites/tramite-1/inicio-familiar"/>
          <Tramite1InicioChequeo1Page path="/tramites/tramite-1/inicio-chequeo-1"/>
          <Tramite1InicioChequeo2Page path="/tramites/tramite-1/inicio-chequeo-2"/>
          <Tramite1DocumentoCduPage path="/tramites/tramite-1/documentos/documento-cdu"/>
          <TramiteSelladoPage path="/tramites/tramite-1/sellado"/>
          <Tramite1InicioDestinatarioPage path="/app/destinatario"/>
          <Tramite1InicioDatosPage path="/tramites/tramite-1/inicio-datos"/>
          <Tramite1InicioConfirmacionPage path="/tramites/tramite-1/inicio-confirmacion"/>
          <Tramite1InicioExitoPage path="/tramites/tramite-1/inicio-exito"/>
          <TramiteGestion1Page path="/tramites/tramite-1/gestion"/>
          <TramiteGestion2Page path="/tramites/tramite-1/gestion-2"/>
          <TramiteGestion3Page path="/tramites/tramite-1/gestion-3"/>
          <TramiteGestion4Page path="/tramites/tramite-1/gestion-4"/>
          <TramiteEnvioPage path="/tramites/tramite-1/envio"/>
          <TramiteDocumentoSubsanarPage path="/tramites/tramite-1/subsanar-cdu"/>

          <Tramite2InicioDatosPage path="/tramites/tramite-2/inicio-datos"/>
          <Tramite2InicioConfirmacionPage path="/tramites/tramite-2/inicio-confirmacion"/>
          <Tramite2InicioExitoPage path="/tramites/tramite-2/inicio-exito"/>
          <Tramite2Gestion1Page path="/tramites/tramite-2/gestion"/>
          <Tramite2Gestion2Page path="/tramites/tramite-2/gestion-2"/>
          <Tramite2Gestion3Page path="/tramites/tramite-2/gestion-3"/>
          <Tramite2Gestion4Page path="/tramites/tramite-2/gestion-4"/>
          <Tramite2EnvioPage path="/tramites/tramite-2/envio"/>
        </Router>
        </WebLayout>

        <br></br>
        <br></br>
        <br></br>
        <p>.............................................</p>
        <Link onClick={toggleLogin}>Login on/off</Link>
        &nbsp;
        <Link onClick={toggleCovid}>Covid on/off</Link>

    </div>
    
  if (isWeb) {
    return web;
  }

  if (logged) {
    return full;
  } else {
    return login;
  }
}
