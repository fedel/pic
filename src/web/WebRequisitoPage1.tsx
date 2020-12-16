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
            
            <p><Typography variant="h3">Requisito 1</Typography></p>

            <p>
              <Typography variant="body1">A esta especie es común verla posada sobre postes de alambrados, en lagunas de poca profundidad, siempre cerca o sobre el agua. Es un residente permanente, pudiendo algunas poblaciones migrar al norte, durante el invierno del Hemisferio Sur.
              Su dieta consiste principalmente de peces pequeños, pero también come renacuajos, ranas e insectos acuáticos. Este cormorán busca alimento zambulléndose debajo del agua, mientras se propulsa con sus patas. Suele alimentarse en grupos.
              </Typography>
            </p>

            <p><Typography variant="h4">Que pedimos</Typography></p>
            <p><Typography variant="body1">Deberas complear un formulario asi y asa para...</Typography></p>
            <p><Typography variant="body1">...</Typography></p>
            <p><Typography variant="body1">...</Typography></p>


            <p><Typography variant="h4">Como se completa</Typography></p>
            <p><Typography variant="body1">Deberas complear los siguientes campos...</Typography></p>
            <p><Typography variant="body1">* Curso a realizar</Typography></p>
            <p><Typography variant="body1">* Posee experiencia</Typography></p>
            <p><Typography variant="body1">* Horarios cursado</Typography></p>


          </Paper>
        </Container>
    );
  }
  
export default WebRequisitoPage1;
