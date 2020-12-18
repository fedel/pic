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
                  <TextField id="outlined-basic" label="Buscar en rosario.gob.ar" variant="filled" style={{width: "420px"}}/>
                  <Button color="primary" variant="contained" style={{height: 56}} component={RouterLink} to="/pic/web/buscar">Buscar</Button>
                </form>
                </Grid>
              <Grid item sm={12} md={5}>
                <p><Typography variant="h6">Sugeridos</Typography></p>
                <Typography variant="body1">
                  <p><Link>+ Link 1</Link></p>
                  <p><Link>+ Link 2</Link></p>
                  <p><Link>+ Link 3</Link></p>
                  <p><Link>+ Link 4</Link></p>
                  <p><Link>+ Link 5</Link></p>
                </Typography>
              </Grid>

            </Grid>
          </Paper>

          <Paper className={classes.paper}>
          <Grid container spacing={4}>
              <Grid item sm={12} md={4}>
                <p>
                  <Typography variant="h6"><Link component={RouterLink} to="/pic/web/navegar">Seccion 1</Link></Typography>
                  <Typography variant="subtitle1">Esto es para navegar por la sección... </Typography>
                  <Divider></Divider>
                </p>
                <p>
                  <Typography variant="h6"><Link component={RouterLink} to="/pic/web/navegar">Seccion 2</Link></Typography>
                  <Typography variant="subtitle1">Esto es para navegar por la sección... </Typography>
                  <Divider></Divider>
                </p>
                <p>
                  <Typography variant="h6"><Link component={RouterLink} to="/pic/web/navegar">Seccion 3</Link></Typography>
                  <Typography variant="subtitle1">Esto es para navegar por la sección... </Typography>
                  <Divider></Divider>
                </p>
                <p>
                  <Typography variant="h6"><Link component={RouterLink} to="/pic/web/navegar">Seccion 4</Link></Typography>
                  <Typography variant="subtitle1">Esto es para navegar por la sección... </Typography>
                  <Divider></Divider>
                </p>
              </Grid>

              <Grid item sm={12} md={4}>
              <p>
                  <Typography variant="h6"><Link component={RouterLink} to="/pic/web/navegar">Seccion 1</Link></Typography>
                  <Typography variant="subtitle1">Esto es para navegar por la sección... </Typography>
                  <Divider></Divider>
                </p>
                <p>
                  <Typography variant="h6"><Link component={RouterLink} to="/pic/web/navegar">Seccion 2</Link></Typography>
                  <Typography variant="subtitle1">Esto es para navegar por la sección... </Typography>
                  <Divider></Divider>
                </p>
                <p>
                  <Typography variant="h6"><Link component={RouterLink} to="/pic/web/navegar">Seccion 3</Link></Typography>
                  <Typography variant="subtitle1">Esto es para navegar por la sección... </Typography>
                  <Divider></Divider>
                </p>
                <p>
                  <Typography variant="h6"><Link component={RouterLink} to="/pic/web/navegar">Seccion 4</Link></Typography>
                  <Typography variant="subtitle1">Esto es para navegar por la sección... </Typography>
                  <Divider></Divider>
                </p>
              </Grid>

              <Grid item sm={12} md={4}>
              <p>
                  <Typography variant="h6"><Link component={RouterLink} to="/pic/web/navegar">Seccion 1</Link></Typography>
                  <Typography variant="subtitle1">Esto es para navegar por la sección... </Typography>
                  <Divider></Divider>
                </p>
                <p>
                  <Typography variant="h6"><Link component={RouterLink} to="/pic/web/navegar">Seccion 2</Link></Typography>
                  <Typography variant="subtitle1">Esto es para navegar por la sección... </Typography>
                  <Divider></Divider>
                </p>
                <p>
                  <Typography variant="h6"><Link component={RouterLink} to="/pic/web/navegar">Seccion 3</Link></Typography>
                  <Typography variant="subtitle1">Esto es para navegar por la sección... </Typography>
                  <Divider></Divider>
                </p>
                <p>
                  <Typography variant="h6"><Link component={RouterLink} to="/pic/web/navegar">Seccion 4</Link></Typography>
                  <Typography variant="subtitle1">Esto es para navegar por la sección... </Typography>
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
