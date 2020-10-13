import React from 'react';
import { makeStyles, Theme, createStyles, Toolbar, Typography, Button, Container, Box, Grid, Hidden, TextField, IconButton, Paper, Radio, Divider } from "@material-ui/core";
import Map from "@material-ui/icons/Map";
import Folder from "@material-ui/icons/Folder";
import Help from "@material-ui/icons/Help";
import SearchIcon from "@material-ui/icons/Search";

import CuentaList from './CuentaList';
import { Link, Link as RouterLink, navigate } from "@reach/router"


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
        smOff: {
            [theme.breakpoints.down('xs')]: {
                display: "none",
            },
        },
        xsOnly: {
            display: "none",
            [theme.breakpoints.down('xs')]: {
                display: "block",
            },
        }

    }),
);


interface AtributoPic {
    codigo: string,
    seccion: "Objeto" | "Relacion" | "Saldos",
    icon: string,
    titulo: string,
    valor: string,
    subvalor: string,
    // otros
}

interface AccionPic {
    codigo: string,
    titulo: string,
    icon: string,
    seccion: "Objeto" | "Relacion" | "Saldos",
    // otros
}

interface SaldoPic {
    cuenta: string,
    items: SaldoItemPic[],
}

interface SaldoItemPic {
    codigo: string,
    titulo: string,
    subtitulo: string,
    descripcion: string,
    saldo: string,
    vencimiento: string,
}

interface ObjetoPic {
    tipo: string,
    icon: string,
    titulo: string,
    domicilio: string,
    subtitulo: string,
    titular: string,
    saldo: string,

    atributos: AtributoPic[],
    acciones: AccionPic[],
}


