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
                  Matrícula de Inscripción&nbsp;
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
        <p><Typography variant="h4">INSCRIPCIÓN A ...</Typography></p>

        <p><Typography variant="body1">La solicitud es para FEDERICO LUNA, DNI 24586843</Typography></p>
     
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
                    Matrícula de Inscripción&nbsp;
                  </Grid>
                  <Grid item xs={3}><Button variant="contained" color="primary" component={RouterLink} to="#">DESCARGAR</Button></Grid>
                </Grid>
              </Paper>

              <Paper elevation={0} className={classes.action}>
                <Grid container spacing={2}>
                  <Grid item xs={9}>Comprobante de solicitud</Grid>
                  <Grid item xs={3}><Button variant="outlined" color="primary" component={RouterLink} to="#">DESCARGAR</Button></Grid>
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
