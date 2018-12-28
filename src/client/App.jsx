import React from 'react';
import { Switch, Route } from 'react-router';
import * as firebase from 'firebase';
import Dashboard from './routes/Dashboard';
import Login from './routes/Login';
import PrivateRoute from '../utils/PrivateRoute';
import Home from './routes/Home';
import config from '../config';

// init the app on load.
firebase.initializeApp({
  apiKey: config.FIREBASE_API_KEY,
  authDomain: config.FIREBASE_AUTH_DOMAIN,
  databaseURL: config.FIREBASE_DB_URL,
  projectId: config.FIREBASE_PROJECT_ID,
});

class App extends React.Component {
  // Remove the server-side injected CSS.
  componentDidMount() {
    const jssStyles = document.getElementById('jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
      </Switch>
    );
  }
}

export default App;
