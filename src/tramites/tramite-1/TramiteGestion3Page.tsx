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
    },
    message: {
      margin: "6pt",
      padding: "16pt",
      //border: "solid 3px #a8a",
      backgroundColor: theme.palette.secondary.main,
      color: "#fff",
      textAlign: "center",
    },

  }),
);

function TramiteGestion3Page(props: any) {
  const classes = useStyles();
  const location = useLocation();

  const esSubsanado = location.search.indexOf("SUB") >= 0;

  return (
    <Container className={classes.container}>
      <Paper className={classes.paper}>
        <p><Typography variant="h3">Solicitud Licencia de Estacionamiento </Typography></p>

        <p><Typography variant="body1">La solicitud es para FEDERICO LUNA, DNI 24586843</Typography></p>

          <Grid container>
            <Grid item xs={12} md={12}>
              <Typography variant="body1">
              { !esSubsanado &&
                <Paper elevation={0} className={classes.message}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>Tu solicitud ha sido observada. Revisa tu acciones pendientes.</Grid>
                  </Grid>
                </Paper>
              }
              </Typography>
            </Grid>
          </Grid>

        <br></br>

        <Typography variant="h5">Acciones pendientes</Typography>
        <Grid container>
          <Grid item xs={12} md={8}>

            <Typography variant="body1">
            { !esSubsanado &&
              <Paper elevation={0} className={classes.action}>
                <Grid container spacing={2}>
                  <Grid item xs={9}>
                    Certificado Único de Discapacidad (CDU)
                    <br></br>
                    <Typography variant="body2" color="secondary">El documento que se aportó no correponde al beneficiario de la solcitud. Subir el documento que correponde.</Typography>
                    </Grid>
                    <Grid item xs={3}><Button variant="contained" color="secondary" component={RouterLink} to="/pic/tramites/tramite-1/subsanar-cdu">CORREGIR</Button></Grid>
                </Grid>
              </Paper>
            }
            
            { esSubsanado &&
                <Paper elevation={0} className={classes.action}>
                <Grid container spacing={2}>
                  <Grid item xs={9}>Aguarde a que la solicitud sea procesada.<br></br><Typography variant="body2" color="secondary">Te enviaremos un mensaje...</Typography></Grid>
                  <Grid item xs={3}>
                    <Button variant="outlined" color="primary" component={RouterLink} to="/pic/tramites/tramite-1/gestion-2">AGUARDAR</Button>
                    <Typography variant="body2">
                      <br></br>
                      <Chip label="SOLICITUD ENVIADA" color="primary"></Chip>
                    </Typography>
                    </Grid>
                </Grid>
              </Paper>
              }


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
                  <Grid item xs={9}>Certificado Único de Discapacidad (CDU)
                  <br></br>
                  <Chip label="OBSERVADO" color="secondary"></Chip>
                  </Grid>
                  <Grid item xs={3}><Button variant="outlined">VER</Button></Grid>
                </Grid>
              </Paper>

              { esSubsanado &&
              <Paper elevation={0} className={classes.action}>
                <Grid container spacing={2}>
                  <Grid item xs={9}>
                    Certificado Único de Discapacidad (CDU)
                    <br></br>
                    <Chip label="CORREGIDO" color="primary"></Chip>
                    </Grid>
                    <Grid item xs={3}><Button variant="outlined">VER</Button></Grid>
                </Grid>
              </Paper>
            }


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
      <Button variant="text" component={RouterLink} to="/pic/tramites/tramite-1/gestion-4">Simular Finalizado</Button>


    </Container>

  );
}

export default TramiteGestion3Page;
