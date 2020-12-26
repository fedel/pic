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

function TramiteInicioChequeosPage(props: any) {
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
          <Typography variant="h4">Verificación de deudas</Typography>
        </p>

        <p>
          <Typography variant="body1">Según nuestros registros <b>EXISTEN DEUDAS</b> pendientes.</Typography>
        </p>

        <div style={{ paddingLeft: 16 }}>
          <FormControl component="fieldset">
            <FormLabel component="legend"></FormLabel>
            <RadioGroup aria-label="titular1" name="titular1" value={change} onChange={handleChange}>
              <FormControlLabel value="gestionar" control={<Radio />} label="Gestionar tus deudas" />
              <div>Sigue el enlace para <Link href="#">gestionar tus deudas.</Link></div>
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
          {change === "yapague" && <Button color="primary" variant="contained" component={RouterLink} to="/pic/tramites/tramite-1/inicio-datos">SIGUIENTE</Button>}
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
      
      
      */
      }


    </Container>
  );
}

export default TramiteInicioChequeosPage;
