import React from 'react';
import { makeStyles, Theme, createStyles, Toolbar, Typography, Button, Container, Box, Grid, Hidden, Paper, TextField, Divider, Link, Radio, FormControl, FormLabel, RadioGroup, FormControlLabel, Dialog, DialogTitle, DialogActions, DialogContent, Slide } from "@material-ui/core";
import { Link as RouterLink, useNavigate } from "@reach/router"
import { TransitionProps } from '@material-ui/core/transitions/transition';
import TramitePasos from './TramitePasos';

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


const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function TramiteInicioTitularPage1(props: any) {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const [titular, setTitular] = React.useState('titular');
    const navigate = useNavigate();
    
    const handleTitular = (event: React.ChangeEvent<HTMLInputElement>) => {
      setTitular((event.target as HTMLInputElement).value);
    };

    const volver = () => {
      navigate("/pic/web/tramite-1")
    };

    const siguiente = () => {
      if (titular === "yo") {
        navigate("/pic/tramites/tramite-1/inicio-titular-dni")
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
              <Typography variant="h4">Para quién es el trámite?</Typography>
              <Typography variant="body2"><Link href="#" onClick={handleClickOpen}>Paso número 2 de 10</Link></Typography>
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
              <Button color="primary" variant="contained" onClick={volver}>VOLVER</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Button color="primary" variant="contained" onClick={siguiente}>SIGUIENTE</Button>
            </p>
          </Paper>
          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogContent>
              <TramitePasos></TramitePasos>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cerrar
              </Button>
            </DialogActions>
          </Dialog>


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
