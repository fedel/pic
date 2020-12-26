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

function TramiteInicioTitularPage1(props: any) {
    const classes = useStyles();

    const [titular, setTitular] = React.useState('titular');
    const navigate = useNavigate();
    
    const handleTitular = (event: React.ChangeEvent<HTMLInputElement>) => {
      setTitular((event.target as HTMLInputElement).value);
    };

    const siguiente = () => {
      if (titular === "yo") {
        navigate("/pic/tramites/tramite-1/inicio-chequeo-1")
      } else if (titular === "familiar") {
        navigate("/pic/tramites/tramite-1/inicio-familiar")
      } else {
        alert("No implementado")
      }
    };

    return (
        <Container className={classes.container}>
          <Paper className={classes.paper}>
            <p>
              <Typography variant="h4">Para quien es el trámite?</Typography>
            </p>
            <p>
              <Typography variant="body1">Indicar quien es el beneficiario, titular o a quien esta destinado el trámite.</Typography>
            </p>

            <div style={{paddingLeft: 16}}>
              <FormControl component="fieldset">
                <FormLabel component="legend"></FormLabel>
                <RadioGroup aria-label="titular1" name="titular1" value={titular} onChange={handleTitular}>
                  <FormControlLabel value="yo" control={<Radio />} label="Es para mí (FEDERICO LUNA, CUIL 20245868430)"/>
                  <div>Te pediremos una foto de tu DNI y deberan coincidir con tus datos de perfil <Link href="#">(ver tus datos).</Link></div>
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

            <p>
              <Button color="primary" variant="contained" onClick={siguiente}>SIGUIENTE</Button>
            </p>
          </Paper>

{
  /*

            <p>
              <Typography variant="subtitle2">Solicitante</Typography>
              <Typography variant="caption">Es la persona que interactúa con los servicios informáticos provistos por el municipio. Puede ser el mismo beneficiario, un representante legal o apoderado.</Typography>
              <Typography variant="body1">Federico Luna</Typography>
            </p>

            <p>
              <Typography variant="subtitle2">Titular/Destinatario/Beneficiario:</Typography>
              <Typography variant="caption">Es la persona destinataria del trámite,servicio o beneficio que se está gestionando.</Typography>
              <Typography variant="body1">Federico Luna 20342221110&nbsp;&nbsp;&nbsp;&nbsp;<Button variant="contained">CAMBIAR</Button></Typography>
            </p>
            <p>
              <Typography variant="caption">Contacto? </Typography>
              <Typography variant="body1">mail@gmail.com&nbsp;&nbsp;&nbsp;&nbsp;<Button variant="contained">CAMBIAR</Button></Typography>
            </p>

            <p>
              <Typography variant="subtitle2">Notificacion? </Typography>
              <Typography variant="caption">Con tu datos de notificación ...</Typography>
              <Typography variant="body1">mail@gmail.com / +54 9 3415554745&nbsp;&nbsp;&nbsp;&nbsp;<Button variant="contained">CAMBIAR</Button></Typography>
            </p>
          </Paper>

          <Paper className={classes.paper}>
            <p>
              <Typography variant="h5">Notificación ? </Typography>
            </p>
            <p>
              <Typography variant="body1">El domicil de notificación....</Typography>
            </p>

            <p>
              <Typography variant="subtitle2">email</Typography>
              <Typography variant="body1">mail@gmail.com&nbsp;&nbsp;&nbsp;&nbsp;<Button variant="contained">CAMBIAR</Button></Typography>
            </p>

            <p>
              <Typography variant="subtitle2">Teléfono</Typography>
              <Typography variant="body1">+54 9 3415554745&nbsp;&nbsp;&nbsp;&nbsp;<Button variant="contained">CAMBIAR</Button></Typography>
            </p>
          </Paper>

          <Paper className={classes.paper}>
            <p>
              <Typography variant="h5">Estado de tus multas de tránsito</Typography>
            </p>
            <p>
              <Typography variant="body1">Según nuestros registros tenés multas pendientes de juzgamiento y/o pago. Necesitas resolverlas para avanzar con este trámite&nbsp;&nbsp;&nbsp;&nbsp;<Button color="primary" variant="contained">GESTIONAR</Button></Typography>
            </p>
          </Paper>

          <Paper className={classes.paper}>
            <p>
              <Typography variant="h5">Libre Deuda</Typography>
            </p>
            <p>
              <Typography variant="body1">TIENE DEUDAS&nbsp;&nbsp;&nbsp;&nbsp;<Button color="primary" variant="contained">GESTIONAR</Button></Typography>
            </p>
          </Paper>

*/ 
}


        </Container>
    );
  }
  
export default TramiteInicioTitularPage1;
