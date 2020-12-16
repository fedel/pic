import React from 'react';
import { Link as RouterLink } from "@reach/router"
import { makeStyles, Theme, createStyles, ListItem, ListItemAvatar, Avatar, ListItemText, Typography, Grid, Container, Box, Button, Chip, ButtonBase, Divider, Paper } from '@material-ui/core';
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginBottom: theme.spacing(2),
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

function ApoderadoListItem(props: any) {
    const classes = useStyles();

    return (
      <Paper className={classes.root}>
        <Button fullWidth className={classes.button}>
          <Grid container item xs={12} spacing={2} className={classes.item}>
            <Grid item xs={1}>
              <SupervisedUserCircleIcon className={classes.icon} fontSize="large" />
            </Grid>

            <Grid item xs={6}>
              <Grid container spacing={0}>
                <Grid item xs={12}>
                  <Typography variant="subtitle2">PDR 2238732</Typography>
                  <Box>
                    <Typography display="inline" variant="caption">Maria Noel Gonzalez</Typography>
                  </Box>
                  <Typography variant="caption">Apoderamiento</Typography>
                </Grid>
              </Grid>

              <Grid container className={classes.row2}>
                <Grid item xs={12}>                  
                  <Typography variant="caption">SOBRE</Typography>
                  <Typography variant="subtitle2">TGI 2132334234 - Todo</Typography>
                </Grid>
              </Grid>

            </Grid>

            <Grid item xs={4}>
              <Typography variant="caption">PODER DANTE</Typography>
              <Typography variant="body2">Federico Luna</Typography>
            </Grid>

          </Grid>
          </Button>
      </Paper>
    );
  }
  
export default ApoderadoListItem;
