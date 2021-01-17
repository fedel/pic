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
  }),
);

function TramiteGestion4Page(props: any) {
  const classes = useStyles();
  const location = useLocation();
  const [verTodo, setVerTodo] = React.useState(false);

  const handleVerTodo = (event: React.MouseEvent) => {
    setVerTodo(!verTodo);
  };

  return (
    <Container className={classes.container}>

      <Paper id="corregir" className={classes.paper}>
        <Grid container>
          <Grid item xs={12} md={8}>
            <Typography variant="body1">
            <p>
              <Typography variant="h4">SOLICITUD FINALIZADA CON EXITO</Typography>
              <Typography variant="h6">Descargue la documentación generada.</Typography>
            </p>

            <Paper elevation={0} className={classes.action}>
              <Grid container spacing={2}>
                <Grid item xs={9}>
                  Permiso de estacionamiento&nbsp;
                    </Grid>
                <Grid item xs={3}><Button variant="contained" color="primary" component={RouterLink} to="#">DESCARGAR</Button></Grid>
              </Grid>
            </Paper>

            <p>
              <Link href="#opciones" onClick={handleVerTodo}>Ver toda la solicitud.</Link>
            </p>
            </Typography>
          </Grid>
        </Grid>
      </Paper>

      { verTodo && 

      <Paper className={classes.paper}>
        <p><Typography variant="h4">SOLICITUD LICENCIA DE ESTACIONAMIENTO</Typography></p>

        <p><Typography variant="body1">La solicitud es para FEDERICO LUNA, DNI 24586843</Typography></p>

       
        <br></br>
        <p>
          <Typography variant="h5">Acciones necesarias</Typography>
        </p>

        <Grid container>
          <Grid item xs={12} md={8}>
            <Typography variant="body1">
              <Paper elevation={0} className={classes.action}>
                <Grid container spacing={2}>
                  <Grid item xs={9}>
                    Certificado Único de Discapacidad (CDU)&nbsp;<Chip label="CORREGIDO" className={classes.ok}></Chip>
                  </Grid>
                  <Grid item xs={3}><Button variant="contained" className={classes.ok} component={RouterLink} to="/pic/tramites/tramite-1/subsanar-cdu">COMPLETO</Button></Grid>
                </Grid>
              </Paper>
            </Typography>
          </Grid>
        </Grid>
       
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
                  <Grid item xs={3}><Button variant="contained" className={classes.ok}>COMPLETO </Button></Grid>
                </Grid>
              </Paper>

              <Paper elevation={0} className={classes.action}>
                <Grid container spacing={2}>
                  <Grid item md={9} xs={8}>
                    Certificado Único de Discapacidad (CDU)
                    <br></br>
                    <Typography variant="body2" color="secondary">El documento que se aportó no correponde al beneficiario de la solcitud.</Typography>

                  </Grid>
                  <Grid item xs={3}><Button variant="contained" color="secondary">OBSERVADO</Button></Grid>
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
                  <Typography variant="body1"><EventIcon style={{ verticalAlign: "top" }} />&nbsp;&nbsp;Lunes 26 Febrero, 10:45hs &nbsp;&nbsp;&nbsp;</Typography>
                  <Typography variant="body1"><PlaceIcon style={{ verticalAlign: "top" }} />&nbsp;&nbsp;Suipacha 1667</Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
      }
      
      { verTodo &&
      <Paper id="opciones" className={classes.paper}>
        <p>
          <Typography variant="h5">MÁS OPCIONES</Typography>
        </p>
        <Grid container>
          <Grid item xs={12} md={8}>
            <Typography variant="body1">
              <Paper elevation={0} className={classes.action}>
                <Grid container spacing={2}>
                  <Grid item xs={9}>
                    Permiso de estacionamiento&nbsp;
                    </Grid>
                  <Grid item xs={3}><Button variant="contained" color="primary" component={RouterLink} to="#">DESCARGAR</Button></Grid>
                </Grid>
              </Paper>

              <Paper elevation={0} className={classes.action}>
                <Grid container spacing={2}>
                  <Grid item xs={9}>Obtener comprobante de solicitud</Grid>
                  <Grid item xs={3}><Button variant="outlined" color="primary" component={RouterLink} to="/pic/tramites/tramite-1/gestion-2">DESCARGAR</Button></Grid>
                </Grid>
              </Paper>
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      }

    </Container>
  );
}

export default TramiteGestion4Page;
