import React from 'react';
import { makeStyles, Theme, createStyles, Toolbar, Typography, Button, Container, Box, Grid, Hidden, Paper, TextField, Link, Divider, IconButton, Chip, Menu, MenuItem } from "@material-ui/core";
import Folder from "@material-ui/icons/Folder";
import Help from "@material-ui/icons/Help";
import { Link as RouterLink, navigate } from "@reach/router"
import BikeIcon from "@material-ui/icons/DirectionsBike";
import ProfileIcon from "@material-ui/icons/AccountCircleOutlined";
import BusIcon from "@material-ui/icons/DirectionsBusOutlined";
import CarIcon from "@material-ui/icons/DirectionsCarOutlined";
import MoreIcon from "@material-ui/icons/MoreHorizOutlined";
import StorefrontIcon from "@material-ui/icons/StorefrontOutlined";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import PlayListAddIcon from "@material-ui/icons/PlaylistAddCheck";
import DescriptionIcon from "@material-ui/icons/DescriptionOutlined";
import PeopleIcon from "@material-ui/icons/PeopleAlt";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: 0,
    },
    paper: {
      padding: theme.spacing(1),
      margin: theme.spacing(2),
    },
    action: {
      marginBottom: "12pt",
      padding: "6pt",
      borderBottom: "solid 3px #aaa",
    },
  }),
);

function WebNotificacionPage(props: any) {
  const classes = useStyles();
  const logged = props.logged;

  const [showApps, setShowApps] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const togleShowApps = () => {
    setShowApps(!showApps);
  }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <Container className={classes.container}>


      {true &&
        <Paper className={classes.paper}>
          <p>
            <Typography variant="body1"><b>11 de Diciembre 2020, Rosario</b></Typography>
            <Typography variant="h3">Infracción de tránsito San Lorenzo y España</Typography>
          </p>
          <p>
            <Typography variant="body1">Dirección General de Tránsito</Typography>
          </p>

          <p>
            <Button variant="outlined" color="primary">Descargar PDF</Button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant="contained" color="primary">Gestionar</Button>
          </p>

          <p>
            <embed src="https://mozilla.github.io/pdf.js/web/viewer.html" width="100%" height="600" type="application/pdf"></embed>
          </p>

          <p>
            <Button component={RouterLink} to="/pic/web/home" color="primary" variant="contained">Volver</Button>
          </p>


        </Paper>
      }


    </Container>
  );
}

export default WebNotificacionPage;
