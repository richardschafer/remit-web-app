import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import AlarmIcon from '@material-ui/icons/AlarmOn';
import AssignmentIcon from '@material-ui/icons/Assignment';
import LabelIcon from '@material-ui/icons/Label';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  appBar: {
    position: 'relative',
  },
  toolbarTitle: {
    flex: 1,
  },
  layout: {
    width: 'auto',
    minHeight: '60vh',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: 900,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200],
  },
  cardIcon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing.unit * 2,
  },
  footer: {
    marginTop: theme.spacing.unit * 8,
    borderTop: `1px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit * 6}px 0`,
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: 900,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
});

const tiers = [
  {
    title: 'Assignments',
    icon: <AssignmentIcon fontSize="large" />,
    description: 'assign practice',
  },
  {
    title: 'Reminders',
    icon: <AlarmIcon fontSize="large" />,
    description: 'Remind yourself to practice',
  },
  {
    title: 'Labeling',
    icon: <LabelIcon fontSize="large" />,
    description: 'Tag different types',
  },
];
const footers = [
  {
    title: 'REMIT',
    description: ['placeholder'],
  },
  {
    title: 'REMIT',
    description: ['placeholder', 'placeholder', 'placeholder', 'placeholder', 'placeholder'],
  },
  {
    title: 'REMIT',
    description: ['placeholder', 'placeholder'],
  },
  {
    title: 'REMIT',
    description: ['placeholder'],
  },
];

function Pricing(props) {
  const { classes, history } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            REMIT
          </Typography>
          <Button>Main Idea</Button>
          <Button>How - to</Button>
          <Button>Register</Button>
          <Button color="primary" onClick={() => history.push('/login')} variant="outlined">
            Login into the app
          </Button>
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            REMember IT
          </Typography>
          <Typography variant="h6" align="center" color="textSecondary" component="p">
            App based on Anki learning style to help you stop forgeting informations you
            harvest during the day.
          </Typography>
        </div>
        {/* End hero unit */}
        <Grid container spacing={40} alignItems="flex-end">
          {tiers.map(tier => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} md={4}>
              <Card>
                <CardHeader
                  title={tier.title}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardIcon}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      {tier.icon}
                    </Typography>
                  </div>
                  <Typography variant="subtitle1" align="center">
                    {tier.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Grid container spacing={32} justify="space-evenly">
          {footers.map(footer => (
            <Grid item xs key={footer.title}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              {footer.description.map(item => (
                <Typography key={item} variant="subtitle1" color="textSecondary">
                  {item}
                </Typography>
              ))}
            </Grid>
          ))}
        </Grid>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}

export default withStyles(styles)(Pricing);
