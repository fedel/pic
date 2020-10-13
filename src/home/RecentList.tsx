import React from 'react';
import RecentListItem from './RecentListItem';
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

function RecentList(props: any) {
    const classes = useStyles();

    return (
        <Container>
            <List className={classes.root}>
                <RecentListItem/>
                <RecentListItem/>
                <RecentListItem/>
                <RecentListItem/>
                <RecentListItem/>
            </List>
            <Box>
                <Button startIcon={ <ChevronLeft/> }>Prev</Button>
                <Button endIcon={ <ChevronRight/> }>Next</Button>
            </Box>

        </Container>
    );
  }
  
export default RecentList;
