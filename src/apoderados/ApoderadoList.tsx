import React from 'react';
import ApoderadoListItem from './ApoderadoListItem';
import { makeStyles, Theme, createStyles, Container, List, Box, Button, Toolbar, Typography, ButtonGroup } from '@material-ui/core';
import ChevronRight from '@material-ui/icons/ChevronRight';
import ChevronLeft from '@material-ui/icons/ChevronLeft';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
    },
    inline: {
        display: "inline",
    },
    title: {
      flexGrow: 1,
    },

  }),
);

function ApoderadosList(props: any) {
    const classes = useStyles();

    return (
      <React.Fragment>
        <Toolbar>
            <Typography component="div" variant="h5" color="inherit" noWrap className={classes.title}>
                Apoderados
            </Typography>
        </Toolbar>
        

          <Container>
            <div style={{marginBottom:14}}>
              <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                <Button color="secondary">Todos</Button>
                <Button>Otorgados por Mi</Button>
                <Button>Otorgados a Mi</Button>
              </ButtonGroup>
            </div>

            <div className={classes.root}>
                <ApoderadoListItem cuenta={{
                  icon: "Home",
                  titulo: "TGI 2334234",
                  domicilio: "Super 1363",
                  subtitulo: "Tasa General de Inmuebles",
                  titular: "Federico Luna",
                  saldo: "$ 603,34",
                  saldoDeuda: true,
                  campoRel0: "PARCELA",
                  valorRel0: "01/192/101/0/0",
                  supTotal: "405 m2",
                }}/>

                <ApoderadoListItem cuenta={{
                  icon: "FormartListNumberd",
                  titulo: "CVP 14585334",
                  domicilio: "San Juan 473 Dto1",
                  subtitulo: "Convenio de Pago",
                  titular: "Federico Luna y Otra",
                  saldo: "$ 2.200,34",
                  saldoDeuda: true,
                  campoRel0: "CUENTA",
                  valorRel0: "TGI 2334234",
                }}/>

                <ApoderadoListItem cuenta={{
                  icon: "DirectionsCar",
                  titulo: "LNC 24586843",
                  domicilio: "Villarico 892 - Rosario",
                  subtitulo: "Licencia de Conducir",
                  titular: "Federico Luna",
                  saldo: "$ 1234,00",
                  saldoMulta: true,
                  campoRel0: "VENCIMIENTO",
                  valorRel0: "25/01/2021",
                }}/>

                <ApoderadoListItem cuenta={{
                  icon: "DirectionsBike",
                  titulo: "BICI 24586843",
                  domicilio: "Villarico 892 - Rosario",
                  subtitulo: "Mi Bici Tu Bici",
                  titular: "Federico Luna",
                  saldo: "$ 10234,00",
                  campoRel0: "PUNTOS",
                  valorRel0: "3403",
                }}/>



            </div>
            <Box>
                <br></br>
                <Button endIcon={ <ChevronRight/> }>Más</Button>
            </Box>

        </Container>
        </React.Fragment>
    );
  }
  
export default ApoderadosList;
