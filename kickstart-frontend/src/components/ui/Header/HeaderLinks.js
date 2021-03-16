/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "../CustomDropdown/CustomDropdown.js";
import Button from "../CustomButtons/Button.js";

import styles from "../jss/material-kit-react/components/headerLinksStyle";

import ConnectLink from '../../ConnectLink';

const dashboardRoutes = [];
const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      {(props.account !== 0 && props.account !== undefined) &&
      <ListItem className={classes.listItem}>
        <Button
          href="/campaigns/new"
          color="transparent"
          className={classes.navLink}
        >
          Create Campaign
        </Button>
      </ListItem>}

      <ListItem className={classes.listItem}>
        <Button
          href="/opens"
          color="transparent"
          className={classes.navLink}
        >
          Explore
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Button
          href="/about/us"
          color="transparent"
          className={classes.navLink}
        >
          About us
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Button
          color="primary"
          className={classes.navLink}
        >
          <ConnectLink />
        </Button>
        
      </ListItem>
    </List>
  );
}