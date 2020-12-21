import React from 'react';
import { makeStyles, Theme, createStyles, Toolbar, Typography, Button, Container, Box, Grid, Hidden, Paper, TextField, Divider, Link } from "@material-ui/core";
import Map from "@material-ui/icons/Map";
import Folder from "@material-ui/icons/Folder";
import Help from "@material-ui/icons/Help";

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

function WebRequisitoPage2(props: any) {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
          <Paper className={classes.paper}>
            <p><Typography variant="body1">Requisitos / Requisito 2</Typography></p>
            
            <p><Typography variant="h3">Certificado Único de Discapacidad (CUD)</Typography></p>

            <p>
              <Typography variant="body1">El Certificado Único de Discapacidad (CUD) es un documento que acredita plenamente la discapacidad en todo el territorio nacional, en cualquier circunstancia en que sea necesario invocarla. Tiene igual valor que el Documento Nacional de Identidad, por lo que, ante su pérdida, debe efectuarse la denuncia inmediata.
              + Info (link?)
              </Typography>
            </p>

            <p><Typography variant="h4">Que pedimos</Typography></p>
            <p><Typography variant="body1">Adjuntar el CUD emitido por la Junta Evaluadora de Personas con Discapacidad.</Typography></p>
            <p><Typography variant="body1">...</Typography></p>
            <p><Typography variant="body1">...</Typography></p>

            <p><Typography variant="h4">Como se completa</Typography></p>
            <p><Typography variant="body1">Adjuntar el certificado (PDF).</Typography></p>
            <p><Typography variant="body1">...</Typography></p>
            <p><Typography variant="body1">...</Typography></p>


          </Paper>
        </Container>
    );
  }
  
export default WebRequisitoPage2;
