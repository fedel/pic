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
    most: {
      backgroundColor: theme.palette.primary.main,
      paddingLeft: theme.spacing(1),
    },
    reverse: {
      color: "#fff",
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
                  <Typography variant="body1">&nbsp;</Typography>
                </div>
            </Grid>

            <Grid item sm={2}>
                <div style={{textAlign: "center"}}>
                  <IconButton>
                    <DescriptionIcon color="primary" fontSize={"large"}></DescriptionIcon>
                  </IconButton>
                  <Typography variant="body1">Mis Documentos</Typography>
                </div>
            </Grid>

            <Grid item sm={2}>
              <div style={{textAlign: "center"}}>
              <IconButton>
                <ProfileIcon color="primary" fontSize={"large"}></ProfileIcon>
                </IconButton>
                <Typography variant="body1">Mis Datos</Typography>
              </div>
            </Grid>

            <Grid item sm={2}>
                <div style={{textAlign: "center"}}>
                  <IconButton>
                    <PlayListAddIcon color="primary" fontSize={"large"}></PlayListAddIcon>
                  </IconButton>
                  <Typography variant="body1">Mis Registros</Typography>
                </div>
            </Grid>

            <Grid item sm={2}>
                <div style={{textAlign: "center"}}>
                  <IconButton>
                    <PeopleIcon color="primary" fontSize={"large"}></PeopleIcon>
                  </IconButton>
                  <Typography variant="body1">Apoderados</Typography>
                </div>
            </Grid>
          </Grid>

          {showApps &&
            <Grid container spacing={2} style={{paddingTop: 16}}>
            </Grid>
          }
        </Paper>
      }

      {logged &&
        <Paper id="notificaciones" className={classes.paper}>
          <p>
            <Typography variant="h4">Notificaciones</Typography>
            <Link href="#">Ver todas</Link> 
          </p>

          <Paper elevation={0} className={classes.action}>
            <Grid container spacing={2}>
              <Grid item md={9} xs={8}>
                <Typography variant="h6"><Link component={RouterLink} to="/pic/noti/notificacion/noti1">Notificacion de Infracción.</Link> <Chip color="secondary" size="small" label="Nuevo"></Chip></Typography>
                <Typography variant="body1">7 de Febrero 2021</Typography>
              </Grid>
              <Grid item xs={3}></Grid>
            </Grid>
          </Paper>

          <Paper elevation={0} className={classes.action}>
            <Grid container spacing={2}>
              <Grid item md={9} xs={8}>
                <Typography variant="h6"><Link href="#">Envio de deuda a Judiciales</Link></Typography>
                <Typography variant="body1">12 de Enero 2019</Typography>
              </Grid>
              <Grid item xs={3}></Grid>
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
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Link href="#">Ver mensajes</Link> 
          </p>

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
                <Typography variant="body2">El 7/1/2021 finalizó.</Typography>
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
              <p><Typography variant="h3">Servicios de la Municipal</Typography></p>
              <p><Typography variant="body1">Podes buscar servicios, trámites y todo lo que necesitas de la municipalidad.</Typography></p>
              <Hidden xsDown>
                <TextField id="outlined-basic" label="Buscar en rosario.gob.ar" variant="filled" style={{ width: "420px" }} />
              </Hidden>
              <Hidden smUp>
                <TextField id="outlined-basic" label="Buscar en rosario.gob.ar" variant="filled" style={{ width: "220px" }} />
              </Hidden>

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
        
          <Grid item xs={12} md={5} className={classes.most}>
            <p><Typography className={classes.reverse} variant="h6">Sugeridos</Typography></p>
            <Typography variant="body1">
              <p><Link className={classes.reverse} >+ Link 1</Link></p>
              <p><Link className={classes.reverse} >+ Link 2</Link></p>
              <p><Link className={classes.reverse} >+ Link 3</Link></p>
              <p><Link className={classes.reverse} >+ Link 4</Link></p>
              <p><Link className={classes.reverse} >+ Link 4</Link></p>
            </Typography>
          </Grid>
        </Grid>

        <Divider></Divider>

        <Grid container>
          <Grid item sm={12} lg={4}>
            <p>
              <Typography variant="h6"><Link component={RouterLink} to="/web/navegar">Comercios y empleos</Link></Typography>
              <Typography variant="body2">Incluye habilitaciones, permisos y herramientas para el fortalecimiento de tu empresa o emprendimiento</Typography>
            </p>
          </Grid>
          <Grid item sm={12} lg={4}>
            <p>
              <Typography variant="h6"><Link component={RouterLink} to="/web/navegar">Ciudad, cultura y turismo</Link></Typography>
              <Typography variant="body2">Visitas a espacios culturales. </Typography>
            </p>
          </Grid>
          <Grid item sm={12} lg={4}>
            <p>
              <Typography variant="h6"><Link component={RouterLink} to="/web/navegar">Deportes</Link></Typography>
              <Typography variant="body2">Esto es para navegar por la sección... </Typography>
            </p>
          </Grid>
        </Grid>

        <Divider></Divider>

        <Grid container>
          <Grid item sm={12} lg={4}>
            <p>
              <Typography variant="h6"><Link component={RouterLink} to="/web/navegar">Medioambiente y mantenimiento</Link></Typography>
              <Typography variant="body2">Esto es para navegar por la sección... </Typography>
            </p>
          </Grid>

          <Grid item sm={12} lg={4}>
            <p>
              <Typography variant="h6"><Link component={RouterLink} to="/web/navegar">Movilidad, transporte y tránsito</Link></Typography>
              <Typography variant="body2">Esto es para navegar por la sección... </Typography>
            </p>
          </Grid>

          <Grid item sm={12} lg={4}>
            <p>
              <Typography variant="h6"><Link component={RouterLink} to="/web/navegar">Salud</Link></Typography>
              <Typography variant="body2">Esto es para navegar por la sección... </Typography>
            </p>
          </Grid>
        </Grid>

        <Divider></Divider>

        <Grid container>
          <Grid item sm={12} lg={4}>
            <p>
              <Typography variant="h6"><Link component={RouterLink} to="/web/navegar">Servicios sociales</Link></Typography>
              <Typography variant="body2">Esto es para navegar por la sección... </Typography>
            </p>
          </Grid>

          <Grid item sm={12} lg={4}>
            <p>
              <Typography variant="h6"><Link component={RouterLink} to="/web/navegar">Tributos, multas y pagos</Link></Typography>
              <Typography variant="body2">Esto es para navegar por la sección... </Typography>
            </p>
          </Grid>

          <Grid item sm={12} lg={4}>
            <p>
              <Typography variant="h6"><Link component={RouterLink} to="/web/navegar">Vivienda y construcción</Link></Typography>
              <Typography variant="body2">Esto es para navegar por la sección... </Typography>
            </p>
          </Grid>
        </Grid>

        <Divider></Divider>

        <Grid container>
          <Grid item sm={12} lg={4}>
            <p>
              <Typography variant="h6"><Link component={RouterLink} to="/web/navegar">Educación</Link></Typography>
              <Typography variant="body2">Esto es para navegar por la sección... </Typography>
            </p>
          </Grid>
          <Grid item sm={12} lg={4}>
            <p>
              <Typography variant="h6"><Link component={RouterLink} to="/web/navegar">Participación y transparencia</Link></Typography>
              <Typography variant="body2">Esto es para navegar por la sección... </Typography>
            </p>
          </Grid>
        </Grid>
      </Paper>

      <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item sm={2}>
              <div style={{textAlign: "center"}}>
              <IconButton>
                <BusIcon color="primary" fontSize={"large"}></BusIcon>
                </IconButton>
                <Typography variant="body1">Cuando llega</Typography>
              </div>
            </Grid>

            <Grid item sm={2}>
              <div style={{textAlign: "center"}}>
              <IconButton>
                <BusIcon color="primary" fontSize={"large"}></BusIcon>
                </IconButton>
                <Typography variant="body1">Como llego</Typography>
              </div>
            </Grid>

            <Grid item sm={2}>
              <div style={{textAlign: "center"}}>
                <IconButton>
                  <StorefrontIcon color="primary" fontSize={"large"}></StorefrontIcon>
                </IconButton>
                <Typography variant="body1">Comercios</Typography>
              </div>
            </Grid>

            { logged &&
              <React.Fragment>
                <Grid item sm={2}>
                  <div style={{textAlign: "center"}}>
                  <IconButton>
                    <CarIcon color="primary" fontSize={"large"}></CarIcon>
                    </IconButton>
                    <Typography variant="body1">Estacionamiento</Typography>
                  </div>
                </Grid>

                <Grid item sm={2}>
                  <div style={{textAlign: "center"}}>
                  <IconButton>
                    <BikeIcon color="primary" fontSize={"large"}></BikeIcon>
                    </IconButton>
                    <Typography variant="body1">Bicicletas</Typography>
                  </div>
                </Grid>

                <Grid item sm={2}>
                  <div style={{textAlign: "center"}}>
                  <IconButton>
                    <CarIcon color="primary" fontSize={"large"}></CarIcon>
                    </IconButton>
                    <Typography variant="body1">Tributos</Typography>
                  </div>
                </Grid>

                <Grid item sm={2}>
                <div style={{textAlign: "center"}}>
                  <IconButton>
                    <StorefrontIcon color="primary" fontSize={"large"}></StorefrontIcon>
                  </IconButton>
                  <Typography variant="body1">Comercios</Typography>
                </div>
                </Grid>

                <Grid item sm={2}>
                  <div style={{textAlign: "center"}}>
                  <IconButton>
                    <ProfileIcon color="primary" fontSize={"large"}></ProfileIcon>
                    </IconButton>
                    <Typography variant="body1">Multas</Typography>
                  </div>
                </Grid>
              </React.Fragment>
            }
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
