import React from 'react';
import { makeStyles, Theme, createStyles, Container, Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
        height: "100vh",
        maxWidth: "unset",
        padding: 0,
    },
    leftPanel: {
        height: "100vh",
        backgroundColor: "#0066cc",
        //backgroundImage: "url(/assets/images/Escudo_de_armas_de_Rosario.svg)",
        //backgroundRepeat: "no-repeat",
        //backgroundSize: "contain",
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    rightPanel: {
        marginTop: "20vh",
    },
  }),
);

function LoginLayout(props: any) {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Grid container spacing={0} className={classes.container}>
                <Grid item lg={4} className={classes.leftPanel}>
                    <br></br>
                    <Typography color="primary" variant="h1" style={{margin: "36pt"}}>Plataforma Ciudadana</Typography>
                </Grid>
                <Grid item lg={8} xs={12} className={classes.rightPanel}>
                    {props.children}
                </Grid>
            </Grid>
        </Container>
    )
}
  
export default LoginLayout;
