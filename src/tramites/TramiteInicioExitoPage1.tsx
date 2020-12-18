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

function TramiteInicioExitoPage1(props: any) {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
          <Paper className={classes.paper}>
            <p><Typography variant="body1">Seccion 1 / Sub Seccion 2 / Trámite 1 / Inicio</Typography></p>
            <p><Typography variant="h3">Trámite 1</Typography></p>
            <p><Typography variant="h4">Solicitud en borrador</Typography></p>
            <p><Typography variant="h4">Complete los requisitos</Typography></p>
          </Paper>

          <Paper className={classes.paper}>
              <p>
                <Button color="primary" variant="contained" component={RouterLink} to="/pic/tramites/tramite-1/gestion">SIGUIENTE</Button>
              </p>
          </Paper>

        </Container>

    );
  }
  
export default TramiteInicioExitoPage1;
