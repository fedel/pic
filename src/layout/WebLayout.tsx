import React from 'react';
import { makeStyles, Theme, createStyles, Container, Grid, Typography, Paper, Link, Button, Menu, MenuItem, Chip } from "@material-ui/core";
import { Link as RouterLink, navigate } from "@reach/router"
import MessageIcon from '@material-ui/icons/MailOutline';
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';
import NotificationImportantOutlinedIcon from '@material-ui/icons/NotificationImportant';
import theme from '../theme';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {        
        padding: 0,
    },
    container2: {
        padding: 0,
    },
    header: {
        height: "90px",
        
    },
    line: {
        height: "6px",
        backgroundColor: "#0066cc",
        padding: 0,
        margin:0,
    },
    paper: {
      margin: theme.spacing(0),
      backgroundColor: "#000",
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
        <React.Fragment>
        <div style={{backgroundColor: "#000", paddingLeft: theme.spacing(1), paddingRight: theme.spacing(1),}}>
            <div className={classes.paper} style={{backgroundColor: "#000"}}>
                <Container className={classes.container} maxWidth="md">
                <Grid container spacing={1} className={classes.header}>
                    <Grid item xs={2}>
                        <Link component={RouterLink} to="/pic/web/home">
                            <img src="https://t-datos.rosario.gob.ar/sites/t-datos.rosario.gob.ar/themes/custom/rosariodatos_theme/images/logo_mobile.svg"
                                width="90%" height="90%"
                                x-src="https://www.rosario.gob.ar/estilos/iframes/assets/img/logo.svg" title="Logo de Rosario" alt="Logo de Rosario">

                                    
                                </img>
                            
                        </Link>
                    </Grid>
                    <Grid item xs={7} sm={8} style={{textAlign: "center"}}>
                        <Typography variant="h2" color="primary">
                        </Typography>
                    </Grid>
                    
                    {props.logged && 
                    <Grid item xs={2} style={{textAlign: "right"}}>
                        <br></br>
                        <Typography variant="body1"><Link style={{color: "white"}} href="#" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>Juan Pedro</Link></Typography>
                        <Typography variant="caption" style={{color: "white"}} >Mis Datos</Typography>
                    </Grid>
                    }
                    {!props.logged && 
                    <Grid item xs={2} style={{textAlign: "right"}}>
                        <br></br>
                        <Typography variant="body1" style={{color: "white"}}><Link href="#" style={{color: "white"}}><b>Registrate&nbsp;&nbsp;&nbsp;&nbsp;</b></Link></Typography>
                        <Typography variant="body1" style={{color: "white", marginTop: "6px"}}><Link href="#" style={{color: "white"}}>Ingresa&nbsp;&nbsp;&nbsp;</Link></Typography>
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

                </Container>
            </div>

            <div className={classes.line}></div>

            <div className={classes.paper} >
                <Container className={classes.container} maxWidth="md">
                    {props.covid && !props.logged &&
                    <div style={{paddingBottom: "1pt"}}>
                        <p><Typography color="primary" variant="h6"><Link  style={{color: "white"}} href="#">COVID19</Link> | <div style={{color: "white", display: "inline-block", fontWeight: "normal", fontSize: "14pt", wordBreak: "keep-all"}}>Síntomas y como cuidarte</div></Typography></p>
                        <p><Typography color="primary" variant="h6"><Link  style={{color: "white"}} href="#">SUSTENTABLE</Link> | <div style={{color: "white", display: "inline-block", fontWeight: "normal", fontSize: "14pt"}}>Humedales, transporte y ...</div></Typography></p>
                    </div>
                    }

                    {props.covid && props.logged &&
                    <div style={{paddingBottom: "1pt"}}>
                        <p><Typography color="primary" variant="body1"><NotificationImportantOutlinedIcon style={{color: "#fff", verticalAlign: "middle"}}></NotificationImportantOutlinedIcon><Link style={{color: "white"}} href="#notificaciones">&nbsp;Tienes una notificación feaciente del 7 de Febrero 2021</Link>&nbsp;<Chip color="default" size="small" label="NOTIFICACIÓN"></Chip></Typography></p>
                        <p><Typography color="primary" variant="body1"><MessageIcon style={{color: "#fff", verticalAlign: "middle"}}></MessageIcon> <Link style={{color: "white"}} component={RouterLink} to="/pic/noti/mensaje/msg1">&nbsp;Aviso de deuda 2021-02</Link></Typography></p>
                        <p><Typography color="primary" variant="body1"><AssignmentTurnedInOutlinedIcon style={{color: "#fff", verticalAlign: "middle"}}></AssignmentTurnedInOutlinedIcon><Link style={{color: "white"}}>&nbsp;El trámite 23234/2021 ha cambiado. Ingresa para ver los cambios.</Link></Typography></p>
                    </div>
                    }
                </Container>
            </div>
        </div>

            <Container className={classes.container} maxWidth="md">
                <div style={{marginLeft: theme.spacing(-3), marginRight: theme.spacing(-3), paddingLeft: theme.spacing(1), paddingRight: theme.spacing(1),}}>
                { props.children }
                </div>
            </Container>
        </React.Fragment>
    )
}
  
export default WebLayout;
