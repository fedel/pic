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

function WebTramitePage1(props: any) {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
          <Paper className={classes.paper}>
            <p><Typography variant="body1">Seccion 1 / Sub Seccion 2 / Trámite 1</Typography></p>
            
            <p><Typography variant="h3">Trámite 1</Typography></p>

            <p>
              <Typography variant="body1">A esta especie es común verla posada sobre postes de alambrados, en lagunas de poca profundidad, siempre cerca o sobre el agua. Es un residente permanente, pudiendo algunas poblaciones migrar al norte, durante el invierno del Hemisferio Sur.
              Su dieta consiste principalmente de peces pequeños, pero también come renacuajos, ranas e insectos acuáticos. Este cormorán busca alimento zambulléndose debajo del agua, mientras se propulsa con sus patas. Suele alimentarse en grupos.
              </Typography>
            </p>

            <p>
              <Button color="primary" variant="contained" href="/web/login">COMENZAR TRÁMITE</Button>
            </p>

            <p><Typography variant="h4">Pasos previos</Typography></p>
            <p><Typography variant="body1">Para comenzar el trámite te solicitaremos</Typography></p>
            <div style={{paddingLeft: 16}}>
            <p><Typography variant="body1"><Link href="/web/tramite-1/datos-inicio">* Completar datos de inicio</Link></Typography></p>
            <p><Typography variant="body1"><Link href="/web/libre-multa">* Libre de Multas</Link></Typography></p>
            </div>

            <p><Typography variant="h4">Que te pedimos</Typography></p>
            <p><Typography variant="body1">Estos son los documentos o formulario que deberas completar.</Typography></p>
            <div style={{paddingLeft: 16}}>
            <p><Typography variant="body1"><Link href="/web/requisito-1">*  1</Link></Typography></p>
            <p><Typography variant="body1"><Link href="/web/requisito-2">*  2</Link></Typography></p>
            <p><Typography variant="body1"><Link href="/web/requisito-3">*  3</Link></Typography></p>
            <p><Typography variant="body1"><Link href="/web/requisito-4">*  4</Link></Typography></p>
            <p><Typography variant="body1"><Link href="/web/requisito-5">*  5</Link></Typography></p>
            <p><Typography variant="body1"><Link href="/web/requisito-6">*  6</Link></Typography></p>
            </div>

            <p><Typography variant="h4">Cuanto Sale</Typography></p>
            <div style={{paddingLeft: 16}}>
            <p><Typography color="primary" variant="h5">$ 1.460,00</Typography></p>
            </div>
            <p><Typography variant="body1">Una vez iniciado trámite deberas pagar el sellado para poder presentar el trámite.</Typography></p>
            <p><Typography variant="body1">Lo podrás pagar usando <strong>Puntos de Cobro, Pasarela Banco Municipal, VEP, ....</strong></Typography></p>

            <p><Typography variant="h4">Area Responsable (vale la pena?) </Typography></p>
            <div style={{paddingLeft: 16}}>
            <p><Typography variant="body1">* Area xyz de la direccion de xyz</Typography></p>
            </div>

          </Paper>
        </Container>
    );
  }
  
export default WebTramitePage1;
