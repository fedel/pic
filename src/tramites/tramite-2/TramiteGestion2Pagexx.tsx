import React from 'react';
import { makeStyles, Theme, createStyles, Toolbar, Typography, Button, Container, Box, Grid, Hidden, Paper, TextField, Divider, Link, Chip } from "@material-ui/core";
import { Link as RouterLink, navigate, useLocation, useNavigate, useParams } from "@reach/router"


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
      margin: "6pt",
      padding: "6pt",
      borderBottom: "solid 3px #aaa",
    }
  }),
);

function TramiteGestion2Page(props: any) {
  const classes = useStyles();
  const location = useLocation();

  const lmVer = location.search.indexOf("LM") >= 0;
  const ldVer = location.search.indexOf("LD") >= 0;
  const cduVer = location.search.indexOf("CDU") >= 0;
  const enviarActivo = lmVer && ldVer && cduVer;

  return (
    <Container className={classes.container}>
      <Paper className={classes.paper}>
        <p><Typography variant="h3">Solicitud Licencia de Estacionamiento </Typography></p>

        <p><Typography variant="body1">La solicitud es para FEDERICO LUNA, DNI 24586843</Typography></p>

        <Typography variant="h5">Acciones pendientes</Typography>
        <Grid container>
          <Grid item xs={12} md={8}>
            <Typography variant="body1">
              <Paper elevation={0} className={classes.action}>
                <Grid container spacing={2}>
                  <Grid item xs={9}>
                      Aguarde a que la solicitud sea procesada.
                      <br></br>
                      <Typography variant="body2">
                      Te enviaremos un mensaje cuando ocurran cambios. <Link href="">Más...</Link>
                      </Typography>
                      </Grid>
                  <Grid item xs={3}>
                    <Button variant="outlined" color="primary" component={RouterLink} to="/pic/tramites/tramite-1/gestion-2">AGUARDAR</Button>
                    <Typography variant="body2">
                      <br></br>
                      <Chip label="SOLICITUD ENVIADA" color="primary"></Chip>
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Typography>
          </Grid>
        </Grid>

        <br></br>

        <Typography variant="h5">Documentos aportados</Typography>
        <Grid container>
          <Grid item xs={12} md={8}>
            <Typography variant="body1">
              <Paper elevation={0} className={classes.action}>
                <Grid container spacing={2}>
                  <Grid item xs={9}>Datos iniciales</Grid>
                  <Grid item xs={3}><Button variant="outlined">VER</Button></Grid>
                </Grid>
              </Paper>

              <Paper elevation={0} className={classes.action}>
                <Grid container spacing={2}>
                  <Grid item xs={9}>Libre Multa</Grid>
                  <Grid item xs={3}><Button variant="outlined" component={RouterLink} to="/pic/tramites/tramite-1/gestion-2">VER</Button></Grid>
                </Grid>
              </Paper>

              <Paper elevation={0} className={classes.action}>
                <Grid container spacing={2}>
                  <Grid item xs={9}>Libre Deuda</Grid>
                  <Grid item xs={3}><Button variant="outlined">VER</Button></Grid>
                </Grid>
              </Paper>

              <Paper elevation={0} className={classes.action}>
                <Grid container spacing={2}>
                  <Grid item xs={9}>Certificado Único de Discapacidad (CDU)</Grid>
                  <Grid item xs={3}><Button variant="outlined">VER</Button></Grid>
                </Grid>
              </Paper>

              <Paper elevation={0} className={classes.action}>
                <Grid container spacing={2}>
                  <Grid item xs={9}>Pagar $ 267,00 <Chip label="PAGADO"></Chip></Grid>
                  <Grid item xs={3}><Button variant="outlined" component={RouterLink} to="/pic/tramites/tramite-1/documentos/documento-cdu">VER</Button></Grid>
                </Grid>
              </Paper>
              

            </Typography>
          </Grid>
        </Grid>

        <p>
          <Typography variant="h5">Certificados Emitidos</Typography>
        </p>
        <Grid container>
          <Grid item xs={12} md={8}>
            <Typography variant="body1">
              <Paper elevation={0} className={classes.action}>
                <Grid container spacing={2}>
                  <Grid item xs={9}>Comprobante de solicitud</Grid>
                  <Grid item xs={3}><Button variant="outlined" color="primary" component={RouterLink} to="/pic/tramites/tramite-1/gestion-2">VER COMPROBANTE</Button></Grid>
                </Grid>
              </Paper>
            </Typography>

          </Grid>
        </Grid>


        <p>
          <Typography variant="h5">Otras Acciones</Typography>
        </p>
        <Grid container>
          <Grid item xs={12} md={8}>
            <Typography variant="body1">
              <Paper elevation={0} className={classes.action}>
                <Grid container spacing={2}>
                  <Grid item xs={9}>Cancelar la solicitud actual</Grid>
                  <Grid item xs={3}><Button variant="outlined" component={RouterLink} to="/pic/tramites/tramite-1/gestion-2">CANCELAR SOLICITUD</Button></Grid>
                </Grid>
              </Paper>
            </Typography>

          </Grid>
        </Grid>
      </Paper>

      <Button variant="text" component={RouterLink} to="/pic/tramites/tramite-1/gestion-3">Simular observación</Button>
    </Container>

  );
}

export default TramiteGestion2Page;
