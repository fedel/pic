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

function TramiteGestionPage1(props: any) {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
          <Paper className={classes.paper}>
            <p><Typography variant="h3">Trámite 1 (TODO)</Typography></p>
            <p><Typography variant="body1">Este trámite....</Typography></p>

            <p>
              <Typography variant="h4">Documentos</Typography>
            </p>
            <Typography variant="body1">

              <Divider></Divider>
              (ejemplo documentos por completar)
              <br></br>

              <Grid container spacing={2}>
                <Grid item xs={9}><Link href="#">* Datos iniciales</Link></Grid>
                <Grid item xs={3}>COMPLETAR</Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={9}><Link href="#">* Documento de Identidad del beneficiario del CUD.</Link></Grid>
                <Grid item xs={3}>COMPLETAR</Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={9}><Link href="#">* Certificado Único de Discapacidad (CDU) emitido por la Junta Evaluadora de Discapacidad.</Link></Grid>
                <Grid item xs={3}>COMPLETAR</Grid>
              </Grid>
              <p>
              <Button variant="contained" color="primary" disabled component={RouterLink} to="/pic/tramites/tramite-1/envio">PARA ENVIAR COMPLETA LOS DOCUMENTOS</Button>&nbsp;&nbsp;&nbsp;&nbsp;
              </p>
              <br></br>

              <Divider></Divider>
              (ejemplo documentos completos falta enviar)
              <br></br>

              <Grid container spacing={2}>
                <Grid item xs={9}><Link href="#">* Datos iniciales</Link></Grid>
                <Grid item xs={3}>COMPLETO</Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={9}><Link href="#">* Documento de Identidad del beneficiario del CUD.</Link></Grid>
                <Grid item xs={3}>COMPLETO</Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={9}><Link href="#">* Certificado Único de Discapacidad (CDU) emitido por la Junta Evaluadora de Discapacidad.</Link></Grid>
                <Grid item xs={3}>COMPLETO</Grid>
              </Grid>
              <p>
              <Button variant="contained" color="primary" component={RouterLink} to="/pic/tramites/tramite-1/envio">ENVIAR SOLICITUD</Button>&nbsp;&nbsp;&nbsp;&nbsp;
              </p>
              <br></br>

              <Divider></Divider>
              (ejemplo documentos enviados, solicitud presentada)
              <br></br>
              <Grid container spacing={2}>
                <Grid item xs={9}><Link href="#">* Otro documento A de ejemplo 1</Link></Grid>
                <Grid item xs={3}>ENVIADO</Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={9}><Link href="#">* Otro documento B de ejemplo 1</Link></Grid>
                <Grid item xs={3}>ENVIADO</Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={9}><Link href="#">* Otro documento C de ejemplo 1</Link></Grid>
                <Grid item xs={3}>ENVIADO</Grid>
              </Grid>
              <p>
              <Button variant="contained" color="primary" disabled component={RouterLink} to="/pic/tramites/tramite-1/envio">ESTAMOS ANALIZANDO LA SOLICITUD</Button>&nbsp;&nbsp;&nbsp;&nbsp;
              </p>

              <br></br>
              <Divider></Divider>
              (ejemplo documentos observados)
              <br></br>
              <Grid container spacing={2}>
                <Grid item xs={9}><Link href="#">* Otro documento A de ejemplo 2</Link></Grid>
                <Grid item xs={3}>ENVIADO</Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={9}><Link href="#">* Otro documento B de ejemplo 2</Link></Grid>
                <Grid item xs={3}>ENVIADO</Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={9}><Link href="#">* Otro documento C de ejemplo 2</Link></Grid>
                <Grid item xs={3}>OBSERVADO</Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={9}><Link href="#">* Otro documento C de ejemplo 2</Link></Grid>
                <Grid item xs={3}>COMPLETAR</Grid>
              </Grid>

              <p>
              <Button variant="contained" color="primary" disabled component={RouterLink} to="/pic/tramites/tramite-1/envio">TENES QUE COMPLETAR DOCUMENTOS CORREGIDOS</Button>&nbsp;&nbsp;&nbsp;&nbsp;
              </p>

              <br></br>
              <Divider></Divider>
              (ejemplo documentos corregidos)
              <br></br>
              <Grid container spacing={2}>
                <Grid item xs={9}><Link href="#">* Otro documento A de ejemplo 2</Link></Grid>
                <Grid item xs={3}>ENVIADO</Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={9}><Link href="#">* Otro documento B de ejemplo 2</Link></Grid>
                <Grid item xs={3}>ENVIADO</Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={9}><Link href="#">* Otro documento C de ejemplo 2</Link></Grid>
                <Grid item xs={3}>OBSERVADO</Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={9}><Link href="#">* Otro documento C de ejemplo 2</Link></Grid>
                <Grid item xs={3}>COMPLETO</Grid>
              </Grid>

              <p>
              <Button variant="contained" color="primary" component={RouterLink} to="/pic/tramites/tramite-1/envio">ENVIAR CORRECCIONES</Button>&nbsp;&nbsp;&nbsp;&nbsp;
              </p>



            </Typography>

            <p><Typography variant="h4">Datos del Trámite</Typography></p>

            <p>
              ...
            </p>

            <p>
              <Typography variant="h4">Certificados Emitidos</Typography>
            </p>

            <p>
              Aun no hay certificados emitios para este trámite.
            </p>
          </Paper>


        </Container>

    );
  }
  
export default TramiteGestionPage1;
