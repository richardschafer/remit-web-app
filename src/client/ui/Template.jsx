import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    minHeight: '100vh',
    minWidth: '100vw',
  },
});

const Template = ({ classes, children }) => (
  <div className={classes.root}>
    {children}
  </div>
);

export default withStyles(styles)(Template);
