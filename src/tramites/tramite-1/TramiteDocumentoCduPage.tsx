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

function TramiteDocumentoCduPage1(props: any) {
  const classes = useStyles();

  const [titular, setTitular] = React.useState(false);
  const handleTitular = (event: React.MouseEvent) => {
    setTitular(true);
  };

  return (
    <Container className={classes.container}>
      <Paper className={classes.paper}>
        <p>
          <Typography variant="h4">Certificado de discapacidad único</Typography>
        </p>

        <p>
          <Typography variant="body1">Es certificado que otorga.... Ver la guia de <Link href="#">como se obtiene.</Link></Typography>
        </p>

        <p>&nbsp;</p>

        <form noValidate autoComplete="off" >
          <FormControl component="fieldset">
            <FormLabel component="legend">Que documento querés usar?</FormLabel>
            <RadioGroup aria-label="titular1" name="titular1">
              <FormControlLabel value="yo" control={<Radio />} label="Uno que ya subí" />
              <div>Este documento lo subiste previemente el 27/07/2020 con nombre CDU-20245868430. <Link href="#">Ver documento.</Link></div>
              <p></p>
              <FormControlLabel value="familiar" control={<Radio />} label="Subir una copia nueva" />
              <div>Buscar el archivo en mi dispositivo y <Link href="#">SUBIR DOCUMENTACIÓN.</Link></div>
            </RadioGroup>
          </FormControl>
        </form>
        <p>&nbsp;</p>
      </Paper>

      <Paper className={classes.paper}>
        <p>
          <Button variant="contained" component={RouterLink} to="/pic/tramites/tramite-1/gestion">VER TRÁMITE</Button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button color="primary" variant="contained" component={RouterLink} to="/pic/tramites/tramite-1/sellado">SIGUIENTE</Button>
        </p>
      </Paper>

    </Container>

  );
}

export default TramiteDocumentoCduPage1;
