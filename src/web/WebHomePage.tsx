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

function WebHomePage(props: any) {
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

      {logged &&
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item sm={2}>
              <div style={{textAlign: "center"}}>
                <BikeIcon color="primary" fontSize={"large"}></BikeIcon>
                <Typography variant="body1">Bicicletas</Typography>
              </div>
            </Grid>

            <Grid item sm={2}>
              <div style={{textAlign: "center"}}>
                <BusIcon color="primary" fontSize={"large"}></BusIcon>
                <Typography variant="body1">Como llego</Typography>
              </div>
            </Grid>

            <Grid item sm={2}>
              <div style={{textAlign: "center"}}>
                <CarIcon color="primary" fontSize={"large"}></CarIcon>
                <Typography variant="body1">Estacionar</Typography>
              </div>
            </Grid>

            <Grid item sm={2}>
              <div style={{textAlign: "center"}}>
                <ProfileIcon color="primary" fontSize={"large"}></ProfileIcon>
                <Typography variant="body1">Mis Datos</Typography>
              </div>
            </Grid>

            <Grid item sm={2}>
              <div style={{textAlign: "center"}}>
                <StorefrontIcon color="primary" fontSize={"large"}></StorefrontIcon>
                <Typography variant="body1">Comercios</Typography>
              </div>
            </Grid>

            <Grid item sm={2}>
              <div style={{textAlign: "center"}}>
                <MoreIcon color="primary" fontSize={"large"} onClick={togleShowApps}></MoreIcon>
                <Typography variant="body1">Más</Typography>
              </div>
            </Grid>
          </Grid>

          {showApps &&
            <Grid container spacing={2} style={{paddingTop: 16}}>
              <Grid item sm={2}>
                <div style={{textAlign: "center"}}>
                  <BusIcon color="primary" fontSize={"large"}></BusIcon>
                  <Typography variant="body1">Cuando llega</Typography>
                </div>
              </Grid>

              <Grid item sm={2}>
                <div style={{textAlign: "center"}}>
                  <CarIcon color="primary" fontSize={"large"}></CarIcon>
                  <Typography variant="body1">SIAT</Typography>
                </div>
              </Grid>

              <Grid item sm={2}>
                <div style={{textAlign: "center"}}>
                  <ProfileIcon color="primary" fontSize={"large"}></ProfileIcon>
                  <Typography variant="body1">Otro</Typography>
                </div>
              </Grid>

              <Grid item sm={2}>
                <div style={{textAlign: "center"}}>
                  <StorefrontIcon color="primary" fontSize={"large"}></StorefrontIcon>
                  <Typography variant="body1">Otro</Typography>
                </div>
              </Grid>
            </Grid>
          }

        </Paper>
      }

      {logged &&
        <Paper className={classes.paper}>
          <p>
            <Typography variant="h4">Notificaciones</Typography>
            <Link href="#">Ver todas</Link> 
          </p>

          <Paper elevation={0} className={classes.action}>
            <Grid container spacing={2}>
              <Grid item md={9} xs={8}>
                <Typography variant="h6"><Link href="#">Notificacion 12/01/2021</Link> <Chip color="secondary" size="small" label="Importante"></Chip></Typography>
                <Typography variant="body2">Mediante la presente se deja constancia que el día 12 de enero 2020 Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...</Typography>
              </Grid>
              <Grid item xs={3}><Button startIcon={<MoreVertIcon/>}></Button></Grid>
            </Grid>
          </Paper>
        </Paper>
      }

      {logged && 
        <Paper className={classes.paper}>
          <p>
            <Typography variant="h4">Mis Gestiones</Typography>
            <Link href="#">Ver todas</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Link href="#">Ver mis registros</Link> 
          </p>

          <Paper elevation={0} className={classes.action}>
            <Grid container spacing={2}>
              <Grid item md={9} xs={8}>
                <Typography variant="h6"><Link href="#">Infracción de tránsito 12/01/2021</Link> <Chip size="small" label="Pendiente"></Chip></Typography>
                <Typography variant="body2">El 12 de enero te realizaron una multa por...</Typography>
              </Grid>
              <Grid item xs={3}><Button startIcon={<MoreVertIcon/>} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}></Button></Grid>
            </Grid>
          </Paper>

          <Paper elevation={0} className={classes.action}>
            <Grid container spacing={2}>
              <Grid item md={9} xs={8}>
                <Typography variant="h6"><Link href="#">Permiso de estacionamiento CDU</Link> <Chip size="small" label="Analizando"></Chip></Typography>
                <Typography variant="body2">Enviaste la solicitud el 17/12/2020</Typography>
              </Grid>
              <Grid item xs={3}><Button startIcon={<MoreVertIcon/>}></Button></Grid>
            </Grid>
          </Paper>

          <Paper elevation={0} className={classes.action}>
            <Grid container spacing={2}>
              <Grid item md={9} xs={8}>
                <Typography variant="h6"><Link href="#">Columna caida en San Juan 473</Link> <Chip size="small" label="Finalizado"></Chip></Typography>
                <Typography variant="body2">El 7/1/2021 se resolvio así y asá.</Typography>
              </Grid>
              <Grid item xs={3}><Button startIcon={<MoreVertIcon/>}></Button></Grid>
            </Grid>
          </Paper>

          <Paper elevation={0} className={classes.action}>
            <Grid container spacing={2}>
              <Grid item md={9} xs={8}>
                <Typography variant="h6"><Link href="#">Turno de pileta de natación</Link> <Chip size="small" label="Finalizado"></Chip></Typography>
                <Typography variant="body2">El 17/1/2021 se resolvio.</Typography>
              </Grid>
              <Grid item xs={3}><Button startIcon={<MoreVertIcon/>}></Button></Grid>
            </Grid>
          </Paper>

          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Gestionar</MenuItem>
            <MenuItem onClick={handleClose}>Pagar ahora</MenuItem>
            <MenuItem onClick={handleClose}>Opcion 3</MenuItem>
          </Menu>


        </Paper>
      }

      <Paper className={classes.paper}>

        <Grid container>
          <Grid item sm={12} md={7}>
            <form noValidate autoComplete="off" >
              <p><Typography variant="h4">Servicios de la Municipalidad</Typography></p>
              <p><Typography variant="body1">Podes buscar servicios, trámites y todo lo que necestias de la municipalidad.</Typography></p>
              <TextField id="outlined-basic" label="Buscar en rosario.gob.ar" variant="filled" style={{ width: "420px" }} />
              <Button color="primary" variant="contained" style={{ height: 56 }} component={RouterLink} to="/pic/web/buscar">Buscar</Button>
            </form>

            {logged &&
              <Typography variant="body1">
              <br></br>
              <Grid container spacing={1}>
                  <Grid  item sm={1} md={6}><Link>{'->'} Estacionar</Link></Grid>
                  <Grid item sm={1} md={6}><Link>{'->'} Como llego</Link></Grid>
                  <Grid item sm={1} md={6}><Link>{'->'} Cuando llega</Link></Grid>
                  <Grid item sm={1} md={6}><Link>{'->'} Turnos pileta</Link></Grid>
              </Grid>
              </Typography>
            }

          </Grid>
          <Grid item sm={12} md={5}>
            <p><Typography variant="h6">Sugeridos</Typography></p>
            <Typography variant="body1">
              <p><Link>+ Link 1</Link></p>
              <p><Link>+ Link 2</Link></p>
              <p><Link>+ Link 3</Link></p>
              <p><Link>+ Link 4</Link></p>
              <p><Link>+ Link 4</Link></p>
            </Typography>
          </Grid>
        </Grid>

        <Divider></Divider>

        <Grid container>
          <Grid item sm={12} md={4}>
            <p>
              <Typography variant="h6"><Link component={RouterLink} to="/web/navegar">Comercios y empleos</Link></Typography>
              <Typography variant="body2">Incluye habilitaciones, permisos y herramientas para el fortalecimiento de tu empresa o emprendimiento</Typography>
            </p>
          </Grid>
          <Grid item sm={12} md={4}>
            <p>
              <Typography variant="h6"><Link component={RouterLink} to="/web/navegar">Ciudad, cultura y turismo</Link></Typography>
              <Typography variant="body2">Visitas a espacios culturales. </Typography>
            </p>
          </Grid>
          <Grid item sm={12} md={4}>
            <p>
              <Typography variant="h6"><Link component={RouterLink} to="/web/navegar">Deportes</Link></Typography>
              <Typography variant="body2">Esto es para navegar por la sección... </Typography>
            </p>
          </Grid>
        </Grid>

        <Divider></Divider>

        <Grid container>
          <Grid item sm={12} md={4}>
            <p>
              <Typography variant="h6"><Link component={RouterLink} to="/web/navegar">Medioambiente y mantenimiento</Link></Typography>
              <Typography variant="body2">Esto es para navegar por la sección... </Typography>
            </p>
          </Grid>

          <Grid item sm={12} md={4}>
            <p>
              <Typography variant="h6"><Link component={RouterLink} to="/web/navegar">Movilidad, transporte y tránsito</Link></Typography>
              <Typography variant="body2">Esto es para navegar por la sección... </Typography>
            </p>
          </Grid>

          <Grid item sm={12} md={4}>
            <p>
              <Typography variant="h6"><Link component={RouterLink} to="/web/navegar">Participación y transparencia</Link></Typography>
              <Typography variant="body2">Esto es para navegar por la sección... </Typography>
            </p>
          </Grid>
        </Grid>

        <Divider></Divider>

        <Grid container>
          <Grid item sm={12} md={4}>
            <p>
              <Typography variant="h6"><Link component={RouterLink} to="/web/navegar">Servicios sociales</Link></Typography>
              <Typography variant="body2">Esto es para navegar por la sección... </Typography>
            </p>
          </Grid>

          <Grid item sm={12} md={4}>
            <p>
              <Typography variant="h6"><Link component={RouterLink} to="/web/navegar">Tributos, multas y pagos</Link></Typography>
              <Typography variant="body2">Esto es para navegar por la sección... </Typography>
            </p>
          </Grid>

          <Grid item sm={12} md={4}>
            <p>
              <Typography variant="h6"><Link component={RouterLink} to="/web/navegar">Vivienda y construcción</Link></Typography>
              <Typography variant="body2">Esto es para navegar por la sección... </Typography>
            </p>
          </Grid>
        </Grid>

        <Divider></Divider>

        <Grid container>
          <Grid item sm={12} md={4}>
            <p>
              <Typography variant="h6"><Link component={RouterLink} to="/web/navegar">Educación</Link></Typography>
              <Typography variant="body2">Esto es para navegar por la sección... </Typography>
            </p>
          </Grid>
          <Grid item sm={12} md={4}>
            <p>
              <Typography variant="h6"><Link component={RouterLink} to="/web/navegar">Otros</Link></Typography>
              <Typography variant="body2">Esto es para navegar por la sección... </Typography>
            </p>
          </Grid>


        </Grid>
      </Paper>

      <Paper className={classes.paper}>
        otra...
          </Paper>

      <Paper className={classes.paper}>
        otra...
          </Paper>

    </Container>
  );
}

export default WebHomePage;
