import React from 'react';
import { makeStyles, Theme, createStyles, Toolbar, Typography, Button, Container, Box, Grid, Hidden, Paper, TextField, Divider, Link } from "@material-ui/core";
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

function WebBuscarPage(props: any) {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
          <Paper className={classes.paper}>
            <p><Typography variant="h5">Buscar</Typography></p>

            <div>
              <form noValidate autoComplete="off" >
                <TextField id="outlined-basic" label="Buscar en rosario.gob.ar" variant="filled" style={{width: "580px"}}/>
                <Button color="primary" variant="contained" style={{height: 56}}>Buscar</Button>
              </form>
            </div>

            <Grid container spacing={4}>
              <Grid item md={3} sm={12}>
                <p><Typography variant="h6">+ Filtro por tópicos</Typography></p>
                <p style={{paddingLeft: 16}}>
                  <Typography variant="body1">+ Covid 19</Typography>
                  <Typography variant="body1">+ Cultura y Sociedad </Typography>
                  <Typography variant="body1">+ Cursos y Capacitaciónes</Typography>
                  <Typography variant="body1">+ Plata</Typography>
                  <Typography variant="body1">+ Gobierno</Typography>
                  <Typography variant="body1">+ Salud y Bienestar</Typography>
                  <Typography variant="body1">+ ...</Typography>
                </p>

                <Divider></Divider>
                <p><Typography variant="h6">+ Filtro por tipo de contenido</Typography></p>
                <p style={{paddingLeft: 16}}>
                  <Typography variant="body1">+ Trámites y Servicios</Typography>
                  <Typography variant="body1">+ Noticias y Comunicados</Typography>
                  <Typography variant="body1">+ Ordenanzas y Regulaciones</Typography>
                  <Typography variant="body1">+ Estadisticas</Typography>
                  <Typography variant="body1">+ ...</Typography>
                </p>

                <Divider></Divider>
                <p><Typography variant="h6">+ Filtro por fecha</Typography></p>
                <p style={{paddingLeft: 16}}>
                  <Typography variant="body1">+ Desde: ________</Typography>
                  <Typography variant="body1">+ Hasta: ________</Typography>
                </p>
              </Grid>

              <Grid item md={9} sm={12}>
                <p><Typography variant="h6">406 Resultados</Typography></p>
                <Divider></Divider>

                <div>
                  <p>
                    <Typography variant="h6"><Link component={RouterLink} to="/pic/web/tramite-1">Libre estacionamiento para personas con discapacidad</Link></Typography>
                    <Typography variant="subtitle1">Use este trámite es para... </Typography>
                    <Divider></Divider>
                  </p>

                  <p>
                    <Typography variant="h6"><Link component={RouterLink} to="/pic/web/tramite-2">Inscripción a...</Link></Typography>
                    <Typography variant="subtitle1">Use este trámite es para... </Typography>
                    <Divider></Divider>
                  </p>

                  <p>
                    <Typography variant="h6"><Link component={RouterLink} to="#">Trámite 3</Link></Typography>
                    <Typography variant="subtitle1">Use este trámite es para... </Typography>
                    <Divider></Divider>
                  </p>

                  <p>
                    <Typography variant="h6"><Link component={RouterLink} to="#">Trámite 4</Link></Typography>
                    <Typography variant="subtitle1">Use este trámite es para... </Typography>
                    <Divider></Divider>
                  </p>

                  <p>
                    <Typography variant="h6"><Link component={RouterLink} to="#">Página 1</Link></Typography>
                    <Typography variant="subtitle1">Use este trámite es para... </Typography>
                    <Divider></Divider>
                  </p>

                  <p>
                    <Typography variant="h6"><Link component={RouterLink} to="#">Página 2</Link></Typography>
                    <Typography variant="subtitle1">Use este trámite es para... </Typography>
                    <Divider></Divider>
                  </p>

                  <p>
                    <Typography variant="h6"><Link component={RouterLink} to="#">Trámite 7</Link></Typography>
                    <Typography variant="subtitle1">Use este trámite es para... </Typography>
                    <Divider></Divider>
                  </p>
                </div>

                <div>
                  <Button variant="contained">Siguiente (2 / 58)</Button>
                </div>
              </Grid>
            </Grid>
          </Paper>
        </Container>
    );
  }
  
export default WebBuscarPage;
