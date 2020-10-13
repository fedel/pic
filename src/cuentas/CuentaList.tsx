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

function CuentaList(props: any) {
    const classes = useStyles();

    return (
        <Container>
            <div className={classes.root}>
                <CuentaListItem cuenta={{
                  tipo: "Cuenta",
                  icon: "Home",
                  titulo: "TGI 2334234",
                  domicilio: "Superi 1363",
                  subtitulo: "Tasa General de Inmuebles",
                  titular: "Federico Luna",
                  saldo: "$ 603,34",
                  saldoDeuda: true,
                  campoRel0: "PARCELA",
                  valorRel0: "01/192/101/0/0",

                  atributos: [
                    { codigo: "Parcela", seccion: "Relacion", titulo: "PARCELA", valor: "01/192/101/0/0", subvalor: "(123 m2)",}
                  ],
                  
                  acciones: [
                    { codigo: "", seccion: "Objeto", titulo:"Gestionar Libre Deuda" },
                    { codigo: "", seccion: "Objeto", titulo:"Adhesión Boleta Digital" },
                    { codigo: "", seccion: "Objeto", titulo:"Más..." },

                    { codigo: "", seccion: "Relacion", titulo:"Trámites para la Parcela..." },
                  ],
                  
                  

                }}/>

                <CuentaListItem cuenta={{
                  tipo: "Cuenta",
                  icon: "FormartListNumberd",
                  titulo: "CVP 14585334",
                  domicilio: "San Juan 473 Dto1",
                  subtitulo: "Convenio de Pago",
                  titular: "Federico Luna y Otra",
                  saldo: "$ 2.200,34",
                  saldoDeuda: true,
                  campoRel0: "CUENTA",
                  valorRel0: "TGI 2334234",

                  atributos: [
                    { codigo: "Convenio.Cuenta",  seccion: "Relacion", titulo: "Cuenta", valor: "TGI 3233214", subvalor: "(123 m2)"},
                    { codigo: "Convenio.Plan",  seccion: "Relacion", titulo: "Plan", valor: "Plan Moratoria 2019"},
                    { codigo: "Convenio.Fecha",  seccion: "Relacion", titulo: "Fecha Confección", valor: "2019-11-21"},
                  ],
                  
                  acciones: [
                    { codigo: "", seccion: "Objeto", titulo:"Acción para el Convenio" },
                    { codigo: "", seccion: "Relacion", titulo:"Ver Cuenta..." },
                  ],

                }}/>

                <CuentaListItem cuenta={{
                  tipo: "Cuenta",
                  icon: "Store",
                  titulo: "DREI 3334344",
                  domicilio: "Santa Fe 892 - Rosario",
                  subtitulo: "Derecho Registro Inspección Regimen Simplif.",
                  titular: "Federico Luna",
                  saldo: "$ 18874,00",
                  saldoMulta: true,
                  campoRel0: "PERMISO",
                  valorRel0: "1323/2020",
                  subValorRel0: "(venc. 10/10/2025)",
                }}/>

                <CuentaListItem cuenta={{
                  tipo: "Cuenta",
                  icon: "Storefront",
                  titulo: "ETUR 3334344",
                  domicilio: "Santa Fe 892 - Rosario",
                  subtitulo: "Derecho ...Ente Turismo",
                  titular: "Federico Luna",
                  saldo: "$ 887,00",
                  saldoMulta: true,
                  campoRel0: "PERMISO",
                  valorRel0: "32323/2020",
                  subValorRel0: "(10/10/2025)",
                }}/>

                <CuentaListItem cuenta={{
                  tipo: "Cuenta",
                  icon: "FeaturedVideo",
                  titulo: "DERPUB 3334344",
                  domicilio: "Santa Fe 892 - Rosario",
                  subtitulo: "Derecho Publicitario",
                  titular: "Federico Luna",
                  saldo: "$ 2283,00",
                  saldoMulta: true,
                  campoRel0: "PERMISO",
                  valorRel0: "32323/2020",
                  subValorRel0: "(10/11/2023)",
                }}/>

                <CuentaListItem cuenta={{
                  tipo: "Cuenta",
                  icon: "DeleteSweep",
                  titulo: "TRESID 3334344",
                  domicilio: "Santa Fe 892 - Rosario",
                  subtitulo: "Derecho Publicitario",
                  titular: "Federico Luna",
                  saldo: "$ 454,00",
                  saldoMulta: true,
                  campoRel0: "PERMISO",
                  valorRel0: "32323/2020",
                  subValorRel0: "(10/11/2023)",
                }}/>

                <CuentaListItem cuenta={{
                  tipo: "Cuenta",
                  icon: "DirectionsBike",
                  titulo: "BICI 24586843",
                  domicilio: "Villarico 892 - Rosario",
                  subtitulo: "Mi Bici Tu Bici",
                  titular: "Federico Luna",
                  saldo: "$ 1502,00",
                  campoRel0: "PUNTOS",
                  valorRel0: "3403",
                }}/>
            </div>
            <Box>
                <br></br>
                <Button endIcon={ <ChevronRight/> }>Más</Button>
            </Box>

        </Container>
    );
  }
  
export default CuentaList;
