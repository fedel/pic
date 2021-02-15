import React from 'react';
import { makeStyles, Theme, createStyles, Toolbar, Typography, Button, Container, Box, Grid, Hidden, Paper, TextField, Link, Divider, IconButton, Chip, Menu, MenuItem, Backdrop } from "@material-ui/core";
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

function WebMensajePage(props: any) {
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
            <Typography variant="body1"><b>12 de Enero 2021, Rosario</b></Typography>
            <Typography variant="h3">Aviso de deuda</Typography>
          </p>
          <p>
            <Typography variant="body1">Secretaría de Hacienda</Typography>
          </p>

          <p>
            <Button variant="contained" color="primary">Gestionar</Button>
          </p>

          <p>
            <Paper style={{backgroundColor: "#eaeaea", paddingLeft: 12}}>
          <tbody>
    <tr>
        <td colSpan={2} >
            <h1 ><span >Aviso</span> de <span >Deuda</span></h1>
            <h1 >Tasa General de Inmuebles</h1>
        </td>
    </tr>
    <tr>
        <td colSpan={2}>
          <p ><b>CONTRIBUYENTE:</b>&nbsp;LUNA FEDERICO MIGUEL - 20-24586843-0</p>
          <p>
            <b>UBICACIÓN:</b>&nbsp;GALLO 1143<br></br>
            <b>NRO CUENTA:</b>&nbsp;0061104306
          </p>
                           <p>
                Según nuestros registros, con pagos acreditados al 15/12/2020, esta cuenta registra <span >deuda</span> en vía Administrativa por los siguientes períodos:
             </p>
            <p>2019: 10. </p>
            <p>Total: $268,16</p>
            <p>* Independientemente de otra <span >deuda</span> que registre por éste tributo.</p>
            <p>(Contiene intereses resarcitorios hasta 23/12/2020)</p>
          <p>
            Podrá regularizar su <span >deuda</span> acogiéndose a la Moratoria (Ord. 10.028/2019) hasta el 31/12/2020 con los siguientes beneficios:
          </p>
          <ul>        
            <li>Pago contado: 50 % descuento de intereses resarcitorios.</li>
            <li>Hasta 6 cuotas sin interés financiero y descuento del 20% en intereses resarcitorios.</li>
            <li>Hasta 12 cuotas sin interés financiero.</li>
            <li>Planes hasta 36 y 60 cuotas, de acuerdo a la obligación a regularizar.</li>
          </ul>
          <p>
            <b>Trámite on line disponible:</b>:                        
          </p>
          <ul>
          <li>Ingresando al portal de Afip con cuit y clave fiscal y adhiriendo el Servicio: Municipalidad de Rosario trámites tributarios.</li>
          <li>A través de nuestro sitio web <a href="http://www.rosario.gov.ar" target="_blank" data-saferedirecturl="https://www.google.com/url?q=http://www.rosario.gov.ar&amp;source=gmail&amp;ust=1613498630371000&amp;usg=AFQjCNFpiYMMWMfokbRUsIIkVXxv1vSNuQ">www.rosario.gov.ar</a> Estado de cuenta, ingresando con su número de cuenta y código de gestión personal (el cual figura en su boleta).</li>
          </ul>
          <p>
          O En forma presencial en el Centro Municipal de Distrito más cercano a su domicilio (previo solicitar turno vía web en el CMD).
          </p>
          
        </td>
      </tr>
    <tr>
        <td align="left">
            <p>Municipalidad de Rosario</p>
            <p>Contacto: 
            <a>tributos@rosario.gob.ar</a> / 
            
            <a href="https://www.rosario.gob.ar/web/gobierno/tributos" rel="noopener noreferrer" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.rosario.gob.ar/web/gobierno/tributos&amp;source=gmail&amp;ust=1613498630371000&amp;usg=AFQjCNHb9y-NBmNHPUDoQ_ihRH-brSx1Jw">rosario.gob.ar/tributos</a></p>
        </td>
        <td align="left">
            <img src="https://ci3.googleusercontent.com/proxy/8mlk0Ip7nl-MaduB6krnwczBA_noQkYJmjJbZnGqiIZO2WJn9HcEvbPL_GcHY7_GRDqE0DTdLp2q7s-PfoaO4Gd0n5r_ggEWj1ZZE81ZW6G6-LCjClcsmg=s0-d-e1-ft#https://www.rosario.gob.ar/estilos/iframes/assets/img/logo_mobile.png" alt="Municipalidad de Rosario" width="162" height="70"></img>
            <br></br>
        </td>
    </tr>

    <tr>
        <td colSpan={2}>
            <p>&nbsp;</p>
        </td>
    </tr>
</tbody>
</Paper>

          </p>

          <p>
            <Button component={RouterLink} to="/pic/web/home" color="primary" variant="contained">Volver</Button>
          </p>


        </Paper>
      }


    </Container>
  );
}

export default WebMensajePage;
