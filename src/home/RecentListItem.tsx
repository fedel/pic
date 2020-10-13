import React from 'react';
import { Link as RouterLink } from "@reach/router"
import { makeStyles, Theme, createStyles, ListItem, ListItemAvatar, Avatar, ListItemText, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
    },
    inline: {
        display: "inline",
    },
  }),
);

function RecentListItem(props: any) {
    const classes = useStyles();

    return (
      <ListItem alignItems="flex-start" button component={RouterLink} to="/maps/433e833c-d60a-4b8c-9ed4-fe05cf893036">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Mapa xyz"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
    );
  }
  
export default RecentListItem;
