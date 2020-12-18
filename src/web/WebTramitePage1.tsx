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

function WebTramitePage1(props: any) {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
          <Paper className={classes.paper}>
            <p><Typography variant="body2">Seccion 1 / Sub Seccion 2 / Trámite 1</Typography></p>
            
            <p><Typography variant="h3">Libre estacionamiento para personas con discapacidad</Typography></p>
            <p>
              <Typography variant="body1">Franquicia que se otorga a personas con discapacidad que padezcan alteraciones que reduzcan considerablemente su movilidad. La franquicia es respecto a la persona y por lo tanto transferible al vehículo en el que se movilice. Habilita a estacionar en sectores tarifados de manera gratuita.
              </Typography>
            </p>


            <p>
              <Button color="primary" variant="contained" component={RouterLink} to="/pic/web/login">COMENZAR TRÁMITE</Button>
            </p>

          {/*
            <p><Typography variant="h4">Pasos previos</Typography></p>
            <p><Typography variant="body1">Para comenzar el trámite te solicitaremos</Typography></p>
            <div style={{paddingLeft: 16}}>
            <p><Typography variant="body1"><Link component={RouterLink} to="/web/tramite-1/datos-inicio">* Completar datos de inicio</Link></Typography></p>
            <p><Typography variant="body1"><Link component={RouterLink} to="/web/libre-multa">* Libre de Multas</Link></Typography></p>
            </div>
            */}
          
            <p><Typography variant="h4">¿Cuáles son los requisitos?</Typography></p>

            <div style={{paddingLeft: 16}}>
              <p><Typography variant="body1">* Tener domicilio en la ciudad de Rosario.</Typography></p>
            </div>


            <div style={{paddingLeft: 16}}>
              <p><Typography variant="body1"><Link component={RouterLink} to="/pic/web/requisito-1">* Documento de Identidad del beneficiario del CUD.</Link></Typography></p>
              <p><Typography variant="body1"><Link component={RouterLink} to="/pic/web/requisito-2">* Certificado Único de Discapacidad emitido por la Junta Evaluadora de Discapacidad.</Link></Typography></p>
            </div>

            <p><Typography variant="h4">¿Cuánto sale?</Typography></p>
              <div style={{paddingLeft: 16}}>
            <p><Typography color="primary" variant="h5">$ 75,20</Typography></p>
            </div>
            <p><Typography variant="body1">Una vez iniciado trámite deberas pagar el sellado para poder presentar el trámite.</Typography></p>
            <p><Typography variant="body1">Lo podrás pagar usando <strong>Puntos de Cobro, Pasarela Banco Municipal, VEP, ....</strong></Typography></p>

            <p><Typography variant="h4">Area Responsable </Typography></p>
            <div style={{paddingLeft: 16}}>
              <p><Typography variant="body1">* Area xyz de la direccion de xyz</Typography></p>
            </div>

          </Paper>
        </Container>
    );
  }
  
export default WebTramitePage1;
