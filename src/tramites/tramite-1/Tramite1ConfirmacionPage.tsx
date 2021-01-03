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

function Tramite1InicioConfirmacionPage(props: any) {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
          <Paper className={classes.paper}>
            <p>
              <Typography variant="h4">Confirmación</Typography>
              <Typography variant="body2"><Link href="#">Paso 7 de 10</Link></Typography>
            </p>

            <p>
              Por favor confirma los siguientes datos para continuar con tu solicitud...
            </p>

            <p>
              Es para...
            </p>

            <p>
              Con los datos iniciales...
            </p>

            <p>
              <Button variant="contained" component={RouterLink} to="/pic/tramites/tramite-1/incio-chequeo-2">ANTERIOR</Button>&nbsp;&nbsp;&nbsp;&nbsp;
              <Button color="primary" variant="contained" component={RouterLink} to="/pic/tramites/tramite-1/inicio-exito">CONFIRMAR</Button>
            </p>
          </Paper>
        </Container>

    );
  }
  
export default Tramite1InicioConfirmacionPage;
