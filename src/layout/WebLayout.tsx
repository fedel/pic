import React from 'react';
import { makeStyles, Theme, createStyles, Container, Grid, Typography, Paper, Link, Button } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {        
        padding: 0,        
    },
    container2: {
        padding: 0,
    },
    header: {
        backgroundColor: "#fff",
        height: "80px",
    },
    paper: {
      padding: theme.spacing(1),
      margin: theme.spacing(2),
    },
  }),
);

function WebLayout(props: any) {
    const classes = useStyles();

    const isLogged = window.sessionStorage.getItem("logged") === "true";

    return (
        <Container className={classes.container} maxWidth="md">
            {!isLogged && 
            <Paper className={classes.paper} elevation={0}>
                <Grid container spacing={1} className={classes.header}>
                    <Grid item xs={2}>
                        [logo]
                    </Grid>
                    <Grid item xs={8} style={{textAlign: "center"}}>
                        <Typography variant="h3">
                            <Link href="/pic">Municipalidad de Rosario</Link>
                        </Typography>
                    </Grid>
                    <Grid item xs={2} style={{textAlign: "right"}}>
                    </Grid>
                </Grid>
                {false &&
                    <Paper elevation={0}>
                        <p style={{textAlign: "center"}}>
                            <Button color="primary">Registros</Button>
                            <Button color="primary">Trámites</Button>
                            <Button color="primary">Notificaciones</Button>
                            <Button color="primary">Documentos</Button>
                            <Button color="primary">Datos Personales</Button>
                        </p>
                    </Paper>
                }
            </Paper>
            }
            
            {!isLogged && 
            <Container className={classes.container2}>
                <Paper className={classes.paper}>
                    <p><Typography color="primary" variant="h6">COVID19: Conocé los síntomas, cómo cuidarte, preguntas frecuentes, normativa relacionada.</Typography></p>
                </Paper>
            </Container>
            }

            {isLogged && 
            <Paper className={classes.paper} elevation={0}>
                <Grid container spacing={1} className={classes.header}>
                    <Grid item xs={2}>
                        rosario.gob.ar
                    </Grid>
                    <Grid item xs={8} style={{textAlign: "center"}}>
                        <Typography variant="h5">
                        Libre estacionamiento para personas con discapacidad
                        </Typography>
                    </Grid>
                    <Grid item xs={2} style={{textAlign: "right"}}>
                        <Typography variant="body1"><Link href="#">Federico Luna</Link></Typography>
                        <Typography variant="caption">Perfil</Typography>
                    </Grid>
                </Grid>
            </Paper>
            }
            {props.children}
        </Container>
    )
}
  
export default WebLayout;
