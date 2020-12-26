import React from 'react';
import { makeStyles, Theme, createStyles, Toolbar, Typography, Button, Container, Box, Grid, Hidden, Paper, TextField, Divider, Link, Radio, FormControl, FormLabel, RadioGroup, FormControlLabel } from "@material-ui/core";
import { Link as RouterLink, useNavigate } from "@reach/router"

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
                  Podrás dar de alta el trámite pero tendremos que esperar hasta que se acredite el pago.
                  <p></p>
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
