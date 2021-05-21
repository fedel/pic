import React from 'react';
import { makeStyles, Theme, createStyles, Toolbar, Typography, Button, Container, Box, Grid, Hidden, Paper, TextField, Divider, Link, FormControl, FormLabel, FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
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
  }),
);

function TramiteInicioDestinatarioPage1(props: any) {
    const classes = useStyles();

    const [titular, setTitular] = React.useState('yo');
    
    const handleTitular = (event: React.ChangeEvent<HTMLInputElement>) => {
      setTitular((event.target as HTMLInputElement).value);
    };

    return (
        <Container className={classes.container}>

          <Paper className={classes.paper}>
          <p>
              <Typography variant="h4">Para quién es la gestión?</Typography>
            </p>
            <p>
              <Typography variant="body1">Indicar quien es el beneficiario, titular o a quien esta destinado el trámite o gestión que esta por comenzar.</Typography>
            </p>

            <div style={{paddingLeft: 16}}>
              <FormControl component="fieldset">
                <FormLabel component="legend"></FormLabel>
                <RadioGroup aria-label="titular1" name="titular1" value={titular} onChange={handleTitular}>
                  
                  <FormControlLabel value="yo" control={<Radio />} label="Es para mí (FEDERICO LUNA, CUIL 20245868430)"/>
                  <div>Tal vez te pediremos una foto de tu DNI y deben coincidir con los datos de perfil<Link href="#">(ver tus datos).</Link></div>
                  <p></p>
                  
                  <FormControlLabel value="familiar" control={<Radio />} label="Es para un familiar" />
                  Te pediremos una foto del DNI de tu familiar
                  <p></p>
                  
                  <FormControlLabel value="apoderado" control={<Radio />} label="Es para un apoderado" />
                  Te pediremos...
                  <p></p>
                  
                </RadioGroup>
              </FormControl>
            </div>
          </Paper>

          <Paper className={classes.paper}>
              <p>
                <Button variant="contained" component={RouterLink} to="/pic">ANTERIOR</Button>&nbsp;&nbsp;&nbsp;&nbsp;
                <Button color="primary" variant="contained" component={RouterLink} to="/pic/tramites/tramite-1/inicio-datos">SIGUIENTE</Button>
              </p>
          </Paper>

        </Container>

    );
  }
  
export default TramiteInicioDestinatarioPage1;
