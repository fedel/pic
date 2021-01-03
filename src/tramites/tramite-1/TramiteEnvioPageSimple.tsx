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

function TramiteEnvioPage(props: any) {
    const classes = useStyles();

    const back = () => {
      window.history.back();
    }

    return (
        <Container className={classes.container}>
          <Paper className={classes.paper}>
            <p>
              <Typography variant="h4">Enviar solicitud</Typography>
              <Typography variant="body2"><Link href="#">Paso 10 de 10</Link></Typography>
            </p>

            <p>
              Por favor confirma los siguientes datos para enviar tu solicitud y que empecemos a procesarla.
              En algunos casos tendras una respueta del trámite de forma inmediata.
            </p>

            <p>
              Estas solicitando el <b>Certificado de estacionamiento...</b>
            </p>

            <p>
              La solicitud es para <b>FEDERICO LUNA, DNI 24586843</b>.
            </p>

            <p>
              <Button variant="contained" onClick={back}>ATRAS</Button>&nbsp;&nbsp;&nbsp;&nbsp;
              <Button color="primary" variant="contained" component={RouterLink} to="/pic/tramites/tramite-1/gestion">ENVIAR SOLICITUD</Button>
            </p>
          </Paper>
        </Container>

    );
  }
  
export default TramiteEnvioPage;
