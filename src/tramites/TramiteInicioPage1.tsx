import React from 'react';
import { makeStyles, Theme, createStyles, Toolbar, Typography, Button, Container, Box, Grid, Hidden, Paper, TextField, Divider, Link } from "@material-ui/core";

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

function TramiteInicioPage1(props: any) {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
          <Paper className={classes.paper}>
            <p><Typography variant="body1">Seccion 1 / Sub Seccion 2 / Trámite 1 / Inicio</Typography></p>
            <p><Typography variant="h3">Trámite 1</Typography></p>
          </Paper>

          <Paper className={classes.paper}>
            <p>
              <Typography variant="h5">Titular y Solicitante</Typography>
            </p>
            <p>
              <Typography variant="body1">Verfiique los datos titular y solictatnte........</Typography>
            </p>

            <p>
              <Typography variant="subtitle2">Solicitante</Typography>
              <Typography variant="caption">El solicitante se considera que........</Typography>
              <Typography variant="body1">Federico Luna</Typography>
            </p>

            <p>
              <Typography variant="subtitle2">Titular</Typography>
              <Typography variant="caption">El titular se considera que........</Typography>
              <Typography variant="body1">Federico Luna 20342221110&nbsp;&nbsp;&nbsp;&nbsp;<Button variant="contained">Cambiar</Button></Typography>
            </p>
            <p>
              <Typography variant="caption">Contacto? </Typography>
              <Typography variant="body1">mail@gmail.com&nbsp;&nbsp;&nbsp;&nbsp;<Button variant="contained">Cambiar</Button></Typography>
            </p>

            <p>
              <Typography variant="subtitle2">Notificacion? </Typography>
              <Typography variant="caption">Con tu datos de notificación ...</Typography>
              <Typography variant="body1">mail@gmail.com / +54 9 3415554745&nbsp;&nbsp;&nbsp;&nbsp;<Button variant="contained">Cambiar</Button></Typography>
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
              <Typography variant="body1">mail@gmail.com&nbsp;&nbsp;&nbsp;&nbsp;<Button variant="contained">Cambiar</Button></Typography>
            </p>

            <p>
              <Typography variant="subtitle2">Telefono</Typography>
              <Typography variant="body1">+54 9 3415554745&nbsp;&nbsp;&nbsp;&nbsp;<Button variant="contained">Cambiar</Button></Typography>
            </p>
          </Paper>

          <Paper className={classes.paper}>
            <p>
              <Typography variant="h5">Libre Multa</Typography>
            </p>
            <p>
              <Typography variant="body1">TIENE MULTAS&nbsp;&nbsp;&nbsp;&nbsp;<Button color="primary" variant="contained">Gestionar</Button></Typography>
            </p>
          </Paper>

          <Paper className={classes.paper}>
              <p>
                <Typography variant="h5">Datos Iniciales</Typography>
              </p>
              <p>
                <Typography variant="body1">Estos datos son necesarios para....</Typography>
              </p>
              <form noValidate autoComplete="off" >
                <p>
                <TextField id="outlined-basic" helperText="Este campo es..." label="Campo 1" variant="filled" style={{width: "280px"}}/>
                </p>
                <p>
                <TextField id="outlined-basic" helperText="Este campo es..." label="Campo 2" variant="filled" style={{width: "280px"}}/>
                </p>
                <p>
                <TextField id="outlined-basic" helperText="Este campo es..." label="Campo 3" variant="filled" style={{width: "280px"}}/>
                </p>

              </form>
          </Paper>

          <Paper className={classes.paper}>
              <p>
                <Typography variant="h5">Inciar Trámite / Solicitud</Typography>
              </p>
              <p>
                <Typography variant="body1">Verfique sus datos y envie la solicitud para....</Typography>
              </p>
              <p>
                <Button color="primary" variant="contained">Iniciar Trámite / Solicitud</Button>
              </p>

          </Paper>



        </Container>

    );
  }
  
export default TramiteInicioPage1;
