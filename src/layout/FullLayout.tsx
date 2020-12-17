import React from 'react';
import clsx from "clsx";
import {
    makeStyles,
    Theme,
    createStyles,
    AppBar,
    Toolbar,
    IconButton,
    Drawer,
    Divider,
    MenuItem,
    Menu,
    Button,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Hidden,
    Paper,
    Icon,
    MenuList,
    Typography,
    Tooltip,
    ListSubheader
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import AccountCircle from "@material-ui/icons/AccountCircle";
import SupervisedUserCircle from "@material-ui/icons/SupervisedUserCircle";
import WorkIcon from "@material-ui/icons/Work";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import Home from "@material-ui/icons/Forward";
import {Link as RouterLink, navigate, useParams} from "@reach/router"
import {useAppContext} from "../AppContext";
import {authFetch, BACKEND_URL, login, logout} from "../AuthContext";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        /*
        root: { },
        title: { },
        appBar: { },
        appBarShift: { },
        toolbar: { },
        menuButton: {},
        menuButtonHidden: {},
        content: { },
        appBarSpacer: { },
        drawerPaper: {},
        drawerPaperClose: {},
        toolbarIcon: {},
        */

        root: {
            display: 'flex',
        },
        toolbar: {
            paddingRight: 24, // keep right padding when drawer closed
        },
        toolbarIcon: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: '0 8px',
            height: "120px",
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.primary.main,
            ...theme.mixins.toolbar,
        },
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        appBarShift: {
            marginLeft: 320, // // 240 == drawerwidth
            width: "calc(100% - 320px)", // 240 == drawerwidth
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        menuButton: {
            marginRight: 0,
            [theme.breakpoints.up('sm')]: {
                // display: 'none',
            },
        },
        menuButtonHidden: {
            display: 'none',
        },
        title: {
            flexGrow: 1,
        },
        createMenu: {},
        createMenuButtom: {
            marginTop: theme.spacing(1),
            marginLeft: theme.spacing(6),
        },
        drawerPaper: {
            overflowX: 'hidden',
            position: 'relative',
            whiteSpace: 'nowrap',
            width: 320, // 240 == drawerwidth
            height: '100vh',
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        drawerPaperClose: {
            overflowX: 'hidden',
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            width: 0, //theme.spacing(7),
            [theme.breakpoints.up('sm')]: {
                width: 0, // theme.spacing(9),
            },
        },
        appBarSpacer: theme.mixins.toolbar,
        content: {
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
        },
        container: {
            paddingLeft: theme.spacing(0),
            paddingRight: theme.spacing(0),
            paddingTop: theme.spacing(0),
            paddingBottom: theme.spacing(0),
        },
        paper: {
            padding: theme.spacing(2),
            display: 'flex',
            overflow: 'auto',
            flexDirection: 'column',
        },
        fixedHeight: {
            height: 280,
        },
        linkButton: {
            color: "#ffffff",
        },
        logo: {
            maxWidth: "120px",
            marginRight: "16px",
            marginTop: "4px",
            maxHeight: "42px",
        },
    }),
);

