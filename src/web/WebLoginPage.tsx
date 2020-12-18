import React from 'react';
import { makeStyles, Theme, createStyles, Toolbar, Typography, Button, Container, Box, Grid, Hidden, Paper, TextField, Divider, Link } from "@material-ui/core";
import Map from "@material-ui/icons/Map";
import Folder from "@material-ui/icons/Folder";
import Help from "@material-ui/icons/Help";
import { Link as RouterLink, navigate } from "@reach/router"


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
        padding: 0,
    },
    paper: {
      padding: theme.spacing(1),
      margin: theme.spacing(2),
    },
  }),
);

function WebLoginPage(props: any) {
    const classes = useStyles();

    function login() {
      window.sessionStorage.setItem("logged", "true");
    }

    return (
        <Container className={classes.container}>
          <Paper className={classes.paper}>
            <p><Typography variant="body1">Seccion 1 / Sub Seccion 2 / Trámite 1 / Login</Typography></p>
            
            <p><Typography variant="h3">Ingreso</Typography></p>

            <p>
              <Typography variant="h6">Clave de la ciudad.</Typography>
              <form noValidate autoComplete="off" >
                <p>
                <TextField id="outlined-basic" label="Usuario" variant="filled" style={{width: "280px"}}/>
                </p>
                <p>
                <TextField id="outlined-basic" label="Clave" variant="filled" style={{width: "280px"}}/>
                </p>
                </form>
                <Button color="primary" variant="contained" onClick={login} component={RouterLink} to="/pic/tramites/tramite-1/inicio-titular">INGRESAR</Button>
            </p>

            <p>
              <Typography variant="h6">Ingresa con claves externas</Typography>
              <p>
                <Button color="primary" variant="contained">AUTENTICAR AFIP</Button>
              </p>
            </p>

            <p>
              <Typography variant="h6">Registra tu clave Ciudadana</Typography>
              <p>
                <Button color="primary" variant="contained">REGISTRARSE</Button>
                <Button variant="text">OLVIDO SU CONTRASEÑA</Button>
              </p>
            </p>


          </Paper>
        </Container>
    );
  }
  
export default WebLoginPage;
