import React from 'react';
import { makeStyles, Theme, createStyles, Toolbar, Typography, Button, Container, Box, Grid, Hidden, TextField, IconButton, Paper, Icon } from "@material-ui/core";
import Map from "@material-ui/icons/Map";
import Folder from "@material-ui/icons/Folder";
import Help from "@material-ui/icons/Help";
import SearchIcon from "@material-ui/icons/Search";
import WorkIcon from "@material-ui/icons/Work";
import PersonIcon from "@material-ui/icons/Person";
import AddIcon from "@material-ui/icons/Add";


import ApoderadoList from './ApoderadoList';
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

function ApoderadosPage(props: any) {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Grid container spacing={0} direction="row-reverse">
                <Hidden smDown>
                    <Grid item md={4}>
                        <Toolbar>
                            <Typography component="div" variant="h5" color="inherit" noWrap className={classes.title}>
                                &nbsp;
                            </Typography>
                        </Toolbar>
                        <Typography component="h1" variant="h6" color="inherit" noWrap></Typography>
                        <Box>
                            <Button color="secondary" startIcon={<WorkIcon/>}>Solicitar Facultad</Button>
                        </Box>
                        <Box>
                            <Button color="secondary" startIcon={<Help/>}>Ayuda</Button>
                        </Box>
                    </Grid>
                </Hidden>

                <Grid item xs={12} md={8}>
                    <Toolbar>
                        <Typography component="div" variant="h5" color="inherit" noWrap className={classes.title}>
                            Facultades
                        </Typography>
                    </Toolbar>

                    <Container>
                        <Grid container item xs={12}>
                            <Grid item xs={2}>
                                <Button variant="contained" color="primary" startIcon={<PersonIcon/>}>Ciudadano</Button>
                            </Grid>
                            <Grid item xs={2}>
                                <Button variant="contained" color="secondary" startIcon={<PersonIcon/>}>Arquitecto</Button>
                            </Grid>
                            <Grid item xs={2}>
                                <Button variant="contained" color="secondary" startIcon={<AddIcon/>}>Solictar</Button>
                            </Grid>
                        </Grid>
                    </Container>
                    <br></br>
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
                    <ApoderadoList/>
                </Grid>
            </Grid>
        </Container>
    );
  }
  
export default ApoderadosPage;
