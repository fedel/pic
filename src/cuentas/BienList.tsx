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

function BienList(props: any) {
    const classes = useStyles();

    return (
        <Container>
            <div className={classes.root}>
                <CuentaListItem cuenta={{
                  tipo: "Bien",
                  icon: "Home",
                  subtitulo: "Parcela",
                  titulo: "PAR 01/192/98/01",
                  domicilio: "Superi 1363",
                  titular: "Federico Luna",

                  atributos: [
                    { codigo: "Parcela", seccion: "Relacion", titulo: "PARCELA", valor: "01/192/101/0/0", subvalor: "(123 m2)",}
                  ],
                  
                  acciones: [
                    { codigo: "", seccion: "Objeto", titulo:"Ver Tramites" },
                  ],

                }}/>

                <CuentaListItem cuenta={{
                  tipo: "Bien",
                  icon: "Store",
                  titulo: "COMERCIO 12928374",
                  domicilio: "Santa Fe 892 - Rosario",
                  subtitulo: "Comercio",
                  titular: "ALGUIEN SRL (33245887340)",
                  campoRel0: "ALGUN",
                  valorRel0: "CAMPO",
                  subValorRel0: "",
                }}/>


                <CuentaListItem cuenta={{
                  tipo: "Bien",
                  icon: "DirectionsBus",
                  titulo: "TRANSP 993022",
                  domicilio: "Santa Fe 892 - Rosario",
                  subtitulo: "Comercio",
                  titular: "ALGUIEN SRL (33245887340)",
                  campoRel0: "ALGUN",
                  valorRel0: "CAMPO",
                  subValorRel0: "",
                }}/>

                <CuentaListItem cuenta={{
                  tipo: "Bien",
                  icon: "DirectionsCar",
                  titulo: "VEH JHL897",
                  domicilio: "Santa Fe 892 - Rosario",
                  subtitulo: "Comercio",
                  titular: "Federico Luna (33245887340)",
                  campoRel0: "ALGUN",
                  valorRel0: "CAMPO",
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
  
export default BienList;
