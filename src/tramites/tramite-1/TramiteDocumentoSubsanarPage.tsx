import React from 'react';
import { makeStyles, Theme, createStyles, Toolbar, Typography, Button, Container, Box, Grid, Hidden, Paper, TextField, Divider, Link, FormControl, FormLabel, FormControlLabel, Radio, RadioGroup, IconButton } from "@material-ui/core";
import { Link as RouterLink, navigate, useLocation } from "@reach/router"
import { CloudUpload } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: 0,
    },
    paper: {
      padding: theme.spacing(1),
      margin: theme.spacing(2),
    },
    photo: {
      display: "none",
    },
  }),
);

function TramiteDocumentoSubsanarPage(props: any) {
  const classes = useStyles();
  const location = useLocation();
  const esSubsanar = location.search.indexOf("subsanar") >= 0;
  const [titular, setTitular] = React.useState(false);

  const handleTitular = (event: React.MouseEvent) => {
    setTitular(true);
  };

  return (
    <Container className={classes.container}>
      <Paper className={classes.paper}>
        <p>
          <Typography variant="h4">Corregir: Certificado de discapacidad único</Typography>
        </p>

        <p>&nbsp;</p>

        <Typography variant="body1" color="secondary">El documento que se aportó no correponde al beneficiario de la solcitud. Subir el documento que correponde.</Typography>

        <p>&nbsp;</p>
        <p>
          <TextField id="outlined-basic" helperText="Este campo es..." label="DOCUMENTO CORREGIDO" variant="filled" style={{ width: "280px" }} />
          <input accept="image/*" className={classes.photo} id="icon-button-file" type="file" />
          <label htmlFor="icon-button-file">
            <IconButton color="primary" aria-label="upload documentp" component="span" size="medium">
              < CloudUpload/>
            </IconButton>
          </label>
        </p>

        <p>&nbsp;</p>
      </Paper>

      <Paper className={classes.paper}>
        <p>
          <Button variant="contained" component={RouterLink} to="/pic/tramites/tramite-1/gestion-3">VOLVER</Button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button color="primary" variant="contained" component={RouterLink} to="/pic/tramites/tramite-1/gestion-3?SUB">CONFIRMAR</Button>
        </p>
      </Paper>

    </Container>

  );
}

export default TramiteDocumentoSubsanarPage;
