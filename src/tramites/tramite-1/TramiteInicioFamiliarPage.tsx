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

function TramiteInicioFamiliarPage1(props: any) {
  const classes = useStyles();

  const [titular, setTitular] = React.useState(false);
  const handleTitular = (event: React.MouseEvent) => {
    setTitular(true);
  };

  return (
    <Container className={classes.container}>
      <Paper className={classes.paper}>
        <p>
          <Typography variant="h4">Datos del Familiar</Typography>
        </p>
        <p>
          <Typography variant="body1">Ingresa los datos del beneficiario del trámite</Typography>
        </p>

        <form noValidate autoComplete="off" >
          <p>
            <TextField id="outlined-basic" helperText="Este campo es..." label="CUIL" variant="filled" style={{ width: "280px" }} />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <Button variant="contained" color="primary" style={{ marginTop: "8pt" }} onClick={handleTitular}>ENVIAR</Button>
          </p>
          <p>&nbsp;</p>

          {titular &&
            <FormControl component="fieldset">
              <FormLabel component="legend">Usar documento:</FormLabel>
              <RadioGroup aria-label="titular1" name="titular1">
                <FormControlLabel value="yo" control={<Radio />} label="DNI-20245868430" />
                <div>Este documento lo subiste previemente el 27/11/2019. <Link href="#">Ver documento.</Link></div>
                <p></p>
                <FormControlLabel value="familiar" control={<Radio />} label="Subir fotos del DNI" />
                  Subir las foto de frente y dorso del DNI de tu familiar
                  <p>
                  <TextField id="outlined-basic" helperText="Este campo es..." label="FOTO DEL FRENTE DEL DNI" variant="filled" style={{ width: "280px" }} />
                  <input accept="image/*" className={classes.photo} id="icon-button-file" type="file" />
                  <label htmlFor="icon-button-file">
                    <IconButton color="primary" aria-label="upload picture" component="span" size="medium">
                      <PhotoCamera />
                    </IconButton>
                  </label>
                </p>
                <p>
                  <TextField id="outlined-basic" helperText="Este campo es..." label="FOTO DE ATRAS DEL DNI" variant="filled" style={{ width: "280px" }} />
                  <input accept="image/*" className={classes.photo} id="icon-button-file" type="file" />
                  <label htmlFor="icon-button-file">
                    <IconButton color="primary" aria-label="upload picture" component="span" size="medium">
                      <PhotoCamera />
                    </IconButton>
                  </label>
                </p>

              </RadioGroup>
            </FormControl>
          }
        </form>
      </Paper>

      <Paper className={classes.paper}>
        <p>
          <Button variant="contained" component={RouterLink} to="/pic/tramites/tramite-1/inicio-titular">ANTERIOR</Button>&nbsp;&nbsp;&nbsp;&nbsp;

          {titular && <Button color="primary" variant="contained" component={RouterLink} to="/pic/tramites/tramite-1/inicio-chequeo-1">SIGUIENTE</Button>}
        </p>
      </Paper>

    </Container>

  );
}

export default TramiteInicioFamiliarPage1;
