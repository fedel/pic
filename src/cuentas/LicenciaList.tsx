import React from 'react';
import CuentaListItem from './CuentaListItem';
import { makeStyles, Theme, createStyles, Container, List, Box, Button } from '@material-ui/core';
import ChevronRight from '@material-ui/icons/ChevronRight';
import ChevronLeft from '@material-ui/icons/ChevronLeft';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
    },
    inline: {
        display: "inline",
    },
  }),
);

function LicenciaList(props: any) {
    const classes = useStyles();

    return (
        <Container>
            <div className={classes.root}>
                <CuentaListItem cuenta={{
                  tipo: "Licencia",
                  icon: "DirectionsCar",
                  subtitulo: "Licencia de Conducir",
                  titulo: "LCON 2586843",
                  domicilio: "Superi 1363",
                  titular: "Federico Luna",
                  campoRel0: "VENCIMIENTO",
                  valorRel0: "10/01/2023",
                  subValorRel0: "",

                  atributos: [
                    { codigo: "Vencimiento", seccion: "Relacion", titulo: "VENCIMIENTO", valor: "10/01/2023"}
                  ],
                  
                  acciones: [
                    { codigo: "", seccion: "Objeto", titulo:"Renovar" },
                    { codigo: "", seccion: "Objeto", titulo:"Otros..." },
                  ],

                }}/>

                <CuentaListItem cuenta={{
                  tipo: "Licencia",
                  icon: "Domain",
                  titulo: "LOBRA 2323/2020",
                  domicilio: "Santa Fe 892 - Rosario",
                  subtitulo: "Permiso de Obra",
                  titular: "ALGUIEN SRL (33245887340)",
                  campoRel0: "ARQUITECO",
                  valorRel0: "Juan Marcos Arquite",
                  subValorRel0: "",
                }}/>


                <CuentaListItem cuenta={{
                  tipo: "Licencia",
                  icon: "Store",
                  titulo: "LHAB 1938/2020",
                  domicilio: "Santa Fe 892 - Rosario",
                  subtitulo: "Comercio",
                  titular: "ALGUIEN SRL (33245887340)",
                  campoRel0: "ADICIONALES",
                  valorRel0: "+TOLDOS +MESAS",
                  subValorRel0: "",
                }}/>

                <CuentaListItem cuenta={{
                  tipo: "Licencia",
                  icon: "LocalTaxi",
                  titulo: "LTR 8297",
                  domicilio: "Santa Fe 892 - Rosario",
                  subtitulo: "Licencia Taxi y Remises",
                  titular: "Federico Luna (33245887340)",
                  campoRel0: "VENCE",
                  valorRel0: "2023/10/11",
                  subValorRel0: "",
                }}/>


            </div>
            <Box>
                <br></br>
                <Button endIcon={ <ChevronRight/> }>Más</Button>
            </Box>

        </Container>
    );
  }
  
export default LicenciaList;
