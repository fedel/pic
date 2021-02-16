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
              <Typography variant="body2">Inscripción a ...</Typography>
            </p>

            <p>
              Por favor confirma los siguientes datos para continuar con tu solicitud...
            </p>

            <p>
              El titular del trámite es ....
            </p>

            <p>
              Campo 1: ...
            </p>

            <p>
              Campo 2: ...
            </p>

            <p>
              Campo 3: ...
            </p>

            <p>
              <Button variant="contained" component={RouterLink} to="/pic/tramites/tramite-1/incio-chequeo-2">ANTERIOR</Button>&nbsp;&nbsp;&nbsp;&nbsp;
              <Button color="primary" variant="contained" component={RouterLink} to="/pic/tramites/tramite-2/gestion-2">CONFIRMAR</Button>
            </p>
          </Paper>
        </Container>

    );
  }
  
export default Tramite1InicioConfirmacionPage;
