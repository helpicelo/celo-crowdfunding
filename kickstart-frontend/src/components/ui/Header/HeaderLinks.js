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
import {connect} from "react-redux";

const dashboardRoutes = [];
const useStyles = makeStyles(styles);

function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      {(props.account !== 0 && props.account !== undefined) &&
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          className={classes.navLink}
        >
          <Link to="/campaigns/new">Create Campaign</Link>
        </Button>
      </ListItem>}

      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          className={classes.navLink}
        >
          <Link to="/opens">Explore</Link>
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          className={classes.navLink}
        >
          <Link to="/about/us">About us</Link>
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Button color="primary" round><ConnectLink/></Button>
      </ListItem>
    </List>
  );
}

function mapStateToProps(state) {
  const statusAccount = {
    account: state.loadAccounts.account,
  }
  return statusAccount;
}

export default connect(mapStateToProps, null)(HeaderLinks);