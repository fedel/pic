import React from 'react';
import { makeStyles, Theme, createStyles, Toolbar, Typography, Button, Container, Box, Grid, Hidden, Paper, TextField, Link, Divider } from "@material-ui/core";
import Map from "@material-ui/icons/Map";
import Folder from "@material-ui/icons/Folder";
import Help from "@material-ui/icons/Help";
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

function WebHomePage(props: any) {
  const classes = useStyles();

  return (
    <Container className={classes.container}>

      <Paper className={classes.paper}>

        <Grid container>
          <Grid item sm={12} md={7}>
            <form noValidate autoComplete="off" >
              <p><Typography variant="h4">Bienvenido a rosario.gob.ar</Typography></p>
              <p><Typography variant="body1">Buscá servicios, trámites y todo lo que necestias de la municipalidad.</Typography></p>
              <TextField id="outlined-basic" label="Buscar en rosario.gob.ar" variant="filled" style={{ width: "420px" }} />
              <Button color="primary" variant="contained" style={{ height: 56 }} component={RouterLink} to="/pic/web/buscar">Buscar</Button>
            </form>
          </Grid>
          <Grid item sm={12} md={5}>
            <p><Typography variant="h6">Sugeridos</Typography></p>
            <Typography variant="body1">
              <p><Link>+ Link 1</Link></p>
              <p><Link>+ Link 2</Link></p>
              <p><Link>+ Link 3</Link></p>
              <p><Link>+ Link 4</Link></p>
            </Typography>
          </Grid>

        </Grid>
      </Paper>

      <Paper className={classes.paper}>
        <Grid container>
          <Grid item sm={12} md={4}>
            <p>
              <Typography variant="h6"><Link component={RouterLink} to="/web/navegar">Comercios y empleos</Link></Typography>
              <Typography variant="body2">Incluye habilitaciones, permisos y herramientas para el fortalecimiento de tu empresa o emprendimiento</Typography>
              <Divider></Divider>
            </p>
          </Grid>
          <Grid item sm={12} md={4}>
            <p>
              <Typography variant="h6"><Link component={RouterLink} to="/web/navegar">Ciudad, cultura y turismo</Link></Typography>
              <Typography variant="body2">Visitas a espacios culturales. </Typography>
              <Divider></Divider>
            </p>
          </Grid>
          <Grid item sm={12} md={4}>
            <p>
              <Typography variant="h6"><Link component={RouterLink} to="/web/navegar">Deportes</Link></Typography>
              <Typography variant="body2">Esto es para navegar por la sección... </Typography>
              <Divider></Divider>
            </p>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item sm={12} md={4}>
            <p>
              <Typography variant="h6"><Link component={RouterLink} to="/web/navegar">Medioambiente y mantenimiento</Link></Typography>
              <Typography variant="body2">Esto es para navegar por la sección... </Typography>
              <Divider></Divider>
            </p>
          </Grid>

          <Grid item sm={12} md={4}>
            <p>
              <Typography variant="h6"><Link component={RouterLink} to="/web/navegar">Movilidad, transporte y tránsito</Link></Typography>
              <Typography variant="body2">Esto es para navegar por la sección... </Typography>
              <Divider></Divider>
            </p>
          </Grid>

          <Grid item sm={12} md={4}>
            <p>
              <Typography variant="h6"><Link component={RouterLink} to="/web/navegar">Participación y transparencia</Link></Typography>
              <Typography variant="body2">Esto es para navegar por la sección... </Typography>
              <Divider></Divider>
            </p>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item sm={12} md={4}>
            <p>
              <Typography variant="h6"><Link component={RouterLink} to="/web/navegar">Servicios sociales</Link></Typography>
              <Typography variant="body2">Esto es para navegar por la sección... </Typography>
              <Divider></Divider>
            </p>
          </Grid>

          <Grid item sm={12} md={4}>
            <p>
              <Typography variant="h6"><Link component={RouterLink} to="/web/navegar">Tributos, multas y pagos</Link></Typography>
              <Typography variant="body2">Esto es para navegar por la sección... </Typography>
              <Divider></Divider>
            </p>
          </Grid>

          <Grid item sm={12} md={4}>
            <p>
              <Typography variant="h6"><Link component={RouterLink} to="/web/navegar">Vivienda y construcción</Link></Typography>
              <Typography variant="body2">Esto es para navegar por la sección... </Typography>
              <Divider></Divider>
            </p>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item sm={12} md={4}>
            <p>
              <Typography variant="h6"><Link component={RouterLink} to="/web/navegar">Educación</Link></Typography>
              <Typography variant="body2">Esto es para navegar por la sección... </Typography>
              <Divider></Divider>
            </p>
          </Grid>
          <Grid item sm={12} md={4}>
            <p>
              <Typography variant="h6"><Link component={RouterLink} to="/web/navegar">Otros</Link></Typography>
              <Typography variant="body2">Esto es para navegar por la sección... </Typography>
              <Divider></Divider>
            </p>
          </Grid>


        </Grid>
      </Paper>

      <Paper className={classes.paper}>
        otra...
          </Paper>

      <Paper className={classes.paper}>
        otra...
          </Paper>

    </Container>
  );
}

export default WebHomePage;
