import React from 'react';
import { makeStyles, Theme, createStyles, Toolbar, Typography, Button, Container, Box, Grid, Hidden, Paper, TextField, Divider, Link } from "@material-ui/core";
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

function TramiteInicioDatosPage1(props: any) {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
          <Paper className={classes.paper}>
            <p><Typography variant="body1">Seccion 1 / Sub Seccion 2 / Trámite 1 / Inicio</Typography></p>
            <p><Typography variant="h3">Trámite 1</Typography></p>
          </Paper>

          <Paper className={classes.paper}>
              <p>
                <Typography variant="h5">Datos Iniciales</Typography>
              </p>
              <p>
                <Typography variant="body1">Estos datos son necesarios para....</Typography>
              </p>

              <form noValidate autoComplete="off" >
                <p>
                <TextField id="outlined-basic" helperText="Este campo es..." label="Campo 1" variant="filled" style={{width: "280px"}}/>
                </p>
                <p>
                <TextField id="outlined-basic" helperText="Este campo es..." label="Campo 2" variant="filled" style={{width: "280px"}}/>
                </p>
                <p>
                <TextField id="outlined-basic" helperText="Este campo es..." label="Campo 3" variant="filled" style={{width: "280px"}}/>
                </p>
              </form>

              <p>
                <Typography variant="body1">Verficación Libre de Multas: TIENE MULTAS &nbsp;&nbsp;&nbsp;&nbsp;<Button color="primary" variant="contained">GESTIONAR</Button></Typography>
              </p>

              <p>
                <Typography variant="body1">Verficación Libre de Deudas: TIENE DEUDAS &nbsp;&nbsp;&nbsp;&nbsp;<Button color="primary" variant="contained">GESTIONAR</Button></Typography>
              </p>

          </Paper>

          <Paper className={classes.paper}>
              <p>
                <Button color="primary" variant="contained" component={RouterLink} to="/pic/tramites/tramite-1/inicio-titular">ANTERIOR</Button>&nbsp;&nbsp;&nbsp;&nbsp;
                <Button color="primary" variant="contained" component={RouterLink} to="/pic/tramites/tramite-1/inicio-exito">SIGUIENTE</Button>
              </p>
          </Paper>

        </Container>

    );
  }
  
export default TramiteInicioDatosPage1;
