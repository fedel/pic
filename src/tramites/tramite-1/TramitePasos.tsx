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

function TramitePasos(props: any) {
  const classes = useStyles();

  return (
    <span>
      <p><Typography variant="h4">Pasos del trámite</Typography></p>
      <p>Esto son los todos los pasos del trámite.</p>

      <div>
        <div className={classes.step}>
          <div className={classes.stepNumber}>1</div>
          <div className={classes.stepContent}><Typography variant="h6">Login o Registrate</Typography><Link href="#">mostrar</Link></div>
        </div>
        <div className={classes.stepDivisor}></div>
        <div className={classes.step}>
          <div className={classes.stepNumber}>2</div>
          <div className={classes.stepContent}><Typography variant="h6">Para quien es el trámite</Typography><Link href="#">mostrar</Link></div>
        </div>
        <div className={classes.stepDivisor}></div>
        <div className={classes.step}>
          <div className={classes.stepNumber}>3</div>
          <div className={classes.stepContent}><Typography variant="h6">Verificación de libre de multas</Typography><Link href="#">mostrar</Link></div>
        </div>
        <div className={classes.stepDivisor}></div>
        <div className={classes.step}>
          <div className={classes.stepNumber}>4</div>
          <div className={classes.stepContent}><Typography variant="h6">Verificación de libre de deudas</Typography><Link href="#">mostrar</Link></div>
        </div>
        <div className={classes.stepDivisor}></div>
        <div className={classes.step}>
          <div className={classes.stepNumber}>5</div>
          <div className={classes.stepContent}><Typography variant="h6">Formulario de datos iniciales</Typography><Link href="#">mostrar</Link></div>
        </div>

        <div className={classes.stepDivisor}></div>
        <div className={classes.step}>
          <div className={classes.stepNumber}>7</div>
          <div className={classes.stepContent}><Typography variant="h6">Confirmación</Typography><Link href="#">mostrar</Link></div>
        </div>

        <div className={classes.stepDivisor}></div>
        <div className={classes.step}>
          <div className={classes.stepNumber}>8</div>
          <div className={classes.stepContent}><Typography variant="h6">Subir certificado único de discapacidad</Typography><Link href="#">mostrar</Link></div>
        </div>

        <div className={classes.stepDivisor}></div>
        <div className={classes.step}>
          <div className={classes.stepNumber}>9</div>
          <div className={classes.stepContent}><Typography variant="h6">Pagar</Typography><Link href="#">mostrar</Link></div>
        </div>

        <div className={classes.stepDivisor}></div>
        <div className={classes.step}>
          <div className={classes.stepNumber}>10</div>
          <div className={classes.stepContent}><Typography variant="h6">Enviar solicitud</Typography><Link href="#">mostrar</Link></div>
        </div>

      </div>
    </span>
  );
}

export default TramitePasos;
