import React from 'react';
import { makeStyles, Theme, createStyles, Toolbar, Typography, Button, Container, Box, Grid, Hidden, Paper, TextField, Divider, Link } from "@material-ui/core";
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

function TramiteInicioTitularPage1(props: any) {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
          <Paper className={classes.paper}>
            <p><Typography variant="body1">Seccion 1 / Sub Seccion 2 / Trámite 1 / Inicio</Typography></p>
            <p><Typography variant="h3">Trámite 1</Typography></p>
          </Paper>

          <Paper className={classes.paper}>
            <p>
              <Typography variant="h5">Titular y Solicitante</Typography>
            </p>
            <p>
              <Typography variant="body1">Verfiique los datos titular y solictatnte........</Typography>
            </p>

            <p>
              <Typography variant="subtitle2">Solicitante</Typography>
              <Typography variant="caption">El solicitante se considera que........</Typography>
              <Typography variant="body1">Federico Luna</Typography>
            </p>

            <p>
              <Typography variant="subtitle2">Titular</Typography>
              <Typography variant="caption">El titular se considera que........</Typography>
              <Typography variant="body1">Federico Luna 20342221110&nbsp;&nbsp;&nbsp;&nbsp;<Button variant="contained">CAMBIAR</Button></Typography>
            </p>
            <p>
              <Typography variant="caption">Contacto? </Typography>
              <Typography variant="body1">mail@gmail.com&nbsp;&nbsp;&nbsp;&nbsp;<Button variant="contained">CAMBIAR</Button></Typography>
            </p>

            <p>
              <Typography variant="subtitle2">Notificacion? </Typography>
              <Typography variant="caption">Con tu datos de notificación ...</Typography>
              <Typography variant="body1">mail@gmail.com / +54 9 3415554745&nbsp;&nbsp;&nbsp;&nbsp;<Button variant="contained">CAMBIAR</Button></Typography>
            </p>
          </Paper>

          <Paper className={classes.paper}>
            <p>
              <Typography variant="h5">Notificación ? </Typography>
            </p>
            <p>
              <Typography variant="body1">El domicil de notificación....</Typography>
            </p>

            <p>
              <Typography variant="subtitle2">email</Typography>
              <Typography variant="body1">mail@gmail.com&nbsp;&nbsp;&nbsp;&nbsp;<Button variant="contained">CAMBIAR</Button></Typography>
            </p>

            <p>
              <Typography variant="subtitle2">Telefono</Typography>
              <Typography variant="body1">+54 9 3415554745&nbsp;&nbsp;&nbsp;&nbsp;<Button variant="contained">CAMBIAR</Button></Typography>
            </p>
          </Paper>

          <Paper className={classes.paper}>
            <p>
              <Typography variant="h5">Libre Multa</Typography>
            </p>
            <p>
              <Typography variant="body1">TIENE MULTAS&nbsp;&nbsp;&nbsp;&nbsp;<Button color="primary" variant="contained">GESTIONAR</Button></Typography>
            </p>
          </Paper>

          <Paper className={classes.paper}>
            <p>
              <Typography variant="h5">Libre Deuda</Typography>
            </p>
            <p>
              <Typography variant="body1">TIENE DEUDAS&nbsp;&nbsp;&nbsp;&nbsp;<Button color="primary" variant="contained">GESTIONAR</Button></Typography>
            </p>
          </Paper>

          <Paper className={classes.paper}>
              <p>
                <Button color="primary" variant="contained" component={RouterLink} to="/pic/tramites/tramite-1/inicio-datos">SIGUIENTE</Button>
              </p>
          </Paper>

        </Container>

    );
  }
  
export default TramiteInicioTitularPage1;
