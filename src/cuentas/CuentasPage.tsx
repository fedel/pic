import React from 'react';
import { makeStyles, Theme, createStyles, Toolbar, Typography, Button, Container, Box, Grid, Hidden, TextField, IconButton } from "@material-ui/core";
import Map from "@material-ui/icons/Map";
import Folder from "@material-ui/icons/Folder";
import Help from "@material-ui/icons/Help";
import SearchIcon from "@material-ui/icons/Search";

import CuentaList from './CuentaList';
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
    },
    textSearch: {
    },
    iconButton: {

    },
  }),
);

function CuentasPage(props: any) {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Toolbar>
                <Typography component="div" variant="h5" color="inherit" noWrap className={classes.title}>
                    Tus Cuentas
                </Typography>
            </Toolbar>
            <Grid container spacing={0} direction="row-reverse">
                <Hidden smDown>
                    <Grid item md={4}>
                        <Typography component="h1" variant="h6" color="inherit" noWrap></Typography>
                        <Box>
                            <Button color="secondary" startIcon={<Map/>}>Opción rápida 1</Button>
                        </Box>
                        <Box>
                            <Button component={ RouterLink } to="/datasets/new" color="secondary" startIcon={<Folder/>}>Algo rápida 2</Button>
                        </Box>
                        <Box>
                            <Button color="secondary" startIcon={<Help/>}>Ayuda</Button>
                        </Box>
                    </Grid>
                </Hidden>
                <Grid item xs={12} md={8}>
                    {/*
                    <Container>
                        <TextField
                            className={classes.textSearch}
                            id="q"
                            type="text"
                            label="Buscar"
                        />
                        <IconButton className={classes.iconButton} color="secondary"
                                    aria-label="buscar dataset" component="span">
                            <SearchIcon/>
                        </IconButton>
                    </Container>
                    */}
                    <CuentaList/>
                </Grid>
            </Grid>
        </Container>
    );
  }
  
export default CuentasPage;
