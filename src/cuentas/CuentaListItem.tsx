import React from 'react';
import { makeStyles, Theme, createStyles, ListItem, ListItemAvatar, Avatar, ListItemText, Typography, Grid, Container, Box, Button, Chip, ButtonBase, Divider, Paper, Hidden } from '@material-ui/core';
import HomeIcon from "@material-ui/icons/HomeOutlined"
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar"
import DirectionsBusIcon from "@material-ui/icons/DirectionsBus"
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered"
import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike"
import StoreIcon from "@material-ui/icons/Store"
import StorefrontIcon from "@material-ui/icons/Storefront"
import FeaturedVideoIcon from "@material-ui/icons/FeaturedVideo"
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep"
import DomainIcon from "@material-ui/icons/Domain"
import LocalTaxiIcon from "@material-ui/icons/LocalTaxi"

import { Link as RouterLink } from "@reach/router";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(2),
    },

    button: {
      lineHeight: "inherit",
      margin: 0,
      padding: 12,
    },

    inline: {
      display: "inline",
    },

    icon: {
      marginTop: 1,
    },

    item: {
      textAlign: "left",
      verticalAlign: "top",
    },
    row2: {
      marginTop: theme.spacing(1),
    }
  }),
);


function CuentaIcon(props: any) {
  const classes = useStyles();

  return (
    <span>
      {props.icon === "Home" &&
        <HomeIcon className={classes.icon} fontSize={props.size}  />
      }

      {props.icon === "Store" &&
        <StoreIcon className={classes.icon} fontSize={props.size}  />
      }

      {props.icon === "Storefront" &&
        <StorefrontIcon className={classes.icon} fontSize={props.size}  />
      }

      {props.icon === "DirectionsCar" &&
        <DirectionsCarIcon className={classes.icon} fontSize={props.size}  />
      }

      {props.icon === "DirectionsBike" &&
        <DirectionsBikeIcon className={classes.icon} fontSize={props.size}  />
      }

      {props.icon === "DirectionsBus" &&
        <DirectionsBusIcon className={classes.icon} fontSize={props.size}  />
      }

      {props.icon === "FormartListNumberd" &&
        <FormatListNumberedIcon className={classes.icon} fontSize={props.size}  />
      }

      {props.icon === "FeaturedVideo" &&
        <FeaturedVideoIcon className={classes.icon} fontSize={props.size}  />
      }

      {props.icon === "DeleteSweep" &&
        <DeleteSweepIcon className={classes.icon} fontSize={props.size}  />
      }

      {props.icon === "Domain" &&
        <DomainIcon className={classes.icon} fontSize={props.size}  />
      }

      {props.icon === "LocalTaxi" &&
        <LocalTaxiIcon className={classes.icon} fontSize={props.size} />
      }
    </span>
  )
}



function CuentaListItem(props: any) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Button fullWidth className={classes.button} component={RouterLink} to="/objeto" state={{ cuenta: props.cuenta }}>
        <Grid container item xs={12} spacing={2} className={classes.item}>
          <Hidden xsDown>
            <Grid item xs={1}>
              <CuentaIcon icon={props.cuenta.icon} size="large"/>
            </Grid>
          </Hidden>

          <Grid item xs={7}>
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <Hidden smUp>
                  <CuentaIcon icon={props.cuenta.icon} size="large"/>
                </Hidden>
                <Typography display="block" variant="caption">{props.cuenta?.subtitulo}</Typography>
                <Typography display="inline" variant="subtitle2">{props.cuenta?.titulo}</Typography>
                <Typography display="inline" variant="body2"> &nbsp;&nbsp; {props.cuenta?.domicilio}</Typography>

                <Box>
                  <Typography display="inline" variant="caption">{props.cuenta?.titular}</Typography>
                </Box>
              </Grid>
            </Grid>

            <Hidden xsDown>
              <Grid container className={classes.row2}>
                <Grid item xs={12}>
                  <Box>
                    <Typography variant="caption">{props.cuenta?.campoRel0}</Typography>
                  </Box>
                  <Typography display="inline" variant="subtitle2">{props.cuenta?.valorRel0}</Typography>
                  <Typography variant="caption">&nbsp;&nbsp;{props.cuenta?.subValorRel0}</Typography>
                </Grid>
              </Grid>
            </Hidden>
          </Grid>

          {props.cuenta?.saldo &&
            <Grid item xs={4}>
              <Typography variant="caption">SALDO</Typography>
              <Typography variant="h6">{props.cuenta?.saldo}</Typography>

              <Typography variant="caption">Venc 12/09/2003</Typography>
              <div className={classes.row2} >
                {props.cuenta.saldoDeuda &&
                  <Chip size="small" label="Deuda" />
                }
                {props.cuenta.saldoMulta &&
                  <Chip size="small" label="Multa" />
                }
              </div>
            </Grid>
          }

        </Grid>
      </Button>
    </Paper>
  );
}

export default CuentaListItem;
