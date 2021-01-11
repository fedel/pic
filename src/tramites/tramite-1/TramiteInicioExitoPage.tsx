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

function TramiteInicioExitoPage1(props: any) {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
          <Paper className={classes.paper}>
            <p><Typography variant="h4">Solicitud dada de alta</Typography></p>
            <p><Typography variant="body1">Ahora debes aportar la documentación faltante.</Typography></p>
            <p><Typography variant="body1">Te enviamos un mail con datos de la solicitud.</Typography></p>
            <p>&nbsp;</p>
            <p>
              <Button color="primary" variant="contained" component={RouterLink} to="/pic/tramites/tramite-1/gestion">COMPLETAR ACCIONES FALTANTES</Button>
            </p>
          </Paper>
        </Container>

    );
  }
  
export default TramiteInicioExitoPage1;
