import React from 'react';
import { makeStyles, Theme, createStyles, Toolbar, Typography, Button, Container, Box, Grid, Hidden, Paper, TextField, Divider, Link } from "@material-ui/core";
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

function TramiteInicioDatosPage1(props: any) {
    const classes = useStyles();

    return (
        <Container className={classes.container}>

          <Paper className={classes.paper}>
              <p>
                <Typography variant="h4">Datos Iniciales</Typography>
              </p>
              
              <Typography variant="body1">
                <p>
                    Perfecto FEDERICO LUNA, ya hemos creado el trámite para ...., ahora completa los datos que te solicitamos. 
                </p>
                <p>
                    Puedes realizarlo ahora o luego con el código de gestión <b>2021/1492</b> ingresando tu usuario en la página de <Link href="/pic#mis-gestiones">rosario.gob.ar</Link>
                </p>
                <p>
                  Completa los siguientes datos...
                </p>
              </Typography>

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
                <p>
                <TextField id="outlined-basic" helperText="Este campo es..." label="Campo 4" variant="filled" style={{width: "280px"}}/>
                </p>
              </form>
          </Paper>

          <Paper className={classes.paper}>
              <p>
                <Button variant="contained" component={RouterLink} to="/pic/app/destionarario">ANTERIOR</Button>&nbsp;&nbsp;&nbsp;&nbsp;
                <Button color="primary" variant="contained" component={RouterLink} to="/pic/tramites/tramite-1/gestion">SIGUIENTE</Button>
              </p>
          </Paper>

        </Container>

    );
  }
  
export default TramiteInicioDatosPage1;
