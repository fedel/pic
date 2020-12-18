import React from 'react';
import { makeStyles, Theme, createStyles, Container, Grid, Typography, Link } from "@material-ui/core";
import { Link as RouterLink, navigate } from "@reach/router"
import { Widgets } from '@material-ui/icons';

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

    function modoWeb() {
        window.sessionStorage.setItem("mode", "web");
        window.location.reload();
    }

    return (
        <Container className={classes.container}>
            <Grid container spacing={0} className={classes.container}>
                <Grid item lg={4} className={classes.leftPanel}>
                    <br></br>
                    <Typography variant="h1" style={{margin: "36pt"}}>Plataforma Ciudadana</Typography>
                    <br></br>
                    <Typography variant="h1" style={{margin: "36pt"}}><Link color="secondary" onClick={modoWeb}>Web</Link></Typography>
                </Grid>
                <Grid item lg={8} xs={12} className={classes.rightPanel}>
                    {props.children}
                </Grid>
            </Grid>
        </Container>
    )
}
  
export default LoginLayout;
