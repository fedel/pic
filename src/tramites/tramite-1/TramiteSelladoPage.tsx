import React from 'react';
import { makeStyles, Theme, createStyles, Toolbar, Typography, Button, Container, Box, Grid, Hidden, Paper, TextField, Divider, Link, FormControl, FormLabel, FormControlLabel, Radio, RadioGroup, IconButton } from "@material-ui/core";
import { Link as RouterLink, navigate } from "@reach/router"
import { PhotoCamera } from '@material-ui/icons';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: 0,
    },
    paper: {
      padding: theme.spacing(1),
      margin: theme.spacing(2),
    },
    photo: {
      display: "none",
    },
  }),
);

function TramiteSelladoPage(props: any) {
  const classes = useStyles();

  const [titular, setTitular] = React.useState(false);
  const handleTitular = (event: React.MouseEvent) => {
    setTitular(true);
  };

  return (
    <Container className={classes.container}>
      <Paper className={classes.paper}>
        <p>
          <Typography variant="h4">Pagar sellado ...XYZ</Typography>
        </p>

        <p>
          <Typography variant="h5">Son $ 760,00</Typography>
        </p>

        <p>&nbsp;</p>

        <form noValidate autoComplete="off" >
          <FormControl component="fieldset">
            <FormLabel component="legend">Como lo pago?</FormLabel>
            <RadioGroup aria-label="titular1" name="titular1">
              <FormControlLabel value="bmr" control={<Radio />} label="Pagar OnLine con Pasarela BMR" />
              <div>Te redirijimos a la página del BMR para que pagues...<Link href="#">Pagar.</Link></div>
              <p></p>
              <FormControlLabel value="vep" control={<Radio />} label="Pagar con VEP" />
              <div>Te redirijimos a la página de la AFIP para generar un VEP...<Link href="#">Pagar.</Link></div>
              <p></p>
              <FormControlLabel value="recibo" control={<Radio />} label="Pagar con recibo en Punto de Pago" />
              <div>Podes <Link href="#">IMPRIMIR</Link> o <Link href="#">DESCARGAR</Link> el recibo</div>
            </RadioGroup>
          </FormControl>
        </form>
        <p>&nbsp;</p>
      </Paper>

      <Paper className={classes.paper}>
        <p>
          <Button variant="contained" component={RouterLink} to="/pic/tramites/tramite-1/gestion">VER SOLICITUD</Button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button color="primary" variant="contained" component={RouterLink} to="/pic/tramites/tramite-1/envio">SIGUIENTE</Button>
        </p>
      </Paper>

    </Container>

  );
}

export default TramiteSelladoPage;
