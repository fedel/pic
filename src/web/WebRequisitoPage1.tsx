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

function WebRequisitoPage1(props: any) {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
          <Paper className={classes.paper}>
            <p><Typography variant="body1">Requisitos / Requisito 1</Typography></p>
            
            <p><Typography variant="h3">Documento de Identidad del beneficiario del CUD</Typography></p>

            <p>
              <Typography variant="body1">
              </Typography>
            </p>

            <p><Typography variant="h4">Que pedimos</Typography></p>
            <p><Typography variant="body1">Presentar el Documento Nacional de Identidad del beneficiario que consta en el Certificado Unico de Discapacidad.</Typography></p>
            <p><Typography variant="body1">...</Typography></p>
            <p><Typography variant="body1">...</Typography></p>


            <p><Typography variant="h4">Como se completa</Typography></p>
            <p><Typography variant="body1">Adjuntar foto de frente y dorso del DNI.</Typography></p>
            {/* <p><Typography variant="body1">* Curso a realizar</Typography></p>
            <p><Typography variant="body1">* Posee experiencia</Typography></p>
          <p><Typography variant="body1">* Horarios cursado</Typography></p>*/}


          </Paper>
        </Container>
    );
  }
  
export default WebRequisitoPage1;
