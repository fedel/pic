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

function WebTramitePage2(props: any) {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
          <Paper className={classes.paper}>
            <p><Typography variant="body2">Seccion 1 / Sub Seccion 1 / Trámite 2</Typography></p>
            
            <p><Typography variant="h3">Inscripción a ...</Typography></p>
            <p>
              <Typography variant="body1">
                Solicitud de inscripción a ...
              </Typography>
            </p>

            <p>
              <Button color="primary" variant="contained" component={RouterLink} to="/pic/tramites/tramite-2/inicio-datos">COMENZAR TRÁMITE</Button>
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
              <p><Typography variant="body1">* ... </Typography></p>
              <p><Typography variant="body1">* ... </Typography></p>
              <p><Typography variant="body1">* ... </Typography></p>
            </div>

            <p><Typography variant="h4">Deberas aportar</Typography></p>
            <p><Typography variant="body1">La siguiene es una lista de documentos y/o formularios que te solicitaremos según se requiera. Lo que solicitamos puede varias según los datos que aportes.</Typography></p>

            <div style={{paddingLeft: 16}}>
              <p><Typography variant="body1"><Link component={RouterLink} to="/pic/web/requisito-1">* Documento de Identidad del beneficiario del CUD.</Link></Typography></p>
              <p><Typography variant="body1"><Link component={RouterLink} to="/pic/web/requisito-2">* Formulario de inscripción.</Link></Typography></p>
            </div>

            <p><Typography variant="h4">¿Cuánto sale?</Typography></p>
              <div style={{paddingLeft: 16}}>
            <p><Typography color="primary" variant="h5">La inscripción es gratuita. Durante la realización deberas abonar materiales y ...</Typography></p>
            </div>
            <p><Typography variant="body1">Una vez iniciado trámite verificacremos la informacion deberas esperar a que se apruebe la inscripción con el cupo disponible.</Typography></p>

            {//            <TramitePasos></TramitePasos> 
            }

            <p>
              <Button color="primary" variant="contained" component={RouterLink} to="/pic/tramites/tramite-2/inicio-datos">COMENZAR TRÁMITE</Button>
            </p>

          </Paper>
        </Container>
    );
  }
  
export default WebTramitePage2;
