import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import LaunchIcon from '@material-ui/icons/Launch';

const styles = {
  link: {
    textDecoration: 'none'
  },
  icon: {
    paddingLeft: 2,
    width: '0.5em'
  }
};

const MyUrlField = ({ record = {}, source, classes }) => (
  <a href={record[source]} className={classes.link}>
    {record[source]}
    <LaunchIcon className={classes.icon} />
  </a>
);

export default withStyles(styles)(MyUrlField);
