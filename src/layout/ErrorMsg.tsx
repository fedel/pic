import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
    },
  }),
);

function ErrorMsg(props: any) {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        Error: {props.error.message} 
      </div>
    );
  }
  
export default ErrorMsg;
