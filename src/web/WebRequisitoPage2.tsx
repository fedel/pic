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
            
            <p><Typography variant="h3">Requisito 2</Typography></p>

            <p>
              <Typography variant="body1">A esta especie es común verla posada sobre postes de alambrados, en lagunas de poca profundidad, siempre cerca o sobre el agua. Es un residente permanente, pudiendo algunas poblaciones migrar al norte, durante el invierno del Hemisferio Sur.
              Su dieta consiste principalmente de peces pequeños, pero también come renacuajos, ranas e insectos acuáticos. Este cormorán busca alimento zambulléndose debajo del agua, mientras se propulsa con sus patas. Suele alimentarse en grupos.
              </Typography>
            </p>

            <p><Typography variant="h4">Que pedimos</Typography></p>
            <p><Typography variant="body1">Deberas adjuntar el informe anualizado de estado en la AFIP.</Typography></p>
            <p><Typography variant="body1">...</Typography></p>
            <p><Typography variant="body1">...</Typography></p>

            <p><Typography variant="h4">Como se completa</Typography></p>
            <p><Typography variant="body1">El documento se obtiene en la pagina de Afip llendo a...</Typography></p>
            <p><Typography variant="body1">...</Typography></p>
            <p><Typography variant="body1">...</Typography></p>


          </Paper>
        </Container>
    );
  }
  
export default WebRequisitoPage2;
