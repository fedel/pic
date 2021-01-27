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

    return (
        <Container className={classes.container} maxWidth="md">
            
            <Paper className={classes.paper} elevation={0}>
                <Grid container spacing={1} className={classes.header}>
                    <Grid item xs={2}>
                        rosario.gob.ar
                    </Grid>
                    <Grid item xs={8} style={{textAlign: "center"}}>
                        <Typography variant="h5">
                        ...
                        </Typography>
                    </Grid>
                    
                    {props.logged && 
                    <Grid item xs={2} style={{textAlign: "right"}}>
                        <Typography variant="body1"><Link href="#">Federico Luna</Link></Typography>
                        <Typography variant="caption">Perfil</Typography>
                    </Grid>
                    }
                    {!props.logged && 
                    <Grid item xs={2} style={{textAlign: "right"}}>
                        <Typography variant="body1"><Link href="#">Registrate</Link></Typography>
                        <br></br>
                        <Typography variant="body1"><Link href="#">Login</Link></Typography>
                    </Grid>
                    }
                </Grid>
            </Paper>

            <Container className={classes.container2}>
                <Paper className={classes.paper}>
                    <p><Typography color="primary" variant="h6">COVID19: Conocé los síntomas, cómo cuidarte, preguntas frecuentes, normativa relacionada.</Typography></p>
                    
                    {props.logged &&
                        <span>
                            <p><Typography color="primary" variant="body1"><Link href="#">{'=>'} El trámite 23234/2021 ha cambiado. Ingresa para ver los cambios.</Link></Typography></p>
                            <p><Typography color="primary" variant="body1"><Link href="#">{'=>'} Tu licencia de conducir esta por vencer. Ingresa aquí para renovarla.</Link></Typography></p>
                            <p><Link>Ver Todos...</Link></p>
                        </span>
                    }

                </Paper>
            </Container>

            { props.children }
        </Container>
    )
}
  
export default WebLayout;