function EjemploOPTgi(props: any) {
    const classes = useStyles();

    return (
        <Paper>
            <Toolbar>
                <Typography variant="h5" className={classes.title}>Opciones de Pagos</Typography>
            </Toolbar>

            <Paper>
                <Container>
                    <Grid container spacing={0}>
                        <Grid item xs={1}>
                            <Radio
                                checked={true}
                                value="a"
                                name="radio-button-demo"
                            />
                        </Grid>
                        <Grid item xs={9} sm={8} md={6}>
                            <p style={{ marginTop: 10 }}><Typography variant="body1" color="secondary"><b>PAGAR SALDO COMPLETO</b></Typography></p>
                            <p className={classes.xsOnly} style={{ marginTop: 4 }}><Typography variant="h6">603,34&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button variant="contained" color="secondary">Pagar ...</Button></Typography></p>
                            <p style={{ margin: 0 }}><Typography variant="body1">Paga todas las deudas pendientes de la cuenta.</Typography></p>
                            <p style={{ margin: 0 }}><Typography variant="body1"><Link to="">Ver detalle</Link></Typography></p>
                        </Grid>
                        <Grid item sm={2} className={classes.smOff}>
                            <p style={{ marginTop: 4 }}><Typography variant="h6">403,14</Typography></p>
                            <p></p>
                        </Grid>
                    </Grid>
                </Container>

                <p></p>
                <Container>
                    <Grid container spacing={0}>
                        <Grid item xs={1}>
                            <Radio
                                checked={false}
                                value="a"
                                name="radio-button-demo"
                            />
                        </Grid>
                        <Grid item xs={9} sm={8} md={6}>
                            <p style={{ marginTop: 10 }}><Typography variant="body1" color="secondary"><b>PAGAR SOLO DEUDA VENCIDA</b></Typography></p>
                            <p className={classes.xsOnly} style={{ marginTop: 4 }}><Typography variant="h6">403,14&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button variant="contained" color="secondary">Pagar ...</Button></Typography></p>
                            <p style={{ margin: 0 }}><Typography variant="body1">Paga todas las deudas que ya estan vencidas.</Typography></p>
                            <p style={{ margin: 0 }}><Typography variant="body1"><Link to="">Ver detalle</Link></Typography></p>
                        </Grid>
                        <Grid item xs={2} className={classes.smOff}>
                            <p style={{ marginTop: 4 }}><Typography variant="h6">403,14</Typography></p>
                            <p></p>
                        </Grid>
                    </Grid>
                </Container>

                <p></p>
                <Container>
                    <Grid container spacing={0}>
                        <Grid item xs={1}>
                            <Radio
                                checked={false}
                                value="a"
                                name="radio-button-demo"
                            />
                        </Grid>
                        <Grid item xs={9} sm={8} md={6}>
                            <p style={{ marginTop: 10 }}><Typography variant="body1" color="secondary"><b>REALIZAR CONVENIO</b></Typography></p>
                            <p className={classes.xsOnly} style={{ marginTop: 4 }}><Typography variant="h6">403,14&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button variant="contained" color="secondary">Pagar ...</Button></Typography></p>
                            <p style={{ margin: 0 }}><Typography variant="body1">Realizar un convenio y pagar en cuotas la deuda antigua.</Typography></p>
                            <p style={{ margin: 0 }}><Typography variant="body1"><Link to="">Ver detalle de las cuotas</Link></Typography></p>
                        </Grid>
                        <Grid item xs={2} className={classes.smOff}>
                            <p style={{ marginTop: 4 }}><Typography variant="h6">403,14</Typography> <Typography variant="body2">6 Cuotas de 103,78</Typography></p>
                            <p></p>
                        </Grid>
                    </Grid>
                </Container>

                <p></p>
                <Container>
                    <Grid container spacing={0}>
                        <Grid item xs={1}>
                            <Radio
                                checked={false}
                                value="a"
                                name="radio-button-demo"
                            />
                        </Grid>
                        <Grid item xs={9} sm={8} md={6}>
                            <p style={{ marginTop: 10 }}><Typography variant="body1" color="secondary"><b>PAGO ANTICIPADO</b></Typography></p>
                            <p className={classes.xsOnly} style={{ marginTop: 4 }}><Typography variant="h6">6204,14&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button variant="contained" color="secondary">Pagar ...</Button></Typography></p>
                            <p style={{ margin: 0 }}><Typography variant="body1">Pagar por adelantado el resto del año con un descuento.</Typography></p>
                            <p style={{ margin: 0 }}><Typography variant="body1"><Link to="">Ver detalle</Link></Typography></p>
                        </Grid>
                        <Grid item xs={2} className={classes.smOff}>
                            <p style={{ marginTop: 4 }}><Typography variant="h6">6203,14</Typography><Typography variant="body2"><del>6804,23</del></Typography></p>
                            <p></p>
                        </Grid>
                    </Grid>
                </Container>
                <p>&nbsp;</p>
            </Paper>
        </Paper>
    )
}


