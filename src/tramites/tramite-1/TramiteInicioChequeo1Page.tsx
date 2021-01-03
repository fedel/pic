import React from 'react';
import { makeStyles, Theme, createStyles, Toolbar, Typography, Button, Container, Box, Grid, Hidden, Paper, TextField, Divider, Link, Radio, FormControl, FormLabel, RadioGroup, FormControlLabel, IconButton } from "@material-ui/core";
import { Link as RouterLink, useNavigate } from "@reach/router"
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

function TramiteInicioChequeo1Page(props: any) {
  const classes = useStyles();

  const [change, setChange] = React.useState('gestiona');
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChange((event.target as HTMLInputElement).value);
  };

  const siguiente = () => {
    if (change === "yo") {
      navigate("/pic/tramites/tramite-1/inicio-chequeos")
    } else if (change === "familiar") {
      navigate("/pic/tramites/tramite-1/inicio-familiar")
    } else {
      alert("No implementado")
    }
  };

  return (
    <Container className={classes.container}>
      <Paper className={classes.paper}>
        <p>
          <Typography variant="h4">Verificación de multas</Typography>
          <Typography variant="body2"><Link href="#">Paso número ...</Link></Typography>
        </p>

        <p>
          <Typography variant="body1">Según nuestros registros <b>EXISTEN MULTAS</b> pendientes de juzgamiento y/o pago.</Typography>
        </p>

        <div style={{ paddingLeft: 16 }}>
          <FormControl component="fieldset">
            <FormLabel component="legend"></FormLabel>
            <RadioGroup aria-label="titular1" name="titular1" value={change} onChange={handleChange}>
              <FormControlLabel value="gestionar" control={<Radio />} label="Gestionar tus infracciones" />
              <div>Sigue el enlace para <Link href="#">gestionar tus multas.</Link></div>
              <p></p>
              <FormControlLabel value="yapague" control={<Radio />} label="La pagué recientemente" />
                  <div>Podrás dar de alta el trámite pero tendras que esperar hasta que verifiquemos tus datos.</div>
                  <p>
                  <TextField id="outlined-basic" helperText="Este campo es..." label="FOTO DEL COMPROBANTE" variant="filled" style={{ width: "280px" }} />
                  <input accept="image/*" className={classes.photo} id="icon-button-file" type="file" />
                  <label htmlFor="icon-button-file">
                    <IconButton color="primary" aria-label="upload picture" component="span" size="medium">
                      <PhotoCamera />
                    </IconButton>
                  </label>
                </p>

            </RadioGroup>
          </FormControl>
        </div>
      </Paper>

      <Paper className={classes.paper}>
        <p>
          <Button variant="contained" component={RouterLink} to="/pic/tramites/tramite-1/inicio-titular">ANTERIOR</Button>&nbsp;&nbsp;&nbsp;&nbsp;
          
          {change === "yapague" && <Button color="primary" variant="contained" component={RouterLink} to="/pic/tramites/tramite-1/inicio-chequeo-2">SIGUIENTE</Button> }
        </p>
      </Paper>
    </Container>
  );
}

export default TramiteInicioChequeo1Page;
