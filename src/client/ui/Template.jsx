import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    minHeight: '100vh',
    minWidth: '100vw',
  },
  centeredRoot: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    minHeight: '100vh',
    minWidth: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
});

const Template = ({ classes, children, centered }) => (
  <div className={centered ? classes.centeredRoot : classes.root}>
    {children}
  </div>
);

export default withStyles(styles)(Template);
