import React from 'react';
import * as firebase from 'firebase';

// UI
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import amber from '@material-ui/core/colors/amber';
import WarningIcon from '@material-ui/icons/Warning';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 1.5,
  },
  message: {
    backgroundColor: amber[700],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    margin: theme.spacing.unit * 1.5,
  },
  messageText: {
    color: theme.palette.common.white,
    fontWeight: 500,
  },
});

class Login extends React.Component {
  handleLogin = async () => {
    const { history } = this.props;

    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    firebase.auth().languageCode = 'cz';
    provider.setCustomParameters({
      login_hint: 'user@example.com',
    });

    try {
      await firebase.auth().signInWithPopup(provider);
      const idToken = await firebase.auth().currentUser.getIdToken(true);

      localStorage.setItem('googleIdToken', idToken);
      history.push('/dashboard');
    } catch (error) {
      console.log(error);
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // const email = error.email;
      // const credential = error.credential;

      // @TODO: Handle errors...
    }
  }

  render() {
    const { classes } = this.props;


    return (
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form className={classes.form}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input id="email" name="email" autoComplete="email" autoFocus />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input name="password" type="password" id="password" autoComplete="current-password" />
            </FormControl>
            <Paper className={classes.message}>
              <WarningIcon className={classes.messageText} fontSize="large" />
              <Typography align="center" variant="body1" color="inherit" className={classes.messageText}>Email and password login is not supported yet :( Use Google account to login</Typography>
            </Paper>
            <Button
              disabled
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Login
            </Button>
          </form>

          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            onClick={this.handleLogin}
          >
            Login using Google account
          </Button>
        </Paper>
      </main>
    );
  }
}

export default withStyles(styles)(Login);
