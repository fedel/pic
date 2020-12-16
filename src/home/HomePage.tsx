import React from 'react';
import { makeStyles, Theme, createStyles, Toolbar, Typography, Button, Container, Box, Grid, Hidden } from "@material-ui/core";
import Map from "@material-ui/icons/Map";
import Folder from "@material-ui/icons/Folder";
import Help from "@material-ui/icons/Help";
import RecentList from './RecentList';
import { Link as RouterLink, navigate } from "@reach/router"


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        display: 'flex',
    },
    title: {
        flexGrow: 1,
    },
    container: {
        padding: 0,
    }
  }),
);

function HomePage(props: any) {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Toolbar>
                <Typography component="div" variant="h4" color="inherit" noWrap className={classes.title}>
                    Cuentas, Licencias y Servicios
                </Typography>
            </Toolbar>
            <Grid container spacing={0} direction="row-reverse">
                <Hidden smDown>
                    <Grid item md={4}>
                        <Typography component="h1" variant="h6" color="inherit" noWrap></Typography>
                        <Box>
                            <Button  startIcon={<Map/>}>Opción rápida 1</Button>
                        </Box>
                        <Box>
                            <Button component={ RouterLink } to="/datasets/new"  startIcon={<Folder/>}>Algo rápida 2</Button>
                        </Box>
                        <Box>
                            <Button  startIcon={<Help/>}>Ayuda</Button>
                        </Box>
                    </Grid>
                </Hidden>
                <Grid item xs={12} md={8}>
                    <RecentList/>
                </Grid>
            </Grid>
        </Container>
    );
  }
  
export default HomePage;
