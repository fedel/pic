import React from 'react';
import { makeStyles, Theme, createStyles, Toolbar, Typography, Button, Container, Box, Grid, Hidden, Paper, TextField, Divider, Link } from "@material-ui/core";
import { Link as RouterLink, navigate } from "@reach/router"
import TramitePasos from '../tramites/tramite-1/TramitePasos';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
        padding: 0,
    },
    paper: {
      padding: theme.spacing(1),
      margin: theme.spacing(2),
    },
    step: {
      display: "flex",
      margin: 8,
    },
    stepNumber: {
      textAlign: "center",
      borderColor: "#44d",
      borderStyle: "solid",
      borderWidth: 3,
      borderRadius: 32,
      minHeight: 32,
      maxHeight: 32,
      minWidth: 32,
      paddingTop: 3,
    },
    stepContent: {
      borderColor: "#aaa",
      borderStyle: "solid",
      borderWidth: 0,
      borderTopWidth: 2,
      marginLeft: 6,
      minWidth: 380,
    },
    stepDivisor: {
      borderColor: "#aaa",
      borderStyle: "solid",
      borderWidth: 0,
      borderLeftWidth: 2,
      minHeight: 32,
      maxHeight: 32,
      marginLeft: 22,
      marginTop: -20,

    },

  }),
);

function WebTramitePage1(props: any) {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
          <Paper className={classes.paper}>
            <p><Typography variant="body2">Seccion 1 / Sub Seccion 2 / Trámite 1</Typography></p>
            
            <p><Typography variant="h3">Estacionamiento para personas con discapacidad</Typography></p>
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
          
            <p><Typography variant="h4">Requisitos</Typography></p>

            <div style={{paddingLeft: 16}}>
              <p><Typography variant="body1">* Tener domicilio en la ciudad de Rosario</Typography></p>
              <p><Typography variant="body1">* Tener el Certificado Único de Discapacidad</Typography></p>
            </div>

            <p><Typography variant="h4">Deberas aportar</Typography></p>
            <p><Typography variant="body1">La siguiene es una lisa de documentos y/o formularios que te solicitaremos según se requiera. Lo que solicitamos puede varias según los datos que aportes.</Typography></p>

            <div style={{paddingLeft: 16}}>
              <p><Typography variant="body1"><Link component={RouterLink} to="/pic/web/requisito-1">* Documento de Identidad del beneficiario del CUD.</Link></Typography></p>
              <p><Typography variant="body1"><Link component={RouterLink} to="/pic/web/requisito-2">* Certificado Único de Discapacidad (CDU) emitido por la Junta Evaluadora de Discapacidad.</Link></Typography></p>
            </div>

            <p><Typography variant="h4">¿Cuánto sale?</Typography></p>
              <div style={{paddingLeft: 16}}>
            <p><Typography color="primary" variant="h5">$ 75,20</Typography></p>
            </div>
            <p><Typography variant="body1">Una vez iniciado trámite deberas pagar el sellado para poder presentar el trámite.</Typography></p>
            <p><Typography variant="body1">Lo podrás pagar usando <strong>Puntos de Cobro, Pasarela Banco Municipal, VEP, ....</strong></Typography></p>

            <TramitePasos></TramitePasos>

            <p>
              <Button color="primary" variant="contained" component={RouterLink} to="/pic/web/login">COMENZAR TRÁMITE</Button>
            </p>

          </Paper>
        </Container>
    );
  }
  
export default WebTramitePage1;
