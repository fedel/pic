import React, { useEffect } from 'react';
import { makeStyles, Theme, createStyles, Toolbar, Typography, Button, Container, Box, Grid, Hidden, Paper, TextField, Divider, Link, Chip } from "@material-ui/core";
import { Link as RouterLink, navigate, useLocation, useNavigate, useParams } from "@reach/router"
import PlaceIcon from '@material-ui/icons/Place';
import EventIcon from '@material-ui/icons/EventAvailable';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: 0,
    },
    paper: {
      padding: theme.spacing(1),
      margin: theme.spacing(2),
    },
    action: {
      marginBottom: "12pt",
      padding: "6pt",
      borderBottom: "solid 3px #aaa",
    },
    ok: {
      backgroundColor: "#6c6",
    },
    paperMessage: {
      padding: theme.spacing(1),
      margin: theme.spacing(2),
      textAlign: "center",
      backgroundColor: "#b0bfbf",
    }
  }),
);

function TramiteGestion2Page(props: any) {
  const classes = useStyles();
  const location = useLocation();


  useEffect(()=> {
    window.location.href="#top";
  },[]);

  return (
    <Container id="top" className={classes.container}>
      <Paper className={classes.paper}>
        <p><Typography variant="h4">INSCRIPCIÓN A ...</Typography></p>
        <p><Typography variant="body1">La solicitud es para FEDERICO LUNA, DNI 24586843</Typography></p>

        <Paper className={classes.paperMessage}>
          <p >
            <Typography variant="h5">SOLICITUD ENVIADA</Typography>
            <Typography variant="h5">Aguarde a que procesemos sus datos.</Typography>
            <Typography variant="body1">Puede realizar <Link href="#opciones">otras acciones.</Link></Typography>
          </p>
        </Paper>


        <br></br>
        <p>
          <Typography variant="h5">Documentos aportados</Typography>
        </p>
        <Grid container>
          <Grid item xs={12} md={8}>
            <Typography variant="body1">

              <Paper elevation={0} className={classes.action}>
                <Grid container spacing={2}>
                  <Grid item md={9} xs={8}>Datos iniciales</Grid>
                  <Grid item md={3} xs={4}><Button variant="contained" className={classes.ok}>COMPLETO</Button></Grid>
                </Grid>
              </Paper>

            </Typography>
          </Grid>
        </Grid>

        <br></br>
        <p>
          <Typography variant="h5">Pagos</Typography>
        </p>
        <Grid container>
          <Grid item xs={12} md={8}>
            <Paper elevation={0} className={classes.action}>
              <Grid container spacing={2}>
                <Grid item md={9} xs={8}>
                  No se necesitan pagos
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>

        <br></br>
        <p>
          <Typography variant="h5">Turnos</Typography>
        </p>
        <Grid container>
          <Grid item xs={12} md={8}>
            <Paper elevation={0} className={classes.action}>
              <Grid container spacing={2}>
                <Grid item md={9} xs={8}>
                  No se necesitan turnos
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>

        <br></br>
        <p>
          <Typography variant="h5">Enviar los datos</Typography>
        </p>
        <p>
          <Typography variant="h6" color="primary">&nbsp;&nbsp;Solcitud enviada el 10/01/2021.</Typography>
        </p>

      </Paper>

      <Paper id="opciones" className={classes.paper}>
        <p>
          <Typography variant="h4">MÁS OPCIONES</Typography>
        </p>
        <Grid container>
          <Grid item xs={12} md={8}>
            <Typography variant="body1">
              <Paper elevation={0} className={classes.action}>
                <Grid container spacing={2}>
                  <Grid item xs={9}>Obtener comprobante de solicitud</Grid>
                  <Grid item xs={3}><Button variant="contained" color="primary" component={RouterLink} to="/pic/tramites/tramite-1/gestion-2">DESCARGAR</Button></Grid>
                </Grid>
              </Paper>

              <Paper elevation={0} className={classes.action}>
                <Grid container spacing={2}>
                  <Grid item xs={9}>Cancelar la solicitud</Grid>
                  <Grid item xs={3}><Button variant="outlined" color="primary">CANCELAR</Button></Grid>
                </Grid>
              </Paper>

              <Paper elevation={0} className={classes.action}>
                <Grid container spacing={2}>
                  <Grid item xs={9}>Enviar Mensaje? / Inciar Reclamo?</Grid>
                  <Grid item xs={3}><Button variant="outlined" color="primary">RECLAMAR</Button></Grid>
                </Grid>
              </Paper>

            </Typography>
          </Grid>
        </Grid>
      </Paper>

      <Button variant="text" component={RouterLink} to="/pic/tramites/tramite-2/gestion-4">Simular Finalizado</Button>

    </Container>

  );
}

export default TramiteGestion2Page;
