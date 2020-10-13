import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "absolute",
      left: "45%",
    },
  }),
);

function LoadingMsg(props: any) {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        Loading...
      </div>
    );
  }
  
export default LoadingMsg;
