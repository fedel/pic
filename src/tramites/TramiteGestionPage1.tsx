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

function TramiteGestionPage1(props: any) {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
          <Paper className={classes.paper}>
            <p><Typography variant="body1">Seccion 1 / Sub Seccion 2 / Trámite 1 / Inicio</Typography></p>
            <p><Typography variant="h3">Trámite 1</Typography></p>
            <p><Typography variant="body1">Este trámite....</Typography></p>
          </Paper>

          <Paper className={classes.paper}>
            <p>
              <Typography variant="h5">Requisitos</Typography>
            </p>
            <Typography variant="body1">
              <Grid container spacing={2}>
                <Grid item xs={9}><Link href="#">* Link a requisito 1</Link></Grid>
                <Grid item xs={3}>COMPLETAR</Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={9}><Link href="#">* Link a requisito 2</Link></Grid>
                <Grid item xs={3}>COMPLETAR</Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={9}><Link href="#">* Link a requisito 3</Link></Grid>
                <Grid item xs={3}>COMPLETAR</Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={9}><Link href="#">* Link a requisito 4</Link></Grid>
                <Grid item xs={3}>COMPLETAR</Grid>
              </Grid>

            </Typography>
          </Paper>

          <Paper className={classes.paper}>
            <p><Typography variant="h5">Datos del Trámite</Typography></p>

            <p>
              <Typography variant="subtitle2">Solicitante</Typography>
              <Typography variant="caption">El solicitante se considera que........</Typography>
              <Typography variant="body1">Federico Luna</Typography>
            </p>

            <p>
              <Typography variant="subtitle2">Titular</Typography>
              <Typography variant="caption">El titular se considera que........</Typography>
              <Typography variant="body1">Federico Luna 20342221110</Typography>
            </p>
            <p>
              <Typography variant="caption">Contacto</Typography>
              <Typography variant="body1">mail@gmail.com</Typography>
            </p>

            <p>
              <Button variant="contained">DATOS DEL TITULAR</Button>&nbsp;&nbsp;&nbsp;&nbsp;
              <Button variant="contained">DATOS INCIALES</Button>&nbsp;&nbsp;&nbsp;&nbsp;
              <Button variant="contained" color="primary" component={RouterLink} to="/pic/tramites/tramite-1/envio">ENVIAR SOLICITUD</Button>&nbsp;&nbsp;&nbsp;&nbsp;
            </p>
          </Paper>

          <Paper className={classes.paper}>
            <p>
              <Typography variant="h5">Certificados Emitidos</Typography>
            </p>

            <p>
              <Button variant="contained">CERTIFICADOS</Button>
            </p>
          </Paper>


        </Container>

    );
  }
  
export default TramiteGestionPage1;
