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
        <p><Typography variant="h4">SOLICITUD LICENCIA DE ESTACIONAMIENTO</Typography></p>
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

              <Paper elevation={0} className={classes.action}>
                <Grid container spacing={2}>
                  <Grid item md={9} xs={8}>
                    Libre Multa
                  </Grid>
                  <Grid item xs={3}><Button variant="contained" className={classes.ok} component={RouterLink} to="/pic/tramites/tramite-1/inicio-chequeo-1">COMPLETO</Button></Grid>
                </Grid>
              </Paper>

              <Paper elevation={0} className={classes.action}>
                <Grid container spacing={2}>
                  <Grid item md={9} xs={8}>
                    Libre Deuda
                  </Grid>
                  <Grid item xs={3}><Button variant="contained" className={classes.ok}>COMPLETO</Button></Grid>
                </Grid>
              </Paper>

              <Paper elevation={0} className={classes.action}>
                <Grid container spacing={2}>
                  <Grid item md={9} xs={8}>
                    Certificado Único de Discapacidad (CDU)
                    <Typography variant="body2"><Link href="#">Cambiar</Link></Typography>
                  </Grid>
                  <Grid item xs={3}><Button variant="contained" className={classes.ok}>COMPLETO</Button></Grid>
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
                  Pagar $ 267,00 <Chip label="PAGADO" className={classes.ok}></Chip>
                </Grid>
                <Grid item xs={3}><Button variant="outlined" component={RouterLink} className={classes.ok} to="/pic/tramites/tramite-1/documentos/documento-cdu">COMPLETO</Button></Grid>
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
                  <Typography variant="h6">Turno para inspección de...</Typography>
                </Grid>
                <Grid item xs={3}><Button variant="outlined" component={RouterLink} className={classes.ok} to="/pic/tramites/tramite-1/gestionx?op=LM,LD,CDU,PAG">COMPLETO</Button></Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="body1"><EventIcon style={{ verticalAlign: "top" }} />&nbsp;&nbsp;Lunes 26 Febrero, 10:45hs &nbsp;&nbsp;&nbsp;<Link href="#">Cancelar</Link></Typography>
                  <Typography variant="body1"><PlaceIcon style={{ verticalAlign: "top" }} />&nbsp;&nbsp;Suipacha 1667</Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Paper>

      <Paper id="opciones" className={classes.paper}>
        <p>
          <Typography variant="h4">SOLICITUD ENVIADA</Typography>
          <Typography variant="h6">Aguarde a que procesemos sus datos.</Typography>
        </p>
        <p>
          <Typography variant="body1">
            Enviaremos un mensaje cuando este procesada.
          </Typography>
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
                  <Grid item xs={3}><Button variant="outlined" color="primary" component={RouterLink} to="/pic/tramites/tramite-1/gestion-2">DESCARGAR</Button></Grid>
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

      <Button variant="text" component={RouterLink} to="/pic/tramites/tramite-1/gestion-3?corregir">Simular observación</Button>

    </Container>

  );
}

export default TramiteGestion2Page;
