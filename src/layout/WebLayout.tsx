import React from 'react';
import { makeStyles, Theme, createStyles, Container, Grid, Typography, Paper, Link, Button, Menu, MenuItem } from "@material-ui/core";
import { Link as RouterLink, navigate } from "@reach/router"
import MessageIcon from '@material-ui/icons/MailOutline';
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';
import NotificationImportantOutlinedIcon from '@material-ui/icons/NotificationImportant';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {        
        padding: 0,        
    },
    container2: {
        padding: 0,
    },
    header: {
        backgroundColor: "#fff",
        height: "110px",
        borderBottom: "solid 3px #0066cc",
    },
    paper: {
      padding: theme.spacing(1),
      margin: theme.spacing(2),
    },
  }),
);

function WebLayout(props: any) {
    const classes = useStyles();
    const [showApps, setShowApps] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  
    const togleShowApps = () => {
      setShowApps(!showApps);
    }
  
    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
        <Container className={classes.container} maxWidth="md">
            
            <Paper className={classes.paper} elevation={0}>
                <Grid container spacing={1} className={classes.header}>
                    <Grid item xs={2}>
                        <Link component={RouterLink} to="/pic/web/home">
                            <img src="https://www.rosario.gob.ar/estilos/iframes/assets/img/logo.svg" title="Logo de Rosario" alt="Logo de Rosario"></img>
                        </Link>
                    </Grid>
                    <Grid item xs={8} style={{textAlign: "center"}}>
                        <Typography variant="h2" color="primary">
                        </Typography>
                    </Grid>
                    
                    {props.logged && 
                    <Grid item xs={2} style={{textAlign: "right"}}>
                        <Typography variant="body1"><Link href="#" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>Federico Luna</Link></Typography>
                        <Typography variant="caption">Perfil</Typography>
                    </Grid>
                    }
                    {!props.logged && 
                    <Grid item xs={2} style={{textAlign: "right"}}>
                        <br></br>
                        <br></br>
                        <Typography variant="body1"><Link href="#"><b>Registrate</b></Link></Typography>
                        <Typography variant="body1" style={{marginTop: "6px"}}><Link href="#">Ingresa</Link></Typography>
                    </Grid>
                    }
                </Grid>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>Mis Datos</MenuItem>
                    <MenuItem onClick={handleClose}>Mis Documentos</MenuItem>
                    <MenuItem onClick={handleClose}>Apoderatos</MenuItem>
                </Menu>


            </Paper>

            <Container className={classes.container2}>
                {!props.logged &&
                <Paper className={classes.paper}>
                    <p><Typography color="primary" variant="h6"><Link href="#">COVID19 | Síntomas y como cuidarte.</Link></Typography></p>
                    <p><Typography color="primary" variant="h6"><Link href="#">SUSTENTABLE | Humedales, transporte y ...</Link></Typography></p>
                </Paper>
                }

                {props.logged &&
                <Paper className={classes.paper}>
                    <p><Typography color="primary" variant="body1"><NotificationImportantOutlinedIcon style={{verticalAlign: "middle"}}></NotificationImportantOutlinedIcon><Link href="#notificaciones">&nbsp;Tienes una notificación feaciente del 7 de Febrero 2021</Link></Typography></p>
                    <p><Typography color="primary" variant="body1"><MessageIcon style={{verticalAlign: "middle"}}></MessageIcon> <Link component={RouterLink} to="/pic/noti/mensaje/msg1">&nbsp;Aviso de deuda 2021-02</Link></Typography></p>
                    <p><Typography color="primary" variant="body1"><AssignmentTurnedInOutlinedIcon style={{verticalAlign: "middle"}}></AssignmentTurnedInOutlinedIcon><Link>&nbsp;El trámite 23234/2021 ha cambiado. Ingresa para ver los cambios.</Link></Typography></p>
                </Paper>
                }
            </Container>

            { props.children }
        </Container>
    )
}
  
export default WebLayout;