function FullLayout(props: any) {
    console.debug("FullLayout start...");
    const classes = useStyles();
    const kiosk = window.location.href.indexOf("kiosk=yes") > 0;
    const appContext = useAppContext();
    const [openDrawer, setOpenDrawer] = React.useState(!kiosk);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const openProfile = Boolean(anchorEl);
  
    const handleDrawerOpen = () => {
        setOpenDrawer(true);
    };

    const handleDrawerClose = () => {
        setOpenDrawer(false);
    };

    const handleProfile = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleProfileClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = async () => {
        setAnchorEl(null);

        authFetch(BACKEND_URL + '/auth/logout', {
            method: 'DELETE'
        })
            .then(r => r.json())
            .catch(error => {console.error(error)})
            .finally(() => logout());

        await navigate('/auth/login')

    };

    return (
        <div className={classes.root}>
            <AppBar position="absolute" className={clsx(classes.appBar, openDrawer && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    { !kiosk && 
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            className={clsx(classes.menuButton, openDrawer && classes.menuButtonHidden)}
                        >
                            <MenuIcon/>
                        </IconButton>
                    }

                    { kiosk && 
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="back"
                        >
                            <ArrowBackIcon/>
                        </IconButton>
                    }

                    <div>
                        <img alt="logo" className={classes.logo} src="/assets/images/logo2.png"/>
                    </div>
                    {/*
                    <div>
                        <Button component={RouterLink} to="/home">Home</Button>
                        <Button component={RouterLink} to="/maps">Mapas</Button>
                        <Button component={RouterLink}
                                to="/datasets">Datasets</Button>
                    </div>
                    */}

                    <div className={classes.title}></div>

                    <div>
                        <Button>Federico Luna</Button>
                    </div>

                    <div>
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleProfile}
                            color="inherit"
                        >
                            <AccountCircle/>
                        </IconButton>
                            <Menu
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                id="menu-appbar"
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={openProfile}
                                onClose={handleProfileClose}
                            >

                                <MenuItem onClick={handleProfileClose}>
                                    <Tooltip title="Su Perfil">
                                        <ListItemIcon>
                                            <AccountCircle fontSize="small"/>
                                        </ListItemIcon>
                                    </Tooltip>
                                    <Typography variant="subtitle2">Federico Luna</Typography>
                                </MenuItem>
                                
                                <MenuItem onClick={handleProfileClose}>
                                    <Tooltip title="Gestionando a...">
                                        <ListItemIcon>
                                            <SupervisedUserCircle fontSize="small"/>
                                        </ListItemIcon>
                                    </Tooltip>
                                    <Typography variant="subtitle2">Federico Luna</Typography>
                                </MenuItem>
                                
                                <MenuItem onClick={handleProfileClose}>
                                    <Tooltip title="Facultades">
                                        <ListItemIcon>
                                            <WorkIcon fontSize="small"/>
                                        </ListItemIcon>
                                    </Tooltip>
                                    <Typography variant="subtitle2">Ciudadano</Typography>
                                </MenuItem>
                                
                                <MenuItem onClick={handleProfileClose}>
                                    <Tooltip title="Perfil Verificado">
                                        <ListItemIcon>
                                            <VerifiedUserIcon fontSize="small"/>
                                        </ListItemIcon>
                                    </Tooltip>
                                    <Typography variant="subtitle2">Verificado</Typography>
                                </MenuItem>
                                
                                <Divider/>
                                <MenuItem onClick={handleProfileClose}>
                                    <Tooltip title="Modificar su perfil">
                                        <ListItemIcon>
                                            <AccountCircle/>
                                        </ListItemIcon>
                                    </Tooltip>
                                    <Typography variant="inherit">Gestionar Mi Perfil</Typography>
                                </MenuItem>

                                <Divider/>
                                <MenuItem onClick={handleLogout}>
                                    <Tooltip title="Salir">
                                        <ListItemIcon>
                                            <ExitToAppIcon/>
                                        </ListItemIcon>
                                    </Tooltip>
                                    <Typography variant="inherit">Salir</Typography>
                                </MenuItem>


                            </Menu>
                        
                    </div>
                </Toolbar>
            </AppBar>
            { !kiosk && 
            <Drawer
                variant="temporary"
                ModalProps={{hideBackdrop: true, disableBackdropClick: true}}
                classes={{paper: clsx(classes.drawerPaper, !openDrawer && classes.drawerPaperClose),}}
                open={openDrawer}>

                <div className={classes.toolbarIcon}>
                    <Typography variant="h6">Plataforma</Typography>
                    <IconButton color="primary" onClick={handleDrawerClose}>
                        <ChevronLeft/>
                    </IconButton>
                </div>
                <Divider/>
                <List>
                    <ListSubheader component="div">
                      Tus ...
                    </ListSubheader>
                    <ListItem button component={RouterLink} to="/pic/cuentas" onClick={handleDrawerClose}>
                        <ListItemIcon><Home /></ListItemIcon>
                        <ListItemText primary="Cuentas"/>
                    </ListItem>
                    <ListItem button component={RouterLink} to="/pic/bienes" onClick={handleDrawerClose}>
                        <ListItemIcon><Home /></ListItemIcon>
                        <ListItemText primary="Bienes"/>
                    </ListItem>
                    <ListItem button component={RouterLink} to="/pic/licencias" onClick={handleDrawerClose}>
                        <ListItemIcon><Home /></ListItemIcon>
                        <ListItemText primary="Licencias y Permisos"/>
                    </ListItem>
                    <ListItem button component={RouterLink} to="/pic/cuentas" onClick={handleDrawerClose}>
                        <ListItemIcon><Home /></ListItemIcon>
                        <ListItemText primary="Inscripción / Beneficios / Prestaciones"/>
                    </ListItem>

                    <ListSubheader component="div">
                      Gestiones
                    </ListSubheader>
                    <ListItem button component={RouterLink} to="/pic/home" onClick={handleDrawerClose}>
                        <ListItemIcon><Home /></ListItemIcon>
                        <ListItemText primary="Infracciones y Pagos Voluntarios"/>
                    </ListItem>

                    <ListItem button component={RouterLink} to="/pic/home" onClick={handleDrawerClose}>
                        <ListItemIcon><Home /></ListItemIcon>
                        <ListItemText primary="Sellados"/>
                    </ListItem>

                    <ListItem button component={RouterLink} to="/pic/home" onClick={handleDrawerClose}>
                        <ListItemIcon><Home /></ListItemIcon>
                        <ListItemText primary="Trámites"/>
                    </ListItem>

                    <ListItem button component={RouterLink} to="/pic/home" onClick={handleDrawerClose}>
                        <ListItemIcon><Home /></ListItemIcon>
                        <ListItemText primary="Reclamos"/>
                    </ListItem>

                    <ListSubheader component="div">
                      Perifil
                    </ListSubheader>

                    <ListItem button component={RouterLink} to="/pic/home" onClick={handleDrawerClose}>
                        <ListItemIcon><Home /></ListItemIcon>
                        <ListItemText primary="Mis Datos"/>
                    </ListItem>

                    <ListItem button component={RouterLink} to="/pic/home" onClick={handleDrawerClose}>
                        <ListItemIcon><Home /></ListItemIcon>
                        <ListItemText primary="Novedades"/>
                    </ListItem>

                    <ListItem button component={RouterLink} to="/pic/home" onClick={handleDrawerClose}>
                        <ListItemIcon><Home /></ListItemIcon>
                        <ListItemText primary="Notificaciones"/>
                    </ListItem>
                    <ListItem button component={RouterLink} to="/pic/home" onClick={handleDrawerClose}>
                        <ListItemIcon><Home /></ListItemIcon>
                        <ListItemText primary="Mis Documentos"/>
                    </ListItem>
                    <ListItem button component={RouterLink} to="/pic/apoderados" onClick={handleDrawerClose}>
                        <ListItemIcon><Home /></ListItemIcon>
                        <ListItemText primary="Gestionar a otra persona"/>
                    </ListItem>
                </List>
            </Drawer>
            }

            <main className={classes.content}>
                <div className={classes.appBarSpacer}/>
                {props.children}
            </main>
        </div>
    );
}

export default FullLayout;
