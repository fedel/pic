import React from 'react';
import { makeStyles, Theme, createStyles, Toolbar, Typography, Button, Container, Box, Grid, Hidden, Paper, TextField, Divider, Link, Chip } from "@material-ui/core";
import { Link as RouterLink, navigate, useLocation, useNavigate, useParams } from "@reach/router"
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import VisibilityIcon from '@material-ui/icons/Visibility';
import PlaceIcon from '@material-ui/icons/Place';
import EventIcon from '@material-ui/icons/EventAvailable';
import { VerticalAlignBottom } from '@material-ui/icons';


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

  const lmVer = location.search.indexOf("LM") >= 0;
  const ldVer = location.search.indexOf("LD") >= 0;
  const cduVer = location.search.indexOf("CDU") >= 0;
  const pagarVer = location.search.indexOf("PAG") >= 0;
  const turnoVer = location.search.indexOf("TUR") >= 0;
  const enviarActivo = turnoVer && pagarVer && lmVer && ldVer && cduVer;

  return (
    <Container className={classes.container}>
      <Paper className={classes.paper}>
        <p><Typography variant="h4">SOLICITUD LICENCIA DE ESTACIONAMIENTO</Typography></p>

        <p><Typography variant="body1">La solicitud es para FEDERICO LUNA, DNI 24586843</Typography></p>

        <Paper className={classes.paperMessage}>
        {!enviarActivo &&
          <p >
            <Typography variant="h5">COMPLETAR LOS DATOS</Typography>
            <Typography variant="h5">Aun no puede enviar la solicitud, debes completar los todos los datos.</Typography>
          </p>
        }
        {enviarActivo &&
          <div>
            <p>
              <Typography variant="h5">ENVIAR LOS DATOS</Typography>
            </p>
            <p>
              <Typography variant="h5">Debes enviar la solicitud.</Typography>
            </p>

            <p>
              <Button variant="contained" color="primary" component={RouterLink} to="/pic/tramites/tramite-1/gestion-2">ENVIAR SOLICITUD</Button>
            </p>
          </div>
        }
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

              {!lmVer &&
                <Paper elevation={0} className={classes.action}>
                  <Grid container spacing={2}>
                    <Grid item md={9} xs={8}>Libre Multa</Grid>
                    <Grid item md={3} xs={4}><Button variant="contained" color="primary" component={RouterLink} to="/pic/tramites/tramite-1/inicio-chequeo-1">COMPLETAR</Button></Grid>
                  </Grid>
                </Paper>
              }
              {lmVer &&
                <Paper elevation={0} className={classes.action}>
                  <Grid container spacing={2}>
                    <Grid item md={9} xs={8}>
                      Libre Multa
                    <Typography variant="body2"><Link href="#">Cambiar</Link></Typography>
                    </Grid>
                    <Grid item xs={3}><Button variant="contained" className={classes.ok} component={RouterLink} to="/pic/tramites/tramite-1/inicio-chequeo-1">COMPLETO</Button></Grid>
                  </Grid>
                </Paper>
              }

              {!ldVer &&
                <Paper elevation={0} className={classes.action}>
                  <Grid container spacing={2}>
                    <Grid item md={9} xs={8}>
                      Libre Deuda
                  </Grid>
                    <Grid item xs={3}><Button variant="contained" color="primary" component={RouterLink} to="/pic/tramites/tramite-1/inicio-chequeo-2">COMPLETAR</Button></Grid>
                  </Grid>
                </Paper>
              }
              {ldVer &&
                <Paper elevation={0} className={classes.action}>
                  <Grid container spacing={2}>
                    <Grid item md={9} xs={8}>
                      Libre Deuda
                    <Typography variant="body2"><Link href="#">Cambiar</Link></Typography>
                    </Grid>
                    <Grid item xs={3}><Button variant="contained" className={classes.ok}>COMPLETO </Button></Grid>
                  </Grid>
                </Paper>
              }

              {!cduVer &&
                <Paper elevation={0} className={classes.action}>
                  <Grid container spacing={2}>
                    <Grid item md={9} xs={8}>
                      Certificado Único de Discapacidad (CDU)
                  </Grid>
                    <Grid item xs={3}><Button variant="contained" color="primary" component={RouterLink} to="/pic/tramites/tramite-1/documentos/documento-cdu">COMPLETAR</Button></Grid>
                  </Grid>
                </Paper>
              }
              {cduVer &&
                <Paper elevation={0} className={classes.action}>
                  <Grid container spacing={2}>
                    <Grid item md={9} xs={8}>
                      Certificado Único de Discapacidad (CDU)
                    <Typography variant="body2"><Link href="#">Cambiar</Link></Typography>
                    </Grid>
                    <Grid item xs={3}><Button variant="contained" className={classes.ok}>COMPLETO</Button></Grid>
                  </Grid>
                </Paper>
              }

            </Typography>


          </Grid>
        </Grid>

        <br></br>
        <p>
          <Typography variant="h5">Pagos</Typography>
        </p>
        <Grid container>
          <Grid item xs={12} md={8}>
            {!pagarVer &&
              <Paper elevation={0} className={classes.action}>
                <Grid container spacing={2}>
                  <Grid item md={9} xs={8}>Pagar $ 267,00</Grid>
                  <Grid item xs={3}><Button variant="contained" color="primary" component={RouterLink} to="/pic/tramites/tramite-1/sellado">PAGAR</Button></Grid>
                </Grid>
              </Paper>
            }
            {pagarVer &&
              <Paper elevation={0} className={classes.action}>
                <Grid container spacing={2}>
                  <Grid item md={9} xs={8}>
                    Pagar $ 267,00 <Chip label="PAGADO" className={classes.ok}></Chip>
                    <Typography variant="body2"><Link>Cambiar</Link></Typography>
                  </Grid>
                  <Grid item xs={3}><Button variant="outlined" component={RouterLink} className={classes.ok} to="/pic/tramites/tramite-1/documentos/documento-cdu">COMPLETO</Button></Grid>
                </Grid>
              </Paper>
            }
          </Grid>
        </Grid>

        <br></br>
        <p>
          <Typography variant="h5">Turnos</Typography>
        </p>
        <Grid container>
          <Grid item xs={12} md={8}>
            {!turnoVer &&
              <Paper elevation={0} className={classes.action}>
                <Grid container spacing={2}>
                  <Grid item md={9} xs={8}>Obtener Turno para inspección de ...</Grid>
                  <Grid item xs={3}><Button variant="contained" color="primary" component={RouterLink} to="/pic/tramites/tramite-1/gestion?op=LM,LD,CDU,PAG,TUR">COMPLETAR</Button></Grid>
                </Grid>
              </Paper>
            }
            {turnoVer &&
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
            }
          </Grid>
        </Grid>
      </Paper>

      <Paper className={classes.paper}>
        {!enviarActivo &&
          <p>
            <Typography variant="h4">ENVIAR LOS DATOS</Typography>
            <Typography variant="h6">Aun no puede enviar la solicitud, debes completar los todos los datos.</Typography>
          </p>
        }
        {enviarActivo &&
          <div>
            <p>
              <Typography variant="h4">ENVIAR LOS DATOS</Typography>
            </p>
            <p>
              <Typography variant="h5">Debes enviar la solicitud.</Typography>
            </p>
          </div>
        }
    
        <Grid container>
          <Grid item xs={12} md={8}>
            <Paper elevation={0} className={classes.action}>
              <Grid container spacing={2}>
                <Grid item xs={9}>Enviar solicitud</Grid>
                {!enviarActivo &&
                  <Grid item xs={3}><Button variant="outlined" disabled>ENVIAR</Button></Grid>
                }
                {enviarActivo &&
                  <Grid item xs={3}><Button variant="contained" color="primary" component={RouterLink} to="/pic/tramites/tramite-1/gestion-2?#top">ENVIAR SOLICITUD</Button></Grid>
                }
              </Grid>
            </Paper>

          </Grid>
        </Grid>
      </Paper>


      <Button variant="text" component={RouterLink} to="/pic/tramites/tramite-1/gestion-3">Simular observación</Button>

    </Container>

  );
}

export default TramiteGestion2Page;