function EjemploOPConvenio(props: any) {
    const classes = useStyles();

    return (
        <Paper>
            <Toolbar>
                <Typography variant="h5" className={classes.title}>Opciones de Pagos</Typography>
            </Toolbar>

            <Paper>
                <Container>
                    <Grid container spacing={0}>
                        <Grid item xs={1}>
                            <Radio
                                checked={true}
                                value="a"
                                name="radio-button-demo"
                            />
                        </Grid>
                        <Grid item xs={9} sm={8} md={6}>
                            <p style={{ marginTop: 10 }}><Typography variant="body1" color="secondary"><b>PAGAR PENDIENTE AL DÍA DE HOY</b></Typography></p>
                            <p className={classes.xsOnly} style={{ marginTop: 4 }}><Typography variant="h6">401,20&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button variant="contained" color="secondary">Pagar ...</Button></Typography></p>
                            <p style={{ margin: 0 }}><Typography variant="body1">Paga todas las cuotas atrasadas y la del periodo acutal.</Typography></p>
                            <p style={{ margin: 0 }}><Typography variant="body1"><Link to="">Ver detalle</Link></Typography></p>
                        </Grid>
                        <Grid item xs={2} className={classes.smOff}>
                            <p style={{ marginTop: 4 }}><Typography variant="h6">401,20</Typography></p>
                            <p><Button variant="contained" color="secondary">Pagar ...</Button></p>
                        </Grid>
                    </Grid>
                </Container>

                <p></p>
                <Container>
                    <Grid container spacing={0}>
                        <Grid item xs={1}>
                            <Radio
                                checked={false}
                                value="a"
                                name="radio-button-demo"
                            />
                        </Grid>
                        <Grid item xs={9} sm={8} md={6}>
                            <p style={{ marginTop: 10 }}><Typography variant="body1" color="secondary"><b>PAGAR CUOTAS ATRASADAS</b></Typography></p>
                            <p className={classes.xsOnly} style={{ marginTop: 4 }}><Typography variant="h6">363,14&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button variant="contained" color="secondary">Pagar ...</Button></Typography></p>
                            <p style={{ margin: 0 }}><Typography variant="body1">Paga todas las cuptas que ya estan vencidas.</Typography></p>
                            <p style={{ margin: 0 }}><Typography variant="body1"><Link to="">Ver detalle</Link></Typography></p>
                        </Grid>
                        <Grid item xs={2} className={classes.smOff}>
                            <p style={{ marginTop: 4 }}><Typography variant="h6">363,14</Typography></p>
                            <p></p>
                        </Grid>
                    </Grid>
                </Container>
                <p>&nbsp;</p>
            </Paper>
        </Paper>
    )
}


function CuentaPage(props: any) {
    const classes = useStyles();

    const opic = props.location.state.cuenta as ObjetoPic;
    opic.acciones = opic.acciones || [];
    opic.atributos = opic.atributos || [];
    console.log("acciones", opic.acciones)

    return (
        <Container className={classes.container}>
            <br></br>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Paper style={{height: "100%"}}>
                            <Toolbar>
                                <Typography variant="h5" className={classes.title}>Objeto</Typography>
                            </Toolbar>
                            <Container>
                                <p><b>{opic.subtitulo}</b></p>
                                <p><b>Cuenta:</b> {opic.titulo}</p>
                                <p><b>Domicilio:</b> {opic.domicilio}</p>
                                <p><b>Titular:</b> {opic.titular}</p>
                            </Container>

                            <Container>
                                <p style={{ textAlign: "right" }}>
                                    {opic.acciones.filter(accion => accion.seccion === "Objeto").map(accion =>
                                        <span>
                                            <Button variant="outlined" color="secondary" style={{ marginBottom: 18, marginRight: 18 }}>{accion.titulo}</Button>
                                        </span>
                                    )}
                                </p>
                            </Container>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper style={{height: "100%"}}>
                            <Toolbar>
                                <Typography variant="h5" className={classes.title}>Relación</Typography>
                            </Toolbar>
                            <Container>
                                {opic.atributos.filter(accion => accion.seccion === "Relacion").map(attr =>
                                    <p><b>{attr.titulo}:</b> {attr.valor} {attr.subvalor}</p>
                                )}
                            </Container>
                            <Container>
                                <p style={{ textAlign: "right" }}>
                                    {opic.acciones.filter(accion => accion.seccion === "Relacion").map(accion =>
                                        <span>
                                            <Button variant="outlined" color="secondary" style={{ marginBottom: 18, marginRight: 18 }}>{accion.titulo}</Button>
                                        </span>
                                    )}
                                </p>
                            </Container>
                        </Paper>
                    </Grid>
                </Grid>

                <br></br>
                {opic.titulo.startsWith("TGI") && <EjemploOPTgi />}
                {opic.titulo.startsWith("CVP") && <EjemploOPConvenio />}

            </Container>



            <Paper>
            </Paper>

        </Container>
    );
}

export default CuentaPage;
