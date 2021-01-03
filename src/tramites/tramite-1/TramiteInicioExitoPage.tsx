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
            <p><Typography variant="h4">Solicitud dada de alta.</Typography></p>
            <p><Typography variant="body1">Ahora debes aportar la documentación faltante.</Typography></p>
            <p><Typography variant="body1">Se puede realizar ahora o se puede continuar luego desde tu Perfil.</Typography></p>
            <p><Typography variant="body1">Te enviamos un mail con datos del trámite.</Typography></p>
          </Paper>

          <Paper className={classes.paper}>
              <p>
                <Button variant="contained" component={RouterLink} to="/pic/tramites/tramite-1/gestion">VER SOLICITUD</Button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button color="primary" variant="contained" component={RouterLink} to="/pic/tramites/tramite-1/documentos/documento-cdu">COMPLETAR DOCUMENTOS</Button>
              </p>

          </Paper>

        </Container>

    );
  }
  
export default TramiteInicioExitoPage1;
